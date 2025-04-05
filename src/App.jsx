import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

// BEM: Block Element Modifier
// isEmail // camelCase

function App() {
  const productList = [
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 16 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
  ];

  const renderProductCard = () => {
    const elements = productList.map(() => {
      return <ProductCard />;
    });

    return elements;
  };

  return (
    <div>
      {/* Header */}
      <h1 className='text-3xl uppercase'>Hello world!</h1>
      <Header />
      {/* Main */}
      <section className='products'>
        <h2 className='products__title'>Danh sách sản phẩm</h2>
        <div className='products__list'>
          {/* <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard /> */}

          {/* {renderProductCard()} Cách 1  */}
          {productList.map(() => (
            <ProductCard />
          ))}
        </div>
      </section>

      <section className='section-2'>
        <div>Section 2</div>
      </section>

      <section className='section-3'>
        <div>Section 3</div>
      </section>

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default App;
