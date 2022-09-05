import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';


const Home   = () => {
  return (
<>

HeroBanner

<div className='products-heading'>
  <h2>Best Selling Products</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus totam ab labore ipsa dicta harum commodi vitae cupiditate adipisci ducimus inventore fugiat, voluptas esse molestias omnis mollitia minima assumenda.</p>
</div>

<div className="products-container">
  {["item1", "item2"].map((product) => product )}
</div>

Footer

</>
    )
}

export default Home;