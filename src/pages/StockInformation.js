import React from 'react';
import LineChart from "../components/LineChart";
import { FaArrowLeft, FaExchangeAlt, FaStopwatch, FaFirstOrderAlt, FaRegBuilding, FaVoteYea, FaMoneyCheckAlt } from 'react-icons/fa';
import numeral from 'numeral';

function StockInformation(stock) {

 const {stockData} = stock
 const {stockSummaryData} = stock

  return (
      
    <div className="stock-container">
        <div className="stock-container-inner">
            {/* BACK BUTTON  */}
            <div className="btn btn-primary" onClick={() => window.history.back()}>
                <FaArrowLeft />
            </div>
            
            {/* HEAD  */}
            <div className="stock-name center">{stockData.longName}</div>   
            <div className="stock-symbol center">{stockSummaryData.assetProfile.industry}</div>
            {/* PRICE  */}
            <div className="stock-current-price margin-0-40">
                    <p className='stock-price mb-0'>{stockData.regularMarketPrice}<span className='stock-currency'>{stockData.currency}</span></p>
            </div>
            <div className="linebreak margin-0-40"></div>
            {/* STOCK MARKET STATS  */}
            <div className="stock-stats">
                <div className="stock-stat-box">
                    <div className="icon center">{<FaExchangeAlt/>}</div>
                    <div className="main-info center">{stockData.exchange}</div>
                    <div className="desc center">exchange</div>
                </div>
                <div className="stock-stat-box">
                    <div className="icon center">{<FaStopwatch/>}</div>
                    <div className="main-info center">{stockData.exchangeTimezoneShortName}</div>
                    <div className="desc center">Timezone</div>
                </div>
                <div className="stock-stat-box">
                    <div className="icon center">{<FaFirstOrderAlt/>}</div>
                    <div className="main-info center">{stockData.region}</div>
                    <div className="desc center">Region</div>
                </div>
                <div className="stock-stat-box">
                    <div className="icon center">{<FaRegBuilding/>}</div>
                    <div className="main-info center">{stockData.marketState}</div>
                    <div className="desc center">Market State</div>
                </div>
                <div className="stock-stat-box">
                    <div className="icon center">{<FaVoteYea/>}</div>
                    <div className="main-info center">{stockData.quoteType}</div>
                    <div className="desc center">QuoteType</div>
                </div>
            </div>
            <br />

            <br />
            <LineChart />
            <br />
            {/* ANALYST RATING  */}
            <div className="stock-average-rating margin-0-40">
                <p className="mb-0 an-rating-desc">Average Analyst Rating</p>
                <p className="mb-0 an-output">{stockData.averageAnalystRating}</p>
            </div>
            {/* STOCK VOLUMES  */}
            <br />
            <h6 className='margin-0-40'>Stock Volumes</h6>
            <div className="linebreak margin-0-40"></div>
            <div className="stock-stats">
                <div className="stock-stat-box">
                    <div className="main-info center">{numeral(stockData.marketCap).format("0.00 a")}</div>
                    <div className="desc center">Market Cap</div>
                </div>
                <div className="stock-stat-box">
                    <div className="main-info center">{numeral(stockData.regularMarketVolume).format("0.00 a")}</div>
                    <div className="desc center">Regular Market Volume</div>
                </div>
                <div className="stock-stat-box">
                     <div className="main-info center">{numeral(stockData.averageDailyVolume10Day).format("0.00 a")}</div>
                    <div className="desc center">Average Daily Volume 10 Day</div>
                </div>
                <div className="stock-stat-box">
                    <div className="main-info center">{numeral(stockData.averageDailyVolume3Month).format("0.00 a")}</div>
                    <div className="desc center">Average Daily Volume 3 Month</div>
                </div>
                <div className="stock-stat-box">
                <div className="main-info center">{numeral(stockData.sharesOutstanding).format("0.00 a")}</div>
                    <div className="desc center">Shares Outstanding</div>
                </div>
            </div>
            {/* STOCK PRICE CHANGES STATS  */}
            {/* FIRST TWO TABLES */}
            <h6 className='margin-0-40'>Regular Market Stats</h6>
            <div className="linebreak margin-0-40"></div>
            <div className="stock-price-stats">
                <div className="stock-price-stats-inner">
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                        Regular Market Change
                        </div>
                        <div className="stocks-price-second">
                        {numeral(stockData.regularMarketChange).format("0,0.00")}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                        Regular Market Day High
                        </div>
                        <div className="stocks-price-second">
                        {numeral(stockData.regularMarketDayHigh).format("0,0.00")}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                        Regular Market Day Low
                        </div>
                        <div className="stocks-price-second">
                        {numeral(stockData.regularMarketDayLow).format("0,0.00")}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                        Regular Market Day Range
                        </div>
                        <div className="stocks-price-second">
                        {stockData.regularMarketDayRange}
                        </div>   
                    </div>
                </div>
                <div className="stock-price-stats-inner">
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                        Regular Market Price
                        </div>
                        <div className="stocks-price-second">
                        {numeral(stockData.regularMarketPrice).format("0,0.00")}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                        Regular Market Open
                        </div>
                        <div className="stocks-price-second">
                        {numeral(stockData.regularMarketOpen).format("0,0.00")}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                        Regular Market Close
                        </div>
                        <div className="stocks-price-second">
                        {numeral(stockData.regularMarketPreviousClose).format("0,0.00")}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                        R Market Change Percent
                        </div>
                        <div className="stocks-price-second">
                        {numeral(stockData.regularMarketChangePercent).format("0,0.00")}
                        </div>   
                    </div>
                </div>
            </div>
            <h6 className='margin-0-40'>Weeks Of Average And Comapny Finance</h6>
            <div className="linebreak margin-0-40"></div>
            {/* SECOND TWO TABLES  */}
            <div className="stock-price-stats">
                <div className="stock-price-stats-inner">
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                            50 Day Average
                        </div>
                        <div className="stocks-price-second">
                            {numeral(stockData.fiftyDayAverage).format("0,0.00")}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                            52 Week High
                        </div>
                        <div className="stocks-price-second">
                            {numeral(stockData.fiftyTwoWeekHigh).format("0,0.00")}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                            52 Week Low
                        </div>
                        <div className="stocks-price-second">
                            {numeral(stockData.fiftyTwoWeekLow).format("0,0.00")}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                            52 Week Range
                        </div>
                        <div className="stocks-price-second">
                            {stockData.fiftyTwoWeekRange}
                        </div>   
                    </div>
                </div>
                <div className="stock-price-stats-inner">
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                         Sector
                        </div>
                        <div className="stocks-price-second">
                         {stockSummaryData.assetProfile.sector}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                         TotalRevenue
                        </div>
                        <div className="stocks-price-second">
                         {stockSummaryData.financialData.totalRevenue.fmt}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                         Total Debt
                        </div>
                        <div className="stocks-price-second">
                         {stockSummaryData.financialData.totalDebt.fmt}
                        </div>   
                    </div>
                    <div className="stock-price-stats-tables">
                        <div className="stocks-price-first">
                        Total Cash
                        </div>
                        <div className="stocks-price-second">
                        {stockSummaryData.financialData.totalCash.fmt}
                        </div>   
                    </div>
                </div>
            </div>
            {/* BUSINESS SUMMARY  */}
            <h6 className='margin-0-40'>Business Summary</h6>
            <div className="linebreak margin-0-40"></div>
            <div className="longbusinesssummary">
                {stockSummaryData.assetProfile.longBusinessSummary}
            </div>
        </div>
    </div>
  )
}

export default StockInformation