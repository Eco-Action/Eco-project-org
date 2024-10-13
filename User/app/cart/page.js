



// "use client"; 

// import React, { useEffect, useState } from 'react';

// export default function Cart() {
//     const [cartItems, setCartItems] = useState([]);

//     useEffect(() => {
//         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//         setCartItems(storedCart);
//     }, []);

//     const removeItem = (id) => {
//         const updatedCart = cartItems.filter(item => item.id !== id);
//         setCartItems(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
//                 <h1 className="text-3xl font-bold text-center">Cart</h1>
//                 {cartItems.length === 0 ? (
//                     <p className="text-center mt-4">Your cart is empty.</p>
//                 ) : (
//                     <div className="p-8">
//                         {cartItems.map((item) => (
//                             <div key={item.id} className="flex mb-4 items-center">
//                                 <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded" />
//                                 <div className="ml-4">
//                                     <h2 className="text-xl font-semibold">{item.title}</h2>
//                                     <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                                 </div>
//                                 <button 
//                                     onClick={() => removeItem(item.id)} 
//                                     className="ml-4 text-red-500 hover:underline"
//                                 >
//                                     Remove
//                                 </button>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }










// "use client";

// import React, { useEffect, useState } from "react";
// import { Trash2, Plus, Minus } from "lucide-react";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckoutModal from "../../components/CheckoutModal";

// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
// );

// export default function Cart() {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(storedCart);
//   }, []);

//   const updateCart = (updatedCart) => {
//     setCartItems(updatedCart);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const removeItem = (id) => {
//     const updatedCart = cartItems.filter((item) => item._id !== id);
//     updateCart(updatedCart);
//   };

//   const adjustQuantity = (id, change) => {
//     const updatedCart = cartItems.map((item) => {
//       if (item._id === id) {
//         const newQuantity = Math.max(1, (item.quantity || 1) + change);
//         return { ...item, quantity: newQuantity };
//       }
//       return item;
//     });
//     updateCart(updatedCart);
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * (item.quantity || 1),
//       0
//     );
//   };

//   const handleCheckout = () => {
//     setIsCheckoutModalOpen(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <h1 className="text-3xl font-bold text-center py-6 bg-green-600 text-white">
//           Shopping Cart
//         </h1>
//         {cartItems.length === 0 ? (
//           <p className="text-center mt-8 mb-8 text-gray-500 text-xl">
//             Your cart is empty.
//           </p>
//         ) : (
//           <div className="p-8">
//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex items-center mb-4 pb-4 border-b"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover mr-4"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="text-lg font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => adjustQuantity(item._id, -1)}
//                     className="p-1 bg-gray-200 rounded"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="mx-2">{item.quantity || 1}</span>
//                   <button
//                     onClick={() => adjustQuantity(item._id, 1)}
//                     className="p-1 bg-gray-200 rounded"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => removeItem(item._id)}
//                   className="ml-4 text-red-500"
//                 >
//                   <Trash2 size={20} />
//                 </button>
//               </div>
//             ))}
//             <div className="mt-8 flex justify-between items-center border-t pt-6">
//               <p className="text-2xl font-bold text-gray-800">
//                 Total:{" "}
//                 <span className="text-green-600">
//                   ${calculateTotal().toFixed(2)}
//                 </span>
//               </p>
//               <button
//                 onClick={handleCheckout}
//                 className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
//               >
//                 Checkout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//       <CheckoutModal
//         isOpen={isCheckoutModalOpen}
//         onClose={() => setIsCheckoutModalOpen(false)}
//         cartItems={cartItems}
//         total={calculateTotal()}
//       />
//     </div>
//   );
// }














// // src/components/Cart.js
// "use client";

// import React from 'react';
// import { useCart } from '../contexts/CartContext';
// import { Trash2, Plus, Minus } from "lucide-react";

// export default function Cart() {
//   const { cart, removeFromCart, updateQuantity } = useCart();

//   const handleRemoveItem = (productId) => {
//     removeFromCart(productId);
//   };

//   const handleUpdateQuantity = (productId, newQuantity) => {
//     if (newQuantity > 0) {
//       updateQuantity(productId, newQuantity);
//     } else {
//       removeFromCart(productId);
//     }
//   };

//   const calculateTotal = () => {
//     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//         <h1 className="text-3xl font-bold text-center py-6 bg-green-600 text-white">
//           Shopping Cart
//         </h1>
//         {cart.length === 0 ? (
//           <p className="text-center mt-8 mb-8 text-gray-500 text-xl">
//             Your cart is empty.
//           </p>
//         ) : (
//           <div className="p-8">
//             {cart.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex items-center mb-4 pb-4 border-b"
//               >
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover mr-4"
//                 />
//                 <div className="flex-grow">
//                   <h2 className="text-lg font-semibold">{item.name}</h2>
//                   <p className="text-gray-600">${item.price.toFixed(2)}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
//                     className="p-1 bg-gray-200 rounded"
//                   >
//                     <Minus size={16} />
//                   </button>
//                   <span className="mx-2">{item.quantity}</span>
//                   <button
//                     onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
//                     className="p-1 bg-gray-200 rounded"
//                   >
//                     <Plus size={16} />
//                   </button>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveItem(item._id)}
//                   className="ml-4 text-red-500"
//                 >
//                   <Trash2 size={20} />
//                 </button>
//               </div>
//             ))}
//             <div className="mt-8 flex justify-between items-center border-t pt-6">
//               <p className="text-2xl font-bold text-gray-800">
//                 Total:{" "}
//                 <span className="text-green-600">
//                   ${calculateTotal().toFixed(2)}
//                 </span>
//               </p>
//               <button
//                 onClick={() => {/* Implement checkout logic */}}
//                 className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
//               >
//                 Checkout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }












"use client";

import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { Trash2, Plus, Minus } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutModal from "../../components/CheckoutModal";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    } else {
      removeFromCart(productId);
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <h1 className="text-3xl font-bold text-center py-6 bg-green-600 text-white">
          Shopping Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-center mt-8 mb-8 text-gray-500 text-xl">
            Your cart is empty.
          </p>
        ) : (
          <div className="p-8">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center mb-4 pb-4 border-b"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                    className="p-1 bg-gray-200 rounded"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                    className="p-1 bg-gray-200 rounded"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item._id)}
                  className="ml-4 text-red-500"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
            <div className="mt-8 flex justify-between items-center border-t pt-6">
              <p className="text-2xl font-bold text-gray-800">
                Total:{" "}
                <span className="text-green-600">
                  ${calculateTotal().toFixed(2)}
                </span>
              </p>
              <button
                onClick={handleCheckout}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        cartItems={cart}
        total={calculateTotal()}
      />
    </div>
  );
}