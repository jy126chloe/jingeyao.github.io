import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NewService } from 'src/app/service/new.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {UntypedFormControl} from '@angular/forms';
import { AutoService } from 'src/app/service/auto.service';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  autocLoading = false;
  myControl = new UntypedFormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  currentValue = '';
  private search$ = new Subject<string>();

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public server: NewService,
    public autoserver: AutoService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      let urlParams = this.router.url.split('/');
      if(urlParams[1] != 'search' || urlParams[2] == undefined){
        this.router.navigate(['search', 'home']);
      }
    })

    this.search$.pipe(debounceTime(500)).subscribe(value => {
      this.currentValue = value
      if(value.length === 0){
        this.options = [];
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }else{
        var params = {key:value};
        this.autocLoading = true;
        this.options = [];
        const promise = this.autoserver.autoComplate(params);
        promise
        .then((result) => {
          let arr = [];  
          if(result['result'][0] instanceof Object){
            arr.push(result['result'][0]['displaySymbol'] + ' | '+ result['result'][0]['description'],
            result['result'][1]['displaySymbol'] + ' | '+ result['result'][1]['description'],
            result['result'][2]['displaySymbol'] + ' | '+ result['result'][2]['description'],
            result['result'][3]['displaySymbol'] + ' | '+ result['result'][3]['description'],
            result['result'][4]['displaySymbol'] + ' | '+ result['result'][4]['description'],
            );
            this.autocLoading = false;
          }
          this.options = this.currentValue.length == 0 ? [] : arr;
        })
        .catch((err) => {
          throw err;
        });
      }
      }
    )
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  
  private _filter(value: string): string[] {
    if(value.length === 0 && this.options.length === 0){
      this.options = [];
    }
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  // clear button function
  clearSearchInput(): void {
    this.myControl.setValue('');
  }
  
  // search button function
  searchClick(searchword: string): void {
    let ticker = searchword.split(' | ')[0].trim();
    this.myControl.setValue(ticker);
    this.search$.next('');
    this.router.navigate(['search', ticker]);
  }

  // click ticker search function
  onOptionSelected(event: any): void {
    const ticker = event.option.viewValue.split(' | ')[0].trim();
    this.searchClick(ticker);
  }

  onSearch(value: string) {
    value = value.replace(/^\s+|\s+$/g,'');
    this.search$.next(value);
 }

  // autocomplete function
  autoC(searchword: string): void {
    const params = { key: searchword };
    this.autocLoading = true;
    this.autoserver.autoComplate(params)
      .then((result) => {
        let arr = result['result'].map(item => item['displaySymbol'] + ' | ' + item['description']);
        this.options = arr;
        this.autocLoading = false;
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );
      })
      .catch((err) => {
        console.error(err);
        this.autocLoading = false;
      });
  }      
}