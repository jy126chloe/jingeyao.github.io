from flask import Flask, request, jsonify, render_template
from datetime import datetime
from dateutil.relativedelta import relativedelta
import requests

app = Flask(__name__)

# API KEYS
API_KEY = 'cn22qn9r01qmg1p4df9gcn22qn9r01qmg1p4dfa0'
API_KEY_2 = 'q_HZt6VdQSKUSisdL5dcYOOSd4oDy9du'

@app.route('/')
def home():
    return render_template('index.html')

# Fetch the company profile data
@app.route('/search', methods=['GET'])
def search():
    query = request.args.get('query')
    url = f'https://finnhub.io/api/v1/stock/profile2?symbol={query}&token={API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Failed to fetch data from Finnhub API'}), 500

# Fetch the stock summary data
@app.route('/quote', methods=['GET'])
def quote():
    ticker = request.args.get('ticker')
    url = f'https://finnhub.io/api/v1/quote?symbol={ticker}&token={API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Failed to fetch quote data from Finnhub API'}), 500

# Fetch the stock recommendation data   
@app.route('/recommendation', methods=['GET'])
def recommendation():
    symbol = request.args.get('symbol')
    if not symbol:
        return jsonify({'error': 'No symbol provided'}), 400
    url = f'https://finnhub.io/api/v1/stock/recommendation?symbol={symbol}&token={API_KEY}'
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return jsonify(data[0] if data else {})  # return the first item or an empty object
    else:
        return jsonify({'error': 'Failed to fetch recommendation trends from Finnhub API'}), 500

# Fetch the charts data
@app.route('/stock_chart', methods=['GET'])
def stock_chart():
    stock_ticker = request.args.get('stockTicker')
    multiplier = 1
    timespan = 'day'

    from_date = datetime.now() - relativedelta(months=6, days=1)
    from_date_str = from_date.strftime('%Y-%m-%d') 

    to_date_str = datetime.now().strftime('%Y-%m-%d')
    query_string = f"adjusted=true&sort=asc&apiKey={API_KEY_2}"
    
    url = f"https://api.polygon.io/v2/aggs/ticker/{stock_ticker}/range/{multiplier}/{timespan}/{from_date_str}/{to_date_str}?{query_string}"
    
    response = requests.get(url)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Failed to fetch data from Polygon.io API'}), response.status_code

# Fetch the company news data
@app.route('/company_news', methods=['GET'])
def company_news():
    symbol = request.args.get('symbol')
    if not symbol:
        return jsonify({'error': 'No symbol provided'}), 400

    from_date = (datetime.now() - relativedelta(days=30)).strftime('%Y-%m-%d')
    to_date = datetime.now().strftime('%Y-%m-%d')  # Current date

    url = f'https://finnhub.io/api/v1/company-news?symbol={symbol}&from={from_date}&to={to_date}&token={API_KEY}'

    response = requests.get(url)
    if response.status_code == 200:
        return jsonify(response.json())
    else:
        return jsonify({'error': 'Failed to fetch company news from Finnhub API'}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)
