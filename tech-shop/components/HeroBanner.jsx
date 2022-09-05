import React from 'react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>small text</p>
        <h3>mid text</h3>
        <img src="" alt="headphones" className='hero-banner-image' />
        
        <div>
          <Link href="/product/ID">
            <button type="button">button text</button>
          </Link>
          <div className='desc'>
            <h5>description text</h5>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi accusamus eveniet at earum culpa quisquam asperiores fuga quasi! Temporibus nemo necessitatibus eos impedit dignissimos neque sequi doloribus optio tenetur sed!</p>

          </div>
        </div>


      </div>
    </div>
  )
}

export default HeroBanner