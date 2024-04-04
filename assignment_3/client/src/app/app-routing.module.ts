import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './component/search/search.component';
import { RecommendComponent } from './component/recommend/recommend.component';
import { WatchlistComponent } from './component/watchlist/watchlist.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent,
    children: [
      {
        path: ':ticker',
        component: RecommendComponent,
      },
      {
        path: 'home',
        component: RecommendComponent,
      }
    ],
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
