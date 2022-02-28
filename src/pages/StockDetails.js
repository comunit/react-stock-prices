import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';
import { reset } from '../features/stocks/stockSlice'
import StockInformation from './StockInformation'


function StockDetails() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {stockSummaryData, stockData, loading, error, errorMessage, success} = useSelector(
      (state) => state.stock
    )

    useEffect(() => {

      if(error) {
        toast.error(errorMessage)
        navigate('/')
      }

      dispatch(reset())

    },[stockSummaryData, stockData, error, success])

    // show loading spinner when loading
    if(loading) {
      return (
        <div className="loader-container">
          <ClipLoader />
        </div>
      )
    }

    if(!stockData || !stockSummaryData) {
      return (
        <h1>No Stock Data available</h1>
      )
    }

    //  check if stockData is empty
    if(stockData !== null) {
      return (
        <StockInformation stockData={stockData} stockSummaryData={stockSummaryData} />
      )
    }
}

export default StockDetails