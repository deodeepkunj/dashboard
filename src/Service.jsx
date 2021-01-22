import React from 'react';
import Card from './Card';
import Data from './Data';
const Service = () =>{
  return(
    <>
        <div className="my-5">
            <h1 className="text-center"> Our Services </h1>
        </div>
        <div className='container-fluid nav_bg'>
            <div class="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4 custom">
                        {
                            Data.map((value, index) => {
                                return <Card key={index} imgsrc={value.imgsrc} title={value.title}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>    
    </>
  ); 
};
export default Service;