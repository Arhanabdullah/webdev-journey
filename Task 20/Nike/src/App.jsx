import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import RightContent from './Components/RightContent'
import LeftContent from './Components/LeftContent'

const App = () => {
  const shoes = [
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=60",
    name: "Air Runner Pro",
    price: 4999
  },
  {
    img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=600&q=60",
    name: "Street Flex Sneakers",
    price: 3599
  },
  {
    img: "https://images.unsplash.com/photo-1561909848-977d0617f275?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2V8ZW58MHx8MHx8fDA%3D",
    name: "Urban Classic White",
    price: 2999
  },
  {
    img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=60",
    name: "Velocity Max",
    price: 5499
  },
  {
    img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNob2V8ZW58MHx8MHx8fDA%3D",
    name: "Neo Sport Trainer",
    price: 4299
  },
  {
    img: "https://images.unsplash.com/photo-1570464197285-9949814674a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNob2V8ZW58MHx8MHx8fDA%3D",
    name: "Canvas Low Top",
    price: 2199
  },
  {
    img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNob2V8ZW58MHx8MHx8fDA%3D",
    name: "Retro Street High",
    price: 3899
  },
  {
    img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&w=600&q=60",
    name: "Core Black Runner",
    price: 4799
  },
  {
    img: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=600&q=60",
    name: "Aero Lite Shoes",
    price: 3299
  },
  {
    img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=60",
    name: "Prime Walk Comfort",
    price: 2599
  },

  {
    img: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=600&q=60",
    name: "Daily Wear Slip-On",
    price: 1999
  },
  {
    img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=600&q=60",
    name: "Edge Sports Pro",
    price: 4899
  },
  {
    img: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?auto=format&fit=crop&w=600&q=60",
    name: "Street Run Evo",
    price: 4099
  },
  {
    img: "https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?auto=format&fit=crop&w=600&q=60",
    name: "Everyday Comfort",
    price: 2399
  }
];

const [cartItems, setCartItems] = useState([]);

  const addItem = (id) => {
  const shoe = shoes[id];

  setCartItems(prev => {
    const exists = prev.find(item => item.name === shoe.name);

    if (exists) {
      return prev.map(item =>
        item.name === shoe.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prev, { ...shoe, quantity: 1 }];
  });
};
const decreaseItem = (name) => {
  setCartItems(prev =>
    prev
      .map(item =>
        item.name === name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};
const increaseItem = (name) => {
  setCartItems(prev =>
    prev.map(item =>
      item.name === name
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};
const cartTotal = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);



  return (
    <div>
      <NavBar />
      <div className='flex flex-wrap'>
      <LeftContent shoes={shoes} addItem={addItem}/>
      <RightContent cartItems={cartItems} decreaseItem={decreaseItem} increaseItem={increaseItem} cartTotal={cartTotal}/>
      </div>
    </div>
  )
}

export default App
