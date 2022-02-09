
import Item from "../Item/Item";
import "./ItemDetail.css";


const ItemDetail = ({ product }) => {

  return (
    <div  className="item-detail">
      <Item product={product} />
    </div>
  );
};

export default ItemDetail;
