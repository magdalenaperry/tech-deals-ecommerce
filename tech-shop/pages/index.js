import React from 'react'

const Home   = () => {
  return (
<>
HeroBanner
<div>
  <h2>Best Selling Products</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus totam ab labore ipsa dicta harum commodi vitae cupiditate adipisci ducimus inventore fugiat, voluptas esse molestias omnis mollitia minima assumenda.</p>
</div>

<div>
  {["item1", "item2"].map((product) => product )}
</div>

Footer

</>
    )
}

export default Home;