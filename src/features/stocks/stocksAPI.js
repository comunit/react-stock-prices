var axios = require('axios');

const API_URL_STOCK_DATA = 'https://yfapi.net/v6/finance/quote?symbols=';
const API_STOCK_SUMMARY_URL = 'https://yfapi.net/v11/finance/quoteSummary/';
const API_CHART_URL = 'https://yfapi.net/v8/finance/chart/';
const API_KEY = 'ZprHzZ8e0u6cIgQDE1NkYaiQwKVJw9ei4GNd8qha';

const GetAPIData = async(stockCode) => {

    const config = {
        headers: {
            'X-API-KEY': API_KEY
        }
    }

    const url = `${API_URL_STOCK_DATA}${stockCode}`;
    const response = await axios.get(url, config);
    if(response.data.quoteResponse.result.length === 0) {
        throw new Error('Stock not found');
    }

    return response.data.quoteResponse.result[0]
}

const GetAPIDataSummary = async(stockCode) => {

    const config = {
        headers: {
            'X-API-KEY': API_KEY
        }
    }

    const url = `${API_STOCK_SUMMARY_URL}${stockCode}?modules=defaultKeyStatistics%2CassetProfile%2CfinancialData%2CsummaryDetail`;
    const response = await axios.get(url, config);

    if(response.data.quoteSummary.error) {
        throw new Error(response.data.quoteSummary.error.description);
    }

    return response.data.quoteSummary.result[0]
}

const getChartData = async(stockCode, range, interval) => {

    const config = {
        headers: {
            'X-API-KEY': API_KEY
        }
    }

    const url = `${API_CHART_URL}${stockCode}?range=${range}&interval=${interval}&lang=en`;
    const response = await axios.get(url, config);
    if(response.data.chart.error) {
        throw new Error(response.data.chart.error.description);
    }

    return response.data.chart.result[0]
}

const stockDataService = {
    GetAPIData,
    GetAPIDataSummary,
    getChartData
}

export default stockDataService;