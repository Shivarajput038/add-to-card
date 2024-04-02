import React from "react";
import { useCart } from "react-use-cart";
const Itemcard = (props) => {
  const { addItem } = useCart();
  // console.log(props);
  return (
    <div className="col-lg-3 col-md-3 col-sm-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt="no-img" />
        <div className="card-body text-center">
          <h5 className="card-title">${props.title}</h5>
          <h5 className="card-text">&{props.price}</h5>
          <p className="card-text">&{props.desc}</p>
          <button
            href="#"
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to card
          </button>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
