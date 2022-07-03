import React from 'react'
import { NavLink } from 'react-router-dom'
import './stories.css'
export default function Stories() {
  return (
    <section className='stories'>
        <div className='container'>
            <div className='row'>
                <div className='right-box col-md-6 mb-3 col-sm-12'>
                    <img className='col-12' src='\assets\img\gallery\urban.png' alt='mens-clothes' />
                    <div className='men-content'>
                        <NavLink to='/' className="link text-white" >urban stories</NavLink>
                        <NavLink to='/'className="link text-white" >collection</NavLink> 
                    </div>
                </div>
                <div className='left-box col-md-6 mb-3 col-sm-12'>
                    <img className='col-12' src='\assets\img\gallery\country.png' alt='mens-clothes' />
                    <div className='women-content'>
                        <NavLink to='/' className="link text-white">urban stories</NavLink>
                        <NavLink to='/'className="link text-white" >collection</NavLink> 
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
