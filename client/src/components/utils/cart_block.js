import React from "react";
import CartItem from "./cart_item";

const CartBlock = ({ products, removeItem }) => {
  const renderCardImage = images => {
    if (images.length > 0) {
      return images[0].url;
    } else {
      return "/images/image_not_availble.png";
    }
  };
  const renderItems = props =>
    products.cartDetail
      ? products.cartDetail.map(product => (
          <div className="user_product_block" key={product._id}>
            <div className="item">
              <div
                className="image"
                style={{
                  background: `url(${renderCardImage(
                    product.images
                  )}) no-repeat`
                }}
              />
            </div>
            <div className="item name desktop tablet">
              <h3 />
              {product.brand.name} {product.name}
            </div>
            <div className="item desktop tablet">
              <h3 />${product.price}{" "}
            </div>

            <div className="item desktop tablet">
              <h3 />

              {product.quantity}
            </div>
            <div className="item desktop tablet">
              <h3 />${product.price * product.quantity}
            </div>

            <div className="item mobile item-info">
              {product.brand.name} {product.name}
              <div className="priceQty">${product.price} </div>
              <div className="priceQty qty">
                Qty
                {product.quantity}
              </div>
              <div className="priceQty">
                Total ${product.price * product.quantity}
              </div>
            </div>
            <div className="item mobile">
              <h3 />
              <button
                onClick={() => removeItem(product._id)}
                className="cart_remove_btn"
              >
                x
              </button>
            </div>
          </div>
        ))
      : null;

  //  ? (
  // <tr>{<CartItem key={item.id} {...item} grid={props.grid} />}</tr>;
  //  )
  //  :null

  return (
    <div className="card_block_shop">
      <div className="card_items_wrapper">
        <div>
          <div className="user_product_head_block">
            <div className="item">Item</div>
            <div className="item" />
            <div className="item">Price</div>
            <div className="item">Quantity</div>
            <div className="item">Total Price</div>
            <div className="item" />
          </div>
        </div>
        {/* {props.cart.forEach(item => {
            renderCartItem(item);
          })} */}
        {/* {props.cart ? (
            props.cart.length === 0 ? (
              <div className="no_result">No products found</div>
            ) : null
          ) : null}
          {props.cart.map(item => (
            <CartItem key={item._id} {...item} />
          ))} */}
        {renderItems()}
        {/* </table> */}
      </div>
    </div>
  );
};

export default CartBlock;
