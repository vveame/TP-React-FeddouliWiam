import React from 'react';

type ProductProps = {
    image: string;
    title: string;
    price: number;
    category: string;
};

const Product: React.FC<ProductProps> = ({ image, title, price, category }) => (
    <div className="product" style={styles.card}>
        <img src={image} alt={title} style={styles.image} />
        <h2>{title}</h2>
        <p>Price: ${price.toFixed(2)}</p>
        <p>Category: {category}</p>
    </div>
);

const styles: { card: React.CSSProperties; image: React.CSSProperties } = {
  card: {
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '16px',
    margin: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    maxWidth: '300px',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '12px'
  }
};

export default Product;