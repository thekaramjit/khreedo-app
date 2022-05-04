import React from 'react'
import loading from '../../assets/loading.gif'

function Spinner(props) {
  return (
    <div >
      <img style={{"background":"red"}} className='m-auto d-block' src={loading} alt="loading" />
    </div>
  )
}

export default Spinner