import React from 'react'
import { useSelector } from 'react-redux'

function TotalBill() {
    const totalBill=useSelector((state)=>state.totalPriceReducer)
  return (
    <div>
        <h1>Your total Bill is : {totalBill}</h1>
    </div>
  )
}

export default TotalBill