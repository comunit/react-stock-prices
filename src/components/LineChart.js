import React, { useEffect } from 'react'
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux'
import ClipLoader from "react-spinners/ClipLoader";
import { getStockChartData } from '../features/stocks/stockSlice'
import { useState} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
function LineChart() {

  const [isActiveRange, setActiveRange] = useState("5d");

  const dispatch = useDispatch()


  const { chartData, chartDataLoading, stockCode} = useSelector(
    (state) => state.stock
  )

  let timestamp;
  let close;
  let Data;

  const handleRangeChange =(e) => {
    // get data attribute
    const range = e.target.getAttribute('data-range');
    const interval = e.target.getAttribute('data-interval');;

    // add class to active button
    setActiveRange(range);
    dispatch(getStockChartData({code: stockCode, range: range, interval: interval}));
  }

  const addActiveClass = () => {
    // get all the btn ranges
    const btnRanges = document.querySelectorAll('.btn-range');

    btnRanges.forEach(btn => {
      if(btn.getAttribute('data-range') === isActiveRange) {
        btn.classList.add('active-range');
      }
    })
  }

  useEffect(() => {
    if(isActiveRange) {
      addActiveClass();
    }
  },[chartData, chartDataLoading])

    if(chartData !== null) {
      timestamp = chartData.timestamp
      close = chartData.indicators.quote[0].close
    }

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: {
                    display: false
                },
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                }
            }
        },

        plugins: {
          tooltip: { 
            displayColors: false,
          },
          legend: {
            display: false
        },
     
      },

        elements: {
            point: {
                radius: 0
            }
        },
        interaction: {
            intersect: false,
        },
    }
    
    if(!chartDataLoading) {

      const closeStockData = [];

      for(let i = 0; i < close.length; i++) {
        if(close[i] !== null) {
          closeStockData.push(close[i]);
        } else {
          if(close[i-1] !== null) {
            closeStockData.push(close[i-1]);
          } 
          
        }
      }
      
      Data = {
        labels: timestamp.map((timestamp) => moment.unix(timestamp).format('DD/MM/YY, H:mm a')),
        datasets: [{
            data: closeStockData,
            borderColor: '#212529',
        }]
      }

      return (
        <>
        <Line options={ options } data={ Data }/>
        <ul className='chart-ranges'>
          <li className='btn-range' data-range="1d" data-interval="1m" onClick={handleRangeChange}>1D</li>
          <li className="btn-range" data-range="5d" data-interval="5m" onClick={handleRangeChange}>5D</li>
          <li className='btn-range' data-range="1mo" data-interval="1d" onClick={handleRangeChange}>1M</li>
          <li className='btn-range' data-range="3mo" data-interval="1d" onClick={handleRangeChange}>3M</li>
          <li className='btn-range' data-range="6mo" data-interval="1d" onClick={handleRangeChange}>6M</li>
          <li className='btn-range' data-range="1y" data-interval="1wk" onClick={handleRangeChange}>1Y</li>
          <li className='btn-range' data-range="max" data-interval="1wk" onClick={handleRangeChange}>MAX</li>
        </ul>
        </>
      )
    } else {
      return (
        <div className="loader-container loader-up">
        <ClipLoader />
      </div>
      )
    }
}

export default LineChart