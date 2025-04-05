import React from 'react';

export default function ProductCard() {
  const product = {
    name: 'Iphone 15 Pro Max',
    price: '30.000.000',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
    image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
  };

  // Binding data :
  // Cú pháp này giúp cho việc binding dữ liệu trở nên dễ dàng hơn

  return (
    <div>
      <div
        className='products__item'
        onClick={() => {
          // xử lý sự kiện click
          alert('Xem chi tiết sản phẩm');
        }}
      >
        <h3>{product.name}</h3>
        <img src={product.image} />
        <p className='products__price'>Giá: {product.price}</p>
        <p className='products__description'>{product.description}</p>
        <button
          className='products__btn--details'
          onClick={() => {
            // xử lý sự kiện click
            alert('Xem chi tiết sản phẩm');
          }}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}
