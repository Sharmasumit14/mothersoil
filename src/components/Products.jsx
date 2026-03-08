import "./Products.css";
import "./HoneyBenefits.css";

const Products = () => (
  <section id="products" className="products section">
    <h2>Our Products</h2>
    <div className="product-list">
      <div className="product-card">
        <img src="/assets/honey1.webp" alt="Ajwain Honey" />
        <h3>Ajwain Honey</h3>
        <p>
          Ajwain Honey is known for its unique flavor and medicinal properties.
          It helps boost immunity, aids digestion, and is a natural remedy for
          cough and cold.
        </p>
        <span className="price">₹350/ 500g</span>
        <a
          href="https://wa.me/9012723216?text=I%20want%20to%20order%20Ajwain%20Honey%20from%20Mother%20Soil."
          className="order-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order on WhatsApp
        </a>
      </div>
      <div className="product-card">
        <img src="/assets/honey3.jpeg" alt="Multi-Floral Honey" />
        <h3>Multi-Floral Honey</h3>
        <p>
          Multi-Floral Honey is harvested from a variety of flowers, offering a
          rich taste and high nutritional value. It supports overall wellness
          and provides natural energy.
        </p>
        <span className="price">₹350/500g</span>
        <a
          href="https://wa.me/9012723216?text=I%20want%20to%20order%20Multi%20Floral%20Honey%20from%20Mother%20Soil."
          className="order-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order on WhatsApp
        </a>
      </div>
      <div className="product-card">
        <img src="/assets/honey2.jpeg" alt="Eucalyptus Honey" />
        <h3>Eucalyptus Honey</h3>
        <p>
          Eucalyptus Honey is valued for its soothing properties. It helps
          relieve respiratory issues, promotes oral health, and is a natural
          antibacterial agent.
        </p>
        <span className="price">₹350/500g</span>
        <a
          href="https://wa.me/9012723216?text=I%20want%20to%20order%20Eucalyptus%20Honey%20from%20Mother%20Soil."
          className="order-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order on WhatsApp
        </a>
      </div>
      {/* <div className="product-card">
        <img src="/assets/other-products.jpg" alt="Other Natural Products" />
        <h3>Other Natural Products</h3>
        <p>
          Explore our range of pure, organic, and sustainable products from
          Mother Soil.
        </p>
        <a
          href="https://wa.me/9012723216?text=I%20want%20to%20know%20more%20about%20your%20natural%20products."
          className="order-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Order on WhatsApp
        </a>
      </div> */}
    </div>
  </section>
);

// Benefits of Honey Section
export const HoneyBenefits = () => (
  <section className="honey-benefits section">
    <h2>Benefits of Honey</h2>
    <ul className="benefits-list">
      <li>Natural energy booster and sweetener</li>
      <li>Rich in antioxidants, vitamins, and minerals</li>
      <li>Supports immune system and digestion</li>
      <li>Helps soothe sore throat and cough</li>
      <li>Promotes wound healing and skin health</li>
      <li>Contains antibacterial and anti-inflammatory properties</li>
      <li>May improve heart health and cholesterol levels</li>
    </ul>
  </section>
);

// Combine both sections for rendering
const ProductsWithBenefits = () => (
  <>
    <Products />
    <HoneyBenefits />
  </>
);

export default ProductsWithBenefits;
