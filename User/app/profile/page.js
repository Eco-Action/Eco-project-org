
/////////////////////////////////////work //////////////////

// 'use client';
// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     const fetchUser = async () => {
//       const res = await fetch('/api/user');
//       const data = await res.json();
//       if (data.user) {
//         setUser(data.user);
//         setFirstName(data.user.username);
//         setEmail(data.user.email);
//       } else {
//         Swal.fire('Error!', data.error, 'error');
//       }
//     };

//     fetchUser();
//   }, []);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/user/update', {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ firstName, email, password }),
//     });

//     const data = await res.json();
//     if (data.message) {
//       Swal.fire('Success!', data.message, 'success');
//     } else {
//       Swal.fire('Error!', data.error, 'error');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-6">User Profile</h1>
//       {user && (
//         <form 
//           onSubmit={handleUpdate} 
//           className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
//         >
//           <label className="block mb-4">
//             <span className="text-gray-700">First Name</span>
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//             />
//           </label>
//           <label className="block mb-4">
//             <span className="text-gray-700">Email</span>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//             />
//           </label>
//           <label className="block mb-4">
//             <span className="text-gray-700">Password (leave blank to keep current)</span>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//             />
//           </label>
//           <button type="submit" className="mt-4 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
//             Update
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default UserProfile;















// 'use client';
// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchUserAndOrders = async () => {
//       try {
//         const [userRes, ordersRes] = await Promise.all([
//           fetch('/api/user'),
//           fetch('/api/orders')
//         ]);
        
//         const userData = await userRes.json();
//         const ordersData = await ordersRes.json();

//         if (userData.user) {
//           setUser(userData.user);
//           setFirstName(userData.user.username);
//           setEmail(userData.user.email);
//         } else {
//           Swal.fire('Error!', userData.error, 'error');
//         }

//         if (ordersData.orders) {
//           setOrders(ordersData.orders);
//         } else {
//           Swal.fire('Error!', ordersData.error, 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to fetch user data and orders', 'error');
//       }
//     };

//     fetchUserAndOrders();
//   }, []);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/user/update', {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ firstName, email, password }),
//     });

//     const data = await res.json();
//     if (data.message) {
//       Swal.fire('Success!', data.message, 'success');
//     } else {
//       Swal.fire('Error!', data.error, 'error');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-6">User Profile</h1>
//       {user && (
//         <div className="w-full max-w-4xl">
//           <form 
//             onSubmit={handleUpdate} 
//             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           >
//             <label className="block mb-4">
//               <span className="text-gray-700">First Name</span>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <label className="block mb-4">
//               <span className="text-gray-700">Email</span>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <label className="block mb-4">
//               <span className="text-gray-700">Password (leave blank to keep current)</span>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <button type="submit" className="mt-4 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
//               Update
//             </button>
//           </form>

//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//             <h2 className="text-xl font-bold mb-4">Your Orders</h2>
//             {orders.length > 0 ? (
//               <ul>
//                 {orders.map((order) => (
//                   <li key={order._id} className="mb-4 p-4 border border-gray-200 rounded">
//                     <p><strong>Order ID:</strong> {order._id}</p>
//                     <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
//                     <p><strong>Status:</strong> {order.status}</p>
//                     <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No orders found.</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;

/////////////////////////////////////////////work profile + orders //////////////////

// 'use client';
// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchUserAndOrders = async () => {
//       try {
//         const [userRes, ordersRes] = await Promise.all([
//           fetch('/api/user'),
//           fetch('/api/orders')
//         ]);
        
//         const userData = await userRes.json();
//         const ordersData = await ordersRes.json();

//         if (userData.user) {
//           setUser(userData.user);
//           setFirstName(userData.user.username);
//           setEmail(userData.user.email);
//         } else {
//           Swal.fire('Error!', userData.error, 'error');
//         }

//         if (ordersData.orders) {
//           setOrders(ordersData.orders);
//         } else {
//           Swal.fire('Error!', ordersData.error, 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to fetch user data and orders', 'error');
//       }
//     };

//     fetchUserAndOrders();
//   }, []);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/user/update', {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ firstName, email, password }),
//     });

//     const data = await res.json();
//     if (data.message) {
//       Swal.fire('Success!', data.message, 'success');
//     } else {
//       Swal.fire('Error!', data.error, 'error');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-6">User Profile</h1>
//       {user && (
//         <div className="w-full max-w-4xl">
//           <form 
//             onSubmit={handleUpdate} 
//             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           >
//             {/* ... (previous form fields remain unchanged) ... */}



//             <label className="block mb-4">
//                <span className="text-gray-700">First Name</span>
//                <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <label className="block mb-4">
//               <span className="text-gray-700">Email</span>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <label className="block mb-4">
//               <span className="text-gray-700">Password (leave blank to keep current)</span>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <button type="submit" className="mt-4 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
//               Update
//             </button>

//           </form>

//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//             <h2 className="text-xl font-bold mb-4">Your Orders</h2>
//             {orders.length > 0 ? (
//               <ul>
//                 {orders.map((order) => (
//                   <li key={order._id} className="mb-8 p-4 border border-gray-200 rounded">
//                     <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
//                     <p><strong>Status:</strong> {order.status}</p>
//                     <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//                     <h3 className="font-bold mt-4 mb-2">Products:</h3>
//                     <ul className="pl-4">
//                       {order.products.map((item) => (
//                         <li key={item._id} className="mb-4 border-b pb-2">
//                           <div className="flex items-start">
//                             <div>
//                               <p className="font-semibold">{item.product.name}</p>
//                               <p className="text-sm text-gray-600">{item.product.description}</p>
//                               <p>Price: ${item.product.price.toFixed(2)}</p>
//                               <p>Quantity: {item.quantity}</p>
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No orders found.</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;








/////////////////////////////////////////////work profile + orders + prizes //////////////////




// 'use client';
// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [orders, setOrders] = useState([]);
//   const [awardedPrizes, setAwardedPrizes] = useState([]);

//   useEffect(() => {
//     const fetchUserDataOrdersAndPrizes = async () => {
//       try {
//         const [userRes, ordersRes, prizesRes] = await Promise.all([
//           fetch('/api/user'),
//           fetch('/api/orders'),
//           fetch('/api/awarded-prizes')
//         ]);
        
//         const userData = await userRes.json();
//         const ordersData = await ordersRes.json();
//         const prizesData = await prizesRes.json();

//         if (userData.user) {
//           setUser(userData.user);
//           setFirstName(userData.user.username);
//           setEmail(userData.user.email);
//         } else {
//           Swal.fire('Error!', userData.error, 'error');
//         }

//         if (ordersData.orders) {
//           setOrders(ordersData.orders);
//         } else {
//           Swal.fire('Error!', ordersData.error, 'error');
//         }

//         if (prizesData.awardedPrizes) {
//           setAwardedPrizes(prizesData.awardedPrizes);
//         } else {
//           Swal.fire('Error!', prizesData.error, 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to fetch user data, orders, and prizes', 'error');
//       }
//     };

//     fetchUserDataOrdersAndPrizes();
//   }, []);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/user/update', {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ firstName, email, password }),
//     });

//     const data = await res.json();
//     if (data.message) {
//       Swal.fire('Success!', data.message, 'success');
//     } else {
//       Swal.fire('Error!', data.error, 'error');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-6">User Profile</h1>
//       {user && (
//         <div className="w-full max-w-4xl">
//           <form 
//             onSubmit={handleUpdate} 
//             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           >
//             <label className="block mb-4">
//               <span className="text-gray-700">First Name</span>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <label className="block mb-4">
//               <span className="text-gray-700">Email</span>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <label className="block mb-4">
//               <span className="text-gray-700">Password (leave blank to keep current)</span>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <button type="submit" className="mt-4 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
//               Update
//             </button>
//           </form>

//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h2 className="text-xl font-bold mb-4">Your Awarded Prizes</h2>
//             {awardedPrizes.length > 0 ? (
//               <ul>
//                 {awardedPrizes.map((prize) => (
//                   <li key={prize._id} className="mb-4 p-4 border border-gray-200 rounded">
//                     <p className="font-semibold">{prize.prizeId.name}</p>
//                     <p className="text-sm text-gray-600">{prize.prizeId.description}</p>
//                     <p className="text-sm text-gray-500">Awarded on: {new Date(prize.awardedAt).toLocaleDateString()}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No prizes awarded yet.</p>
//             )}
//           </div>

//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//             <h2 className="text-xl font-bold mb-4">Your Orders</h2>
//             {orders.length > 0 ? (
//               <ul>
//                 {orders.map((order) => (
//                   <li key={order._id} className="mb-8 p-4 border border-gray-200 rounded">
//                     <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
//                     <p><strong>Status:</strong> {order.status}</p>
//                     <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//                     <h3 className="font-bold mt-4 mb-2">Products:</h3>
//                     <ul className="pl-4">
//                       {order.products.map((item) => (
//                         <li key={item._id} className="mb-4 border-b pb-2">
//                           <div className="flex items-start">
//                             <div>
//                               <p className="font-semibold">{item.product.name}</p>
//                               <p className="text-sm text-gray-600">{item.product.description}</p>
//                               <p>Price: ${item.product.price.toFixed(2)}</p>
//                               <p>Quantity: {item.quantity}</p>
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No orders found.</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;












////////////////////////////////////////////work 100%/////////////////


// 'use client';
// import React, { useEffect, useState } from 'react';
// import Swal from 'sweetalert2';

// const UserProfile = () => {
//   const [user, setUser] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [orders, setOrders] = useState([]);
//   const [awardedPrizes, setAwardedPrizes] = useState([]);
//   const [completedChallenges, setCompletedChallenges] = useState([]);

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const [userRes, ordersRes, prizesRes, challengesRes] = await Promise.all([
//           fetch('/api/user'),
//           fetch('/api/orders'),
//           fetch('/api/awarded-prizes'),
//           fetch('/api/completed-challenges')
//         ]);
        
//         const userData = await userRes.json();
//         const ordersData = await ordersRes.json();
//         const prizesData = await prizesRes.json();
//         const challengesData = await challengesRes.json();

//         if (userData.user) {
//           setUser(userData.user);
//           setFirstName(userData.user.username);
//           setEmail(userData.user.email);
//         } else {
//           Swal.fire('Error!', userData.error, 'error');
//         }

//         if (ordersData.orders) {
//           setOrders(ordersData.orders);
//         } else {
//           Swal.fire('Error!', ordersData.error, 'error');
//         }

//         if (prizesData.awardedPrizes) {
//           setAwardedPrizes(prizesData.awardedPrizes);
//         } else {
//           Swal.fire('Error!', prizesData.error, 'error');
//         }

//         if (challengesData.completedChallenges) {
//           setCompletedChallenges(challengesData.completedChallenges);
//         } else {
//           Swal.fire('Error!', challengesData.error, 'error');
//         }
//       } catch (error) {
//         Swal.fire('Error!', 'Failed to fetch user data', 'error');
//       }
//     };

//     fetchUserData();
//   }, []);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/user/update', {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ firstName, email, password }),
//     });

//     const data = await res.json();
//     if (data.message) {
//       Swal.fire('Success!', data.message, 'success');
//     } else {
//       Swal.fire('Error!', data.error, 'error');
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-6">User Profile</h1>
//       {user && (
//         <div className="w-full max-w-4xl">
//           <form 
//             onSubmit={handleUpdate} 
//             className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//           >
//             <label className="block mb-4">
//               <span className="text-gray-700">First Name</span>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <label className="block mb-4">
//               <span className="text-gray-700">Email</span>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <label className="block mb-4">
//               <span className="text-gray-700">Password (leave blank to keep current)</span>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
//               />
//             </label>
//             <button type="submit" className="mt-4 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
//               Update
//             </button>
//           </form>

//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h2 className="text-xl font-bold mb-4">Your Completed Challenges</h2>
//             {completedChallenges.length > 0 ? (
//               <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {completedChallenges.map((challenge) => (
//                   <li key={challenge._id} className="border border-gray-200 rounded-lg overflow-hidden">
//                     <img src={challenge.challengeId.image} alt={challenge.challengeId.title} className="w-full h-48 object-cover" />
//                     <div className="p-4">
//                       <h3 className="font-semibold text-lg">{challenge.challengeId.title}</h3>
//                       <p className="text-green-600 font-bold">Points: {challenge.challengeId.points}</p>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No completed challenges yet.</p>
//             )}
//           </div>

//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//             <h2 className="text-xl font-bold mb-4">Your Awarded Prizes</h2>
//             {awardedPrizes.length > 0 ? (
//               <ul>
//                 {awardedPrizes.map((prize) => (
//                   <li key={prize._id} className="mb-4 p-4 border border-gray-200 rounded">
//                     <p className="font-semibold">{prize.prizeId.name}</p>
//                     <p className="text-sm text-gray-600">{prize.prizeId.description}</p>
//                     <p className="text-sm text-gray-500">Awarded on: {new Date(prize.awardedAt).toLocaleDateString()}</p>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No prizes awarded yet.</p>
//             )}
//           </div>

//           <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
//             <h2 className="text-xl font-bold mb-4">Your Orders</h2>
//             {orders.length > 0 ? (
//               <ul>
//                 {orders.map((order) => (
//                   <li key={order._id} className="mb-8 p-4 border border-gray-200 rounded">
//                     <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
//                     <p><strong>Status:</strong> {order.status}</p>
//                     <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
//                     <h3 className="font-bold mt-4 mb-2">Products:</h3>
//                     <ul className="pl-4">
//                       {order.products.map((item) => (
//                         <li key={item._id} className="mb-4 border-b pb-2">
//                           <div className="flex items-start">
//                             <div>
//                               <p className="font-semibold">{item.product.name}</p>
//                               <p className="text-sm text-gray-600">{item.product.description}</p>
//                               <p>Price: ${item.product.price.toFixed(2)}</p>
//                               <p>Quantity: {item.quantity}</p>
//                             </div>
//                           </div>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             ) : (
//               <p>No orders found.</p>
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserProfile;



















///////////////////////







'use client';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [orders, setOrders] = useState([]);
  const [awardedPrizes, setAwardedPrizes] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const [userRes, ordersRes, prizesRes, challengesRes] = await Promise.all([
          fetch('/api/user'),
          fetch('/api/orders'),
          fetch('/api/awarded-prizes'),
          fetch('/api/completed-challenges')
        ]);
        
        const userData = await userRes.json();
        const ordersData = await ordersRes.json();
        const prizesData = await prizesRes.json();
        const challengesData = await challengesRes.json();

        if (userData.user) {
          setUser(userData.user);
          setFirstName(userData.user.username);
          setEmail(userData.user.email);
        } else {
          Swal.fire('Error!', userData.error, 'error');
        }

        if (ordersData.orders) {
          setOrders(ordersData.orders);
        } else {
          Swal.fire('Error!', ordersData.error, 'error');
        }

        if (prizesData.awardedPrizes) {
          setAwardedPrizes(prizesData.awardedPrizes);
        } else {
          Swal.fire('Error!', prizesData.error, 'error');
        }

        if (challengesData.completedChallenges) {
          setCompletedChallenges(challengesData.completedChallenges);
        } else {
          Swal.fire('Error!', challengesData.error, 'error');
        }
      } catch (error) {
        Swal.fire('Error!', 'Failed to fetch user data', 'error');
      }
    };

    fetchUserData();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/user/update', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, email, password }),
    });

    const data = await res.json();
    if (data.message) {
      Swal.fire('Success!', data.message, 'success');
    } else {
      Swal.fire('Error!', data.error, 'error');
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <form 
            onSubmit={handleUpdate} 
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <label className="block mb-4">
              <span className="text-gray-700">First Name</span>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Password (leave blank to keep current)</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-green-500"
              />
            </label>
            <button type="submit" className="mt-4 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600">
              Update
            </button>
          </form>
        );
      case 'challenges':
        return (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Your Completed Challenges</h2>
            {completedChallenges.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {completedChallenges.map((challenge) => (
                  <li key={challenge._id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <img src={challenge.challengeId.image} alt={challenge.challengeId.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg">{challenge.challengeId.title}</h3>
                      <p className="text-green-600 font-bold">Points: {challenge.challengeId.points}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No completed challenges yet.</p>
            )}
          </div>
        );
      case 'prizes':
        return (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Your Awarded Prizes</h2>
            {awardedPrizes.length > 0 ? (
              <ul>
                {awardedPrizes.map((prize) => (
                  <li key={prize._id} className="mb-4 p-4 border border-gray-200 rounded">
                    <p className="font-semibold">{prize.prizeId.name}</p>
                    <p className="text-sm text-gray-600">{prize.prizeId.description}</p>
                    <p className="text-sm text-gray-500">Awarded on: {new Date(prize.awardedAt).toLocaleDateString()}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No prizes awarded yet.</p>
            )}
          </div>
        );
      case 'orders':
        return (
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h2 className="text-xl font-bold mb-4">Your Orders</h2>
            {orders.length > 0 ? (
              <ul>
                {orders.map((order) => (
                  <li key={order._id} className="mb-8 p-4 border border-gray-200 rounded">
                    <p><strong>Total Amount:</strong> ${order.totalAmount.toFixed(2)}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                    <h3 className="font-bold mt-4 mb-2">Products:</h3>
                    <ul className="pl-4">
                      {order.products.map((item) => (
                        <li key={item._id} className="mb-4 border-b pb-2">
                          <div className="flex items-start">
                            <div>
                              <p className="font-semibold">{item.product.name}</p>
                              <p className="text-sm text-gray-600">{item.product.description}</p>
                              <p>Price: ${item.product.price.toFixed(2)}</p>
                              <p>Quantity: {item.quantity}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No orders found.</p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>
      {user && (
        <div className="w-full max-w-4xl">
          <div className="mb-6 flex justify-center space-x-4">
            <button
              onClick={() => setActiveSection('profile')}
              className={`px-4 py-2 rounded ${activeSection === 'profile' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveSection('challenges')}
              className={`px-4 py-2 rounded ${activeSection === 'challenges' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Challenges
            </button>
            <button
              onClick={() => setActiveSection('prizes')}
              className={`px-4 py-2 rounded ${activeSection === 'prizes' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Prizes
            </button>
            <button
              onClick={() => setActiveSection('orders')}
              className={`px-4 py-2 rounded ${activeSection === 'orders' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Orders
            </button>
          </div>
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default UserProfile;