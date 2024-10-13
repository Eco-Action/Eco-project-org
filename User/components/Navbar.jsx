




// 'use client'

// import React, { useState, useEffect } from 'react'
// import { usePathname, useRouter } from 'next/navigation';
// import Link from "next/link";
// import { ShoppingCart, Search, Menu, X, LogOut, Leaf, LogIn } from 'lucide-react';
// import Cookies from 'js-cookie';

// export default function Navbar() {
//     const pathname = usePathname();
//     const router = useRouter();
//     const isAuthPage = pathname === '/login' || pathname === '/signup';
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [hasToken, setHasToken] = useState(false);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const token = Cookies.get('token');
//         console.log('Token:', token); // Kept for debugging
//         setHasToken(!!token);
        
//         checkLoginStatus();
//     }, [pathname]);

//     const checkLoginStatus = async () => {
//         try {
//             const response = await fetch('/api/auth/check', {
//                 method: 'GET',
//                 credentials: 'include'
//             });
//             const data = await response.json();
//             setIsLoggedIn(data.isLoggedIn);
//             setHasToken(data.isLoggedIn);
//         } catch (error) {
//             console.error('Error checking login status:', error);
//             setIsLoggedIn(false);
//             setHasToken(false);
//         }
//     };

//     if (isAuthPage) {
//         return null;
//     }

//     const handleLogout = async () => {
//         try {
//             const response = await fetch('/api/auth/logout', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 credentials: 'include'
//             });

//             const data = await response.json();

//             if (data.success) {
//                 Cookies.remove('token');
//                 setHasToken(false);
//                 setIsLoggedIn(false);
//                 router.push('/login');
//             } else {
//                 console.error('Logout failed');
//             }
//         } catch (error) {
//             console.error('Error during logout:', error);
//         }
//     };

//     const handleLogin = () => {
//         router.push('/login');
//     };

//     return (
//         <nav className="bg-gradient-to-r from-green-400 to-green-800">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                     <div className="flex items-center">
//                         <Link href="/" className="text-white text-xl font-bold flex items-center">
//                             <Leaf className="h-6 w-6 mr-2" />
//                             EcoShop
//                         </Link>
//                     </div>

//                     {/* Desktop Menu */}
//                     <div className="hidden md:block">
//                         <div className="ml-10 flex items-baseline space-x-4">
//                             <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/">Home</Link>
//                             <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/about">About</Link>
//                             <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/AllProducts">All Products</Link>
//                             {hasToken && (
//                                 <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/profile">My Profile</Link>
//                             )}
//                             <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/contact">Contact us</Link>
//                             {hasToken ? (
//                                 <button
//                                     onClick={handleLogout}
//                                     className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//                                 >
//                                     <LogOut className="h-5 w-5 mr-2" />
//                                     Logout
//                                 </button>
//                             ) : (
//                                 <button
//                                     onClick={handleLogin}
//                                     className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//                                 >
//                                     <LogIn className="h-5 w-5 mr-2" />
//                                     Login
//                                 </button>
//                             )}
//                         </div>
//                     </div>

//                     <div className="flex items-center">
//                         <button className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20">
//                             <Search className="h-6 w-6" />
//                         </button>
//                         <Link href="/cart" className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 ml-4">
//                             <ShoppingCart className="h-6 w-6" />
//                         </Link>
//                         <button 
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             className="text-white p-2 rounded-full hover:bg-white hover:bg-opacity-20 ml-4 md:hidden"
//                         >
//                             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 {isMenuOpen && (
//                     <div className="md:hidden">
//                         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                             <Link className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md" href="/">Home</Link>
//                             <Link className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md" href="/about">About</Link>
//                             <Link className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md" href="/AllProducts">All Products</Link>
//                             {hasToken && (
//                                 <Link className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md" href="/profile">My Profile</Link>
//                             )}
//                             <Link className="text-white hover:bg-white hover:bg-opacity-20 block px-3 py-2 rounded-md" href="/contact">Contact us</Link>
//                             {hasToken ? (
//                                 <button
//                                     onClick={handleLogout}
//                                     className="text-white hover:bg-white hover:bg-opacity-20 w-full text-left px-3 py-2 rounded-md flex items-center"
//                                 >
//                                     <LogOut className="h-5 w-5 mr-2" />
//                                     Logout
//                                 </button>
//                             ) : (
//                                 <button
//                                     onClick={handleLogin}
//                                     className="text-white hover:bg-white hover:bg-opacity-20 w-full text-left px-3 py-2 rounded-md flex items-center"
//                                 >
//                                     <LogIn className="h-5 w-5 mr-2" />
//                                     Login
//                                 </button>
//                             )}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// }











//////////////////////////////done///////////

// "use client";

// import React, { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
// import {
//   ShoppingCart,
//   Search,
//   Menu,
//   X,
//   LogOut,
//   Leaf,
//   LogIn,
// } from "lucide-react";
// import Cookies from "js-cookie";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const isAuthPage = pathname === "/login" || pathname === "/signup";
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hasToken, setHasToken] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [cartCount, setCartCount] = useState(0); // Cart count state

//   useEffect(() => {
//     const token = Cookies.get("token");
//     console.log("Token:", token);
//     setHasToken(!!token);

//     checkLoginStatus();
//     updateCartCount(); // Update cart count on initial load
//   }, [pathname]);

//   const checkLoginStatus = async () => {
//     try {
//       const response = await fetch("/api/auth/check", {
//         method: "GET",
//         credentials: "include",
//       });
//       const data = await response.json();
//       setIsLoggedIn(data.isLoggedIn);
//       setHasToken(data.isLoggedIn);
//     } catch (error) {
//       console.error("Error checking login status:", error);
//       setIsLoggedIn(false);
//       setHasToken(false);
//     }
//   };

//   // Function to update cart count
//   const updateCartCount = () => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartCount(cart.length); // Set the number of items in the cart
//   };

//   if (isAuthPage) {
//     return null;
//   }

//   const handleLogout = async () => {
//     try {
//       const response = await fetch("/api/auth/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       const data = await response.json();

//       if (data.success) {
//         Cookies.remove("token");
//         setHasToken(false);
//         setIsLoggedIn(false);
//         router.push("/login");
//       } else {
//         console.error("Logout failed");
//       }
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   const handleLogin = () => {
//     router.push("/login");
//   };

//   return (
//     <nav className="bg-gradient-to-r from-green-400 to-green-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link
//               href="/"
//               className="text-white text-xl font-bold flex items-center"
//             >
//               <Leaf className="h-6 w-6 mr-2" />
//               EcoShop
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/"
//               >
//                 Home
//               </Link>
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/about"
//               >
//                 About
//               </Link>
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/AllProducts"
//               >
//                 All Products
//               </Link>
//               {hasToken && (
//                 <Link
//                   className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                   href="/profile"
//                 >
//                   My Profile
//                 </Link>
//               )}
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/contact"
//               >
//                 Contact us
//               </Link>
//               {hasToken ? (
//                 <button
//                   onClick={handleLogout}
//                   className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//                 >
//                   <LogOut className="h-5 w-5 mr-2" />
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleLogin}
//                   className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//                 >
//                   <LogIn className="h-5 w-5 mr-2" />
//                   Login
//                 </button>
//               )}
//               <Link
//                 href="/cart"
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//               >
//                 <ShoppingCart className="h-5 w-5 mr-2" />
//                 {cartCount > 0 && (
//                   <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
//                     {cartCount}
//                   </span>
//                 )}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }














// // src/components/Navbar.js
// "use client";

// import React, { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
// import {
//   ShoppingCart,
//   Search,
//   Menu,
//   X,
//   LogOut,
//   Leaf,
//   LogIn,
// } from "lucide-react";
// import Cookies from "js-cookie";
// import { useCart } from "../app/contexts/CartContext";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const isAuthPage = pathname === "/login" || pathname === "/signup";
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hasToken, setHasToken] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const { cart } = useCart();

//   useEffect(() => {
//     const token = Cookies.get("token");
//     console.log("Token:", token);
//     setHasToken(!!token);

//     checkLoginStatus();
//   }, [pathname]);

//   const checkLoginStatus = async () => {
//     try {
//       const response = await fetch("/api/auth/check", {
//         method: "GET",
//         credentials: "include",
//       });
//       const data = await response.json();
//       setIsLoggedIn(data.isLoggedIn);
//       setHasToken(data.isLoggedIn);
//     } catch (error) {
//       console.error("Error checking login status:", error);
//       setIsLoggedIn(false);
//       setHasToken(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await fetch("/api/auth/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       const data = await response.json();

//       if (data.success) {
//         Cookies.remove("token");
//         setHasToken(false);
//         setIsLoggedIn(false);
//         router.push("/login");
//       } else {
//         console.error("Logout failed");
//       }
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   const handleLogin = () => {
//     router.push("/login");
//   };

//   return (
//     <nav className="bg-gradient-to-r from-green-400 to-green-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link
//               href="/"
//               className="text-white text-xl font-bold flex items-center"
//             >
//               <Leaf className="h-6 w-6 mr-2" />
//               EcoShop
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/"
//               >
//                 Home
//               </Link>
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/about"
//               >
//                 About
//               </Link>
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/AllProducts"
//               >
//                 All Products
//               </Link>
//               {hasToken && (
//                 <Link
//                   className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                   href="/profile"
//                 >
//                   My Profile
//                 </Link>
//               )}
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/contact"
//               >
//                 Contact us
//               </Link>
//               {hasToken ? (
//                 <button
//                   onClick={handleLogout}
//                   className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//                 >
//                   <LogOut className="h-5 w-5 mr-2" />
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleLogin}
//                   className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//                 >
//                   <LogIn className="h-5 w-5 mr-2" />
//                   Login
//                 </button>
//               )}
//               <Link
//                 href="/cart"
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//               >
//                 <ShoppingCart className="h-5 w-5 mr-2" />
//                 {cart.length > 0 && (
//                   <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
//                     {cart.length}
//                   </span>
//                 )}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }















// // src/components/Navbar.js
// "use client";

// import React, { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
// import {
//   ShoppingCart,
//   Search,
//   Menu,
//   X,
//   LogOut,
//   Leaf,
//   LogIn,
// } from "lucide-react";
// import Cookies from "js-cookie";
// import { useCart } from "../app/contexts/CartContext";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const isAuthPage = pathname === "/login" || pathname === "/signup";
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hasToken, setHasToken] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const { totalItems } = useCart();

//   useEffect(() => {
//     const token = Cookies.get("token");
//     console.log("Token:", token);
//     setHasToken(!!token);

//     checkLoginStatus();
//   }, [pathname]);

//   const checkLoginStatus = async () => {
//     try {
//       const response = await fetch("/api/auth/check", {
//         method: "GET",
//         credentials: "include",
//       });
//       const data = await response.json();
//       setIsLoggedIn(data.isLoggedIn);
//       setHasToken(data.isLoggedIn);
//     } catch (error) {
//       console.error("Error checking login status:", error);
//       setIsLoggedIn(false);
//       setHasToken(false);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await fetch("/api/auth/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });

//       const data = await response.json();

//       if (data.success) {
//         Cookies.remove("token");
//         setHasToken(false);
//         setIsLoggedIn(false);
//         router.push("/login");
//       } else {
//         console.error("Logout failed");
//       }
//     } catch (error) {
//       console.error("Error during logout:", error);
//     }
//   };

//   const handleLogin = () => {
//     router.push("/login");
//   };

//   return (
//     <nav className="bg-gradient-to-r from-green-400 to-green-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <Link
//               href="/"
//               className="text-white text-xl font-bold flex items-center"
//             >
//               <Leaf className="h-6 w-6 mr-2" />
//               EcoShop
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/"
//               >
//                 Home
//               </Link>
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/about"
//               >
//                 About
//               </Link>
//               <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/challenges">Challenges</Link>
//               <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/communities">Community</Link>

//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/AllProducts"
//               >
//                 All Products
//               </Link>
//               {hasToken && (
//                 <Link
//                   className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                   href="/profile"
//                 >
//                   My Profile
//                 </Link>
//               )}
//               <Link
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/contact"
//               >
//                 Contact us
//               </Link>
//               {hasToken ? (
//                 <button
//                   onClick={handleLogout}
//                   className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//                 >
//                   <LogOut className="h-5 w-5 mr-2" />
//                   Logout
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleLogin}
//                   className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//                 >
//                   <LogIn className="h-5 w-5 mr-2" />
//                   Login
//                 </button>
//               )}
//               <Link
//                 href="/cart"
//                 className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//               >
//                 <ShoppingCart className="h-5 w-5 mr-2" />
//                 {totalItems > 0 && (
//                   <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
//                     {totalItems}
//                   </span>
//                 )}
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }















// src/components/Navbar.js
"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  LogOut,
  Leaf,
  LogIn,
} from "lucide-react";
import Cookies from "js-cookie";
import { useCart } from "../app/contexts/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("Token:", token);
    setHasToken(!!token);

    checkLoginStatus();
  }, [pathname]);

  const checkLoginStatus = async () => {
    try {
      const response = await fetch("/api/auth/check", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      setIsLoggedIn(data.isLoggedIn);
      setHasToken(data.isLoggedIn);
    } catch (error) {
      console.error("Error checking login status:", error);
      setIsLoggedIn(false);
      setHasToken(false);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        Cookies.remove("token");
        setHasToken(false);
        setIsLoggedIn(false);
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const handleLogin = () => {
    router.push("/login");
  };

  if (isAuthPage) {
    return null; // Return null to hide the Navbar on login and signup pages
  }

  return (
    <nav className="bg-gradient-to-r from-green-400 to-green-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-white text-xl font-bold flex items-center"
            >
              <Leaf className="h-6 w-6 mr-2" />
              EcoShop
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
                href="/about"
              >
                About
              </Link>
              
              <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/challenges">Challenges</Link>
              <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/ChallengesLeaderboard">Challenges Leaderboard</Link>

              <Link className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/communities">Community</Link>

              <Link
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
                href="/AllProducts"
              >
                All Products
              </Link>
              {hasToken && (
                <Link
                  className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
                  href="/profile"
                >
                  My Profile
                </Link>
              )}
              <Link
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
                href="/contact"
              >
                Contact us
              </Link>
              {hasToken ? (
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  Login
                </button>
              )}
              <Link
                href="/cart"
                className="text-white hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {totalItems > 0 && (
                  <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}