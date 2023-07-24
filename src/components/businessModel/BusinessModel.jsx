import React from 'react'
import ModelCard from '../../constants/modelCard/ModelCard'
import './businessModel.css'

const BusinessModel = () => {
  return (
    <div className='BM'>
        <div className='BM-container'> 
        <div className='BM-img-background'></div>
            <div className='BM-content'>
                <ModelCard />
            </div>
        </div>
    </div>
  )
}

export default BusinessModel
