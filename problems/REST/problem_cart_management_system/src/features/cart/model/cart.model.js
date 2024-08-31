// Please don't change the pre-written code
// Import the necessary modules here

let cartId = 0;
export class cartModel {
  constructor(userId, productId, quantity) {
    this.id = ++cartId;
    this.userId = userId;
    this.productId = productId;
    this.quantity = Number(quantity);
  }
}
const cartItems = [new cartModel(1, 2, 5), new cartModel(3, 3, 10)];

export const addToCart = (userId, productId, quantity) => {
  // Write your code here
  const cartItem = new cartModel(
    userId, 
    productId,
    quantity
  );
  cartItems.push(cartItem);
  const userCartItems = [];
  cartItems.find((item)=>{
    if(item.userId==userId) userCartItems.push(item)
  })
  return userCartItems;
};

export const removeFromCart = (userId, cartItemId) => {
  // Write your code here
  const cartItemIndex = cartItems.findIndex((i)=> {
    return i.id == cartItemId && i.userId == userId;
  })

  console.log(cartItemIndex,cartItems)
    if(cartItemIndex == -1){
        return false;
    } else {
        return cartItems.splice(cartItemIndex, 1);
    }
};
