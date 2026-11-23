 import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { addItem } from './CartSlice';

const plants = [

  {

    id: 1,

    name: 'Snake Plant',

    price: 15,

    category: 'Air Purifying Plants',

    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6',

  },

  {

    id: 2,

    name: 'Spider Plant',

    price: 12,

    category: 'Air Purifying Plants',

    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',

  },

  {

    id: 3,

    name: 'Aloe Vera',

    price: 10,

    category: 'Medicinal Plants',

    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09',

  },

  {

    id: 4,

    name: 'Lavender',

    price: 18,

    category: 'Aromatic Plants',

    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',

  },

  {

    id: 5,

    name: 'Peace Lily',

    price: 20,

    category: 'Air Purifying Plants',

    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',

  },

  {

    id: 6,

    name: 'Rosemary',

    price: 14,

    category: 'Aromatic Plants',

    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',

  },

];

function ProductList() {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {

    dispatch(addItem(plant));

  };

  const categories = [...new Set(plants.map(

    (plant) => plant.category

  ))];

 return (

    <div className="product-list">

      <h1>Paradise Nursery</h1>

      <h2>Our Plants</h2>

      {categories.map((category) => (

        <section key={category}>

          <h2>{category}</h2>

          <div className="plants-container">

            {plants

              .filter((plant) => plant.category === category)

              .map((plant) => {

                const inCart = cartItems.some(

                  (item) => item.id === plant.id

                );

                return (

                  <div className="plant-card" key={plant.id}>

                    <img

                      src={plant.image}

                      alt={plant.name}

                      width="180"

                      height="180"

                    />

                    <h3>{plant.name}</h3>

                    <p>${plant.price}</p>

                    <button

                      onClick={() => handleAddToCart(plant)}

                      disabled={inCart}

                    >

                      {inCart ? 'Added to Cart' : 'Add to Cart'}

                    </button>

                  </div>

                );

              })}

          </div>

        </section>

      ))}

    </div>

  );

}

export default ProductList;
