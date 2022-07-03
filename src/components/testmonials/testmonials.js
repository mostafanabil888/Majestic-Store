import React from 'react'
import './testmonials.css'
import {Carousel,CarouselItem} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRightLong} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
export default function Testmonials() {
  return (
   <section className='testmonials'>
       <div className='overlay'>
       <Carousel  className='Carousel d-flex justify-content-center align-items-center text-center'>
                    <CarouselItem className='CarouselItem'>
                    <h5 class="display-4 text-white fw-normal text-400 fw-normal mb-4">visit our Outlets in</h5>
                    <h2 class="display-1 text-white fw-normal mb-10">London</h2>
                    <NavLink className='btn-box fs-5 text-white' to='/'>see adresses  <FontAwesomeIcon className='icon'  icon={faRightLong} /></NavLink>
                    </CarouselItem>

                    <CarouselItem className='CarouselItem'>
                    <h5 class="display-4 text-white fw-normal text-400 fw-normal mb-4">visit our Outlets in</h5>
                    <h2 class="display-1 text-white fw-normal mb-10">Bristol</h2>
                    <NavLink className='btn-box fs-5 text-white' to='/'>see adresses  <FontAwesomeIcon className='icon'  icon={faRightLong} /></NavLink>
                    </CarouselItem>
                    <CarouselItem className='CarouselItem'>
                    <h5 class="display-4 text-white fw-normal  text-400 fw-normal mb-4">visit our Outlets in</h5>
                    <h2 class="display-1 text-white fw-normal mb-10">Birmingham</h2>
                    <NavLink className='btn-box fs-5 text-white' to='/'>see adresses  <FontAwesomeIcon className='icon'  icon={faRightLong} /></NavLink>
                    </CarouselItem>
                </Carousel>
       </div>
   </section>
  )
}
