import Product from './Product';
import shoesImage from '../assets/shoes.png';
import watchImage from '../assets/watch.png';
import laptopImage from '../assets/laptop.png';
import phoneImage from '../assets/phone.png';
import headphonesImage from '../assets/headphones.png';
import cameraImage from '../assets/camera.png';

function Catalog() {
  return (
    <div>
      <h1>Our Products</h1>
      <div style={styles.productContainer}>
        <Product
          image={shoesImage}
          title="Sport Shoes"
          price={89.99}
          category="Footwear"
        />
        <Product
          image={watchImage}
          title="Smart Watch"
          price={199.99}
          category="Wearables"
        />
        <Product
          image={laptopImage}
          title="Laptop Pro X"
          price={999.99}
          category="Computers"
        />
        <Product
          image={phoneImage}
          title="Smartphone Z"
          price={599.99}
          category="Mobile Phones"
        />
        <Product
          image={headphonesImage}
          title="Noise Cancelling Headphones"
          price={149.99}
          category="Audio"
        />
        <Product
          image={cameraImage}
          title="Digital Camera"
          price={449.99}
          category="Photography"
        />
      </div>
    </div>
  );
}

const styles = {
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap' as const
  }
};

export default Catalog;