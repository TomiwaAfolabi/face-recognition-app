function CategoryItem({ category }) {
  const { title, imageUrl } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <p>{title}</p>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
