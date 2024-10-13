

// // // src/components/Navbar.js
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import { usePathname, useRouter } from "next/navigation";
// // import Link from "next/link";
// // import {
// //   ShoppingCart,
// //   Search,
// //   Menu,
// //   X,
// //   LogOut,
// //   Leaf,
// //   LogIn,
// // } from "lucide-react";
// // import Cookies from "js-cookie";
// // import { useCart } from "../app/contexts/CartContext";

// // export default function Navbar() {
// //   const pathname = usePathname();
// //   const router = useRouter();
// //   const isAuthPage = pathname === "/login" || pathname === "/signup";
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// //   const [hasToken, setHasToken] = useState(false);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// //   const { totalItems } = useCart();

// //   useEffect(() => {
// //     const token = Cookies.get("token");
// //     console.log("Token:", token);
// //     setHasToken(!!token);

// //     checkLoginStatus();
// //   }, [pathname]);

// //   const checkLoginStatus = async () => {
// //     try {
// //       const response = await fetch("/api/auth/check", {
// //         method: "GET",
// //         credentials: "include",
// //       });
// //       const data = await response.json();
// //       setIsLoggedIn(data.isLoggedIn);
// //       setHasToken(data.isLoggedIn);
// //     } catch (error) {
// //       console.error("Error checking login status:", error);
// //       setIsLoggedIn(false);
// //       setHasToken(false);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       const response = await fetch("/api/auth/logout", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         credentials: "include",
// //       });

// //       const data = await response.json();

// //       if (data.success) {
// //         Cookies.remove("token");
// //         setHasToken(false);
// //         setIsLoggedIn(false);
// //         router.push("/login");
// //       } else {
// //         console.error("Logout failed");
// //       }
// //     } catch (error) {
// //       console.error("Error during logout:", error);
// //     }
// //   };

// //   const handleLogin = () => {
// //     router.push("/login");
// //   };

// //   if (isAuthPage) {
// //     return null; // Return null to hide the Navbar on login and signup pages
// //   }

// //   return (
// //     <nav className="bg-white text-blue">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex items-center justify-between h-16">
// //           <div className="flex items-center w-12">
// //             <Link
// //               href="/"
// //               className=" text-xl font-bold flex items-center"
// //             >
// //               <img src="/Logo2.png" alt="" />
// //             </Link>
// //           </div>

// //           {/* Desktop Menu */}
// //           <div className="hidden md:block">
// //             <div className="ml-10 flex items-baseline space-x-4">
// //               <Link
// //                 className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
// //                 href="/"
// //               >
// //                 Home
// //               </Link>
// //               <Link
// //                 className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
// //                 href="/about"
// //               >
// //                 Our Story
// //               </Link>
              
// //               <Link className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/challenges">Challenges</Link>
// //               {/* <Link className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/ChallengesLeaderboard">Challenges Leaderboard</Link> */}

// //               <Link className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/communities">Community</Link>

// //               <Link
// //                 className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
// //                 href="/AllProducts"
// //               >
// //                 Our Products
// //               </Link>
// //               <Link
// //                 className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
// //                 href="/contact"
// //               >
// //                 Contact us
// //               </Link>
// //               {hasToken && (
// //                 <Link
// //                   className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
// //                   href="/profile"
// //                 >
// //                   My Profile
// //                 </Link>
// //               )}
// //               <Link
// //                 href="/cart"
// //                 className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
// //               >
// //                 <ShoppingCart className="h-5 w-5 mr-2" />
// //                 {totalItems > 0 && (
// //                   <span className="bg-red-500  rounded-full px-2 py-1 text-xs">
// //                     {totalItems}
// //                   </span>
// //                 )}
// //               </Link>
// //               {hasToken ? (
// //                 <button
// //                   onClick={handleLogout}
// //                   className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
// //                 >
// //                   <LogOut className="h-5 w-5 mr-2" />
// //                   Logout
// //                 </button>
// //               ) : (
// //                 <button
// //                   onClick={handleLogin}
// //                   className=" hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
// //                 >
// //                   <LogIn className="h-5 w-5 mr-2" />
// //                   Login
// //                 </button>
// //               )}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }
// // src/components/Navbar.js


// "use client";

// import React, { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
// import {
//   ShoppingCart,
//   LogOut,
//   LogIn,
// } from "lucide-react";
// import Cookies from "js-cookie";
// import { useCart } from "../app/contexts/CartContext";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const isAuthPage = pathname === "/login" || pathname === "/signup";
//   const [hasToken, setHasToken] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [scrollY, setScrollY] = useState(0); // Track the scroll position
//   const { totalItems } = useCart();

//   useEffect(() => {
//     const token = Cookies.get("token");
//     console.log("Token:", token);
//     setHasToken(!!token);

//     checkLoginStatus();

//     const handleScroll = () => {
//       setScrollY(window.scrollY); // Update scroll position
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
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

//   if (isAuthPage) {
//     return null; // Return null to hide the Navbar on login and signup pages
//   }

//   // Determine the background color based on scroll position
//   const backgroundColor = scrollY > 50 ? 'bg-white' : 'bg-transparent';
//   const textColor = scrollY > 50 ? 'text-blue' : 'text-white'; // Change text color based on background

//   return (
//     <nav className={`${backgroundColor} ${textColor} transition-colors duration-300 fixed w-full z-10`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center w-12">
//             <Link
//               href="/"
//               className="text-xl font-bold flex items-center"
//             >
//               <img src="/Logo2.png" alt="Logo" />
//             </Link>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <Link
//                 className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/"
//               >
//                 Home
//               </Link>
//               <Link
//                 className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/about"
//               >
//                 Our Story
//               </Link>
//               <Link className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/challenges">Challenges</Link>
//               <Link className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md" href="/communities">Community</Link>
//               <Link
//                 className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/AllProducts"
//               >
//                 Our Products
//               </Link>
//               <Link
//                 className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                 href="/contact"
//               >
//                 Contact us
//               </Link>
//               {hasToken && (
//                 <Link
//                   className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md"
//                   href="/profile"
//                 >
//                   My Profile
//                 </Link>
//               )}
//               <Link
//                 href="/cart"
//                 className=" rounded-full hover:bg-white p-2 flex items-center"
//               >
//                 <ShoppingCart className="h-5 w-5 " />
//                 {totalItems > 0 && (
//                   <span className="bg-red-500 rounded-full px-2 py-1 text-xs">
//                     {totalItems}
//                   </span>
//                 )}
//               </Link>
//               {hasToken ? (
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-500 hover:bg-red-600   px-3 py-2 rounded-md flex items-center"
//                 >
//                   <LogOut className="h-5 w-5 mr-2" />
//                   Log out
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleLogin}
//                   className="hover:bg-white hover:bg-opacity-20 px-3 py-2 rounded-md flex items-center"
//                 >
//                   <LogIn className="h-5 w-5 mr-2" />
//                   Log in
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


// "use client"
// import React, { useState, useEffect } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
// import { ShoppingCart, LogOut, LogIn, Menu, X } from "lucide-react";
// import Cookies from "js-cookie";
// import { useCart } from "../app/contexts/CartContext";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const isAuthPage = pathname === "/login" || pathname === "/signup";
//   const [hasToken, setHasToken] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const { totalItems } = useCart();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const token = Cookies.get("token");
//     setHasToken(!!token);
//     checkLoginStatus();

//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
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
//         headers: { "Content-Type": "application/json" },
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

//   const handleLogin = () => router.push("/login");

//   if (isAuthPage) return null;

//   const backgroundColor = scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent';
//   const textColor = scrollY > 50 ? 'text-blue' : 'text-white';

//   const NavLink = ({ href, children }) => (
//     <Link href={href}>
//       <motion.span
//         className={`${textColor} px-3 py-2 rounded-md text-sm font-medium`}
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {children}
//       </motion.span>
//     </Link>
//   );

//   return (
//     <nav className={`${backgroundColor} transition-all duration-300 fixed w-full z-10`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//         <div className="flex items-center">
//   <Link href="/" className="flex items-center">
//     <img className="h-12 w-auto mr-2" src="/Logo2.png" alt="Logo" />
//     <p className="text-blueD font-bold text-xl">Re Plastify</p> {/* Add additional classes to style the text as needed */}
//   </Link>
// </div>


//           {/* Desktop Menu */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/about">Our Story</NavLink>
//               <NavLink href="/challenges">Challenges</NavLink>
//               <NavLink href="/communities">Community</NavLink>
//               <NavLink href="/AllProducts">Our Products</NavLink>
//               <NavLink href="/contact">Contact us</NavLink>
//               {hasToken && <NavLink href="/profile">My Profile</NavLink>}
//             </div>
//           </div>

//           <div className="hidden md:flex items-center">
//             <Link href="/cart">
//               <motion.div 
//                 className="relative p-2 rounded-full"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 <ShoppingCart className={`h-6 w-6 ${textColor}`} />
//                 {totalItems > 0 && (
//                   <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
//                     {totalItems}
//                   </span>
//                 )}
//               </motion.div>
//             </Link>
//             {hasToken ? (
//               <motion.button
//                 onClick={handleLogout}
//                 className={`ml-4 ${textColor} hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <LogOut className="h-5 w-5 mr-2 inline" />
//                 Log out
//               </motion.button>
//             ) : (
//               <motion.button
//                 onClick={handleLogin}
//                 className={`ml-4 ${textColor} hover:bg-blue hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <LogIn className="h-5 w-5 mr-2 inline" />
//                 Log in
//               </motion.button>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <motion.button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className={`${textColor}  inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </motion.button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       <AnimatePresence>
//         {isMenuOpen && (
//           <motion.div
//             className="md:hidden sticky top-0"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${backgroundColor}`}>
//               <NavLink href="/">Home</NavLink>
//               <NavLink href="/about">Our Story</NavLink>
//               <NavLink href="/challenges">Challenges</NavLink>
//               <NavLink href="/communities">Community</NavLink>
//               <NavLink href="/AllProducts">Our Products</NavLink>
//               <NavLink href="/contact">Contact us</NavLink>
//               {hasToken && <NavLink href="/profile">My Profile</NavLink>}
//               <NavLink href="/cart">
//                 Cart ({totalItems})
//               </NavLink>
//               {hasToken ? (
//                 <motion.button
//                   onClick={handleLogout}
//                   className={`w-full text-left ${textColor} hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-base font-medium`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <LogOut className="h-5 w-5 mr-2 inline" />
//                   Log out
//                 </motion.button>
//               ) : (
//                 <motion.button
//                   onClick={handleLogin}
//                   className={`w-full text-left ${textColor} hover:bg-blue hover:text-white px-3 py-2 rounded-md text-base font-medium`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <LogIn className="h-5 w-5 mr-2 inline" />
//                   Log in
//                 </motion.button>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }










"use client"
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ShoppingCart, LogOut, LogIn, Menu, X } from "lucide-react";
import Cookies from "js-cookie";
import { useCart } from "../app/contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const [hasToken, setHasToken] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");
    setHasToken(!!token);
    checkLoginStatus();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        headers: { "Content-Type": "application/json" },
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

  const handleLogin = () => router.push("/login");

  if (isAuthPage) return null;

  const backgroundColor = scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent';
  const textColor = 'text-green'; // Changed to green

  const NavLink = ({ href, children }) => (
    <Link href={href}>
      <motion.span
        className={`${textColor} px-3 py-2 rounded-md text-sm font-medium hover:text-green-800`} // Added hover state
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.span>
    </Link>
  );

  return (
    <nav className={`${backgroundColor} transition-all duration-300 fixed w-full z-10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img className="h-12 w-auto mr-2" src="/Logo2.png" alt="Logo" />
              <p className="text-blueD font-bold text-xl">Re Plastify</p>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">Our Story</NavLink>
              <NavLink href="/challenges">Challenges</NavLink>
              <NavLink href="/communities">Community</NavLink>
              <NavLink href="/AllProducts">Our Products</NavLink>
              <NavLink href="/contact">Contact us</NavLink>
              {hasToken && <NavLink href="/profile">My Profile</NavLink>}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <Link href="/cart">
              <motion.div 
                className="relative p-2 rounded-full"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart className={`h-6 w-6 ${textColor}`} />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                    {totalItems}
                  </span>
                )}
              </motion.div>
            </Link>
            {hasToken ? (
              <motion.button
                onClick={handleLogout}
                className={`ml-4 ${textColor} hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogOut className="h-5 w-5 mr-2 inline" />
                Log out
              </motion.button>
            ) : (
              <motion.button
                onClick={handleLogin}
                className={`ml-4 ${textColor} hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="h-5 w-5 mr-2 inline" />
                Log in
              </motion.button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${textColor} inline-flex items-center justify-center p-2 rounded-md focus:outline-none`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden sticky top-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${backgroundColor}`}>
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">Our Story</NavLink>
              <NavLink href="/challenges">Challenges</NavLink>
              <NavLink href="/communities">Community</NavLink>
              <NavLink href="/AllProducts">Our Products</NavLink>
              <NavLink href="/contact">Contact us</NavLink>
              {hasToken && <NavLink href="/profile">My Profile</NavLink>}
              <NavLink href="/cart">
                Cart ({totalItems})
              </NavLink>
              {hasToken ? (
                <motion.button
                  onClick={handleLogout}
                  className={`w-full text-left ${textColor} hover:bg-red-500 hover:text-white px-3 py-2 rounded-md text-base font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut className="h-5 w-5 mr-2 inline" />
                  Log out
                </motion.button>
              ) : (
                <motion.button
                  onClick={handleLogin}
                  className={`w-full text-left ${textColor} hover:bg-green-600 hover:text-white px-3 py-2 rounded-md text-base font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogIn className="h-5 w-5 mr-2 inline" />
                  Log in
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}