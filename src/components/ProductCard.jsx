function ProdcutCard({ item }) {
  const { thumbnail, category, title, price } = item;
  //   console.log(category);
  //   console.log(item);

  return (
    <div className="container">
      <div className="main-div">
        <a className="img">
          <img alt="ecommerce" className="" src={thumbnail} />
        </a>
        <div className="icons">
          <h5 className="title">Title : {title}</h5>
          <h5 className="category">Category : {category}</h5>
          <p className="price">Price : ${price}</p>
          <button className="add-btn">Add item</button>
        </div>
      </div>
    </div>
  );
}
export default ProdcutCard;
