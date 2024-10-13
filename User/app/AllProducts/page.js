

// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";

// export default function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("/api/products");
//         console.log("Response from API:", response.data);
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const addToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));

//     // Update cart count
//     const event = new Event("cartUpdated");
//     window.dispatchEvent(event);

//     // Use SweetAlert2 instead of default alert
//     Swal.fire({
//       title: "تم الإضافة بنجاح!",
//       text: `تمت إضافة ${product.name} إلى سلة التسوق الخاصة بك`,
//       icon: "success",
//       confirmButtonText: "حسناً",
//       confirmButtonColor: "#10B981",
//       timer: 3000,
//       timerProgressBar: true,
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
//         Our Products
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             {product.image ? (
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//             ) : (
//               <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
//                 <span className="text-gray-500">No image available</span>
//               </div>
//             )}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mb-4 h-20 overflow-hidden">
//                 {product.description}
//               </p>
//               <div className="flex justify-between items-center">
//                 <p className="text-2xl font-bold text-green-600">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }











// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";

// export default function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get("/api/products");
//         console.log("Response from API:", response.data);
//         setProducts(response.data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, []);

//   const addToCart = (product) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingProductIndex = cart.findIndex(item => item._id === product._id);

//     if (existingProductIndex !== -1) {
//       // Product already exists in cart, update quantity
//       cart[existingProductIndex].quantity = (cart[existingProductIndex].quantity || 1) + 1;
//     } else {
//       // Product doesn't exist in cart, add it with quantity 1
//       cart.push({ ...product, quantity: 1 });
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     // Update cart count
//     const event = new Event("cartUpdated");
//     window.dispatchEvent(event);

//     // Use SweetAlert2 for notification
//     Swal.fire({
//       title: "تم الإضافة بنجاح!",
//       text: `تمت إضافة ${product.name} إلى سلة التسوق الخاصة بك`,
//       icon: "success",
//       confirmButtonText: "حسناً",
//       confirmButtonColor: "#10B981",
//       timer: 3000,
//       timerProgressBar: true,
//     });
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
//         Our Products
//       </h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {products.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
//           >
//             {product.image ? (
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover"
//               />
//             ) : (
//               <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
//                 <span className="text-gray-500">No image available</span>
//               </div>
//             )}
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 mb-4 h-20 overflow-hidden">
//                 {product.description}
//               </p>
//               <div className="flex justify-between items-center">
//                 <p className="text-2xl font-bold text-green-600">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }












// src/components/Products.js
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useCart } from "../contexts/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        console.log("Response from API:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);

    // Use SweetAlert2 for notification
    Swal.fire({
      title: "تم الإضافة بنجاح!",
      text: `تمت إضافة ${product.name} إلى سلة التسوق الخاصة بك`,
      icon: "success",
      confirmButtonText: "حسناً",
      confirmButtonColor: "#10B981",
      timer: 3000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No image available</span>
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4 h-20 overflow-hidden">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}