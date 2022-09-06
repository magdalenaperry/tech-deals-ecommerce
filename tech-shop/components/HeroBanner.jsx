import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      {console.log(heroBanner.smallText)}
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt="headphones" className='hero-banner-image' />
        
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
          <h5>{heroBanner.desc}</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi accusamus eveniet at earum culpa quisquam asperiores fuga quasi! Temporibus nemo necessitatibus eos impedit dignissimos neque sequi doloribus optio tenetur sed!</p>

          </div>
        </div>


      </div>
    </div>
  )
}

export default HeroBanner