// Please don't change the pre-written code
// Import the necessary modules here
import {removeFromCart, addToCart} from "../model/cart.model.js";

export const addToCartController = (req, res) => {
  // Write your code here
  const { productId, quantity } = req.query;
  const userId = req.userId;
  const cartItems = addToCart(userId, productId, quantity);
  res.status(201).json({
    "success": true,
    "item": cartItems
});
};

export const removeFromCartController = (req, res) => {
  // Write your code here
  const userId = req.userId;
  const cartItemId = req.params.itemId;
  console.log(userId,cartItemId)
  const item = removeFromCart(
    userId,
    cartItemId
  );
  if (!item) {
      return res.status(404).json({
        "success": false,
        "msg": "operation not allowed"
    });
  }else{
    return res
    .status(200)
    .json({"success":true,
      "deletedCartItem":item
    });
  }
};
