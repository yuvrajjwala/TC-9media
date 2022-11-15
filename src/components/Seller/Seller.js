import React from 'react'
import data from './data.json'
import './Seller.css'
const Seller = () => {
  return (
    <div className='main-data-josn'>
      {/* {console.log(data)} */}
      <div className='identifiers'>
         &#123;
         <br></br>
         "contact_email": "info@9mediaonline.com", <br></br>
         "contact_address": "10 Anson Road| #22-02 International Plaza | Singapore",<br></br>
         "version": "1.0",<br></br>
         "identifiers": [],<br></br>
         "sellers": [<br></br>
         
      </div>
      
      <div className="data-container">
        {data.map((obj, key) => {
          return (
            <div >
              {'{'}
              <br></br>
              <div className='json-inner-content'>
              {'"seller_id": '+'"'+obj.seller_id+'",'}
              <br></br>
              {'"seller_type": '+'"'+obj.seller_type+'",'}
              <br></br>
              {'"domain": '+'"'+obj.domain+'",'}
              <br></br>
              {'"name": '+'"'+obj.name+'",'} 
              <br></br>
              </div>
              {'},'}
              <br></br>
               
            </div>
          );
        })}
      </div>

         ] <br></br> &#125;

    </div>
  )
}

export default Seller