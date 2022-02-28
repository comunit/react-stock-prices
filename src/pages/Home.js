import React from 'react'
import { useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { setStock, getStockData, getStockDataSummary, getStockChartData } from '../features/stocks/stockSlice'

function Home() {

    // local state
    const [stockValue, setstockValue] = useState('');
  
    // initiate navigate and dispatch
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // handle change of input
    const handleChange = (e) => {
      setstockValue(e.target.value);
    }
  
    // handle submit of form
    const handleFormSubmit = (e) => {
      e.preventDefault();
      // change state in redux
      dispatch(setStock(stockValue));
      // get data from API
      dispatch(getStockData(stockValue));
      dispatch(getStockDataSummary(stockValue));
      dispatch(getStockChartData({code: stockValue, range: '5d', interval: '5m'}));
      // navigate to stockDetails
      navigate('/stockDetails')
    }

  return (
    <div className="flex-container">
    <div className="blur"></div>
    <div className="stock-input-box">
      <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="bold">Enter a Stock Code</Form.Label>
              <Form.Control type="text" placeholder="MGM... COWN..." value={stockValue} onChange={handleChange}/>
          </Form.Group>
          <div className="center">
            <Button variant="primary" type="submit" variant="info" className='btn-search'>
              Get Info
            </Button>
          </div>
      </Form>
    </div>
  </div>
  )
}

export default Home