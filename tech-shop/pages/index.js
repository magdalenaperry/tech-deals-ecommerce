import React from 'react'
import { Product, FooterBanner, HeroBanner } from '../components';

import { client } from '../lib/client';

const Home   = ( {products, bannerData} ) => {
  return (
<>

<HeroBanner heroBanner={bannerData && bannerData[0]}/>
    {/* {console.log(products)} */}
    {/* {console.log(bannerData)} */}
    
<div className='products-heading'>
  <h2>Best Selling Products</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus totam ab labore ipsa dicta harum commodi vitae cupiditate adipisci ducimus inventore fugiat, voluptas esse molestias omnis mollitia minima assumenda.</p>
</div>

<div className="products-container">
  {products?.map((product) => <Product key={product.id} product={product}/> )}
</div>

<FooterBanner footerBanner={bannerData && bannerData[0]}/>

</>
    )
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product" ]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner" ]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }

  }
}

export default Home;