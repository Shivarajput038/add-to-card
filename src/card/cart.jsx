import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h1 className="text-center">your card is empty</h1>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            cart ({totalUniqueItems}) total Items:({totalItems + 1})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                console.log(item);
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ width: "6rem" }} alt="" />
                    </td>
                    <td> {item.title}</td>
                    <td> {item.price}</td>
                    <td> Quantity({item.quantity})</td>
                    <button
                      className="btn btn-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn btn-info ms-2"
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-info ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price:${cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            clear cart
          </button>
          <button className="btn btn-primary m-2">Buy Now</button>
        </div>
      </div>
    </section>
  );
};
export default Cart;
