import React from 'react';
import { NavLink } from 'react-router-dom';
import './formallooks.css';
/* start formal looks */
export default function Formallooks() {
  return (
    <section className='formallooks p-4'>
        <div className='container'>
            <div className='d-flex flex-wrap'>
                   <div className='formal-contant d-flex justify-content-center align-items-center col-md-6 col-sm-12'>
                       <div>
                       <h1 class="fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">Gentle Formal Looks </h1>
                       <p class="mb-5">We provide the top formal apparel package to make your job look confident and comfortable. Stay connect.</p> 
                        <NavLink className='btn' to='/'>Explore Collection</NavLink>
                       </div>
                    </div> 
                   <div className='col-md-6 col-sm-12'>
                       <img className='col-12' src='\assets\img\gallery\sharp-dress.png' alt='formal-looks' />
                    </div> 
            </div>
        </div>
    </section>
  )
}
/* end formal looks */