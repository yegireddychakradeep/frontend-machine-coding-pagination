export function ProductCard({ image, title, description }) {
  return (
    <div className="product-card">
      <img src={image} className="product-image" alt="image text" />
      <span className="product-content">{title}</span>
    </div>
  );
}
