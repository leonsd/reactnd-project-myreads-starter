import React from 'react'
import { HashLoader } from 'react-spinners'

const Spinner = (props) => {
  return(
    <div className='spinner'>
      <div className='sweet-loading'>
        <HashLoader
          color={'#9B9B9B'}
          loading={props.loading}
        />
      </div>
      {props.loading && (
        <div className='backdrop'></div>
      )}
    </div>
  )
}

export default Spinner