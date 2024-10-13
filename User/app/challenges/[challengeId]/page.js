

// "use client";
// import { useParams, useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// import cookies from 'js-cookie';
// import { storage } from '../../../services/firebase';
// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';
// import { Calendar, Award, TrendingUp, Upload, Info, CheckCircle, XCircle, Loader } from 'lucide-react';

// const ChallengeDetails = () => {
//   const { challengeId } = useParams();  // Get the challengeId from URL params
//   const router = useRouter();  // Hook to programmatically navigate
//   const [challenge, setChallenge] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [videoFile, setVideoFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [error, setError] = useState('');
//   const [userId, setUserId] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Fetch challenge details when challengeId is available
//   useEffect(() => {
//     const fetchChallengeDetails = async () => {
//       try {
//         const response = await fetch(`/api/challenges/${challengeId}`);
//         if (!response.ok) throw new Error('Failed to fetch challenge details');
//         const data = await response.json();
//         setChallenge(data);
//       } catch (error) {
//         console.error('Error fetching challenge details:', error);
//         setError('Error fetching challenge details');
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (challengeId) fetchChallengeDetails();
//   }, [challengeId]);

//   // Check if the user is logged in and fetch userId
//   useEffect(() => {
//     const checkAuthStatus = async () => {
//       try {
//         const res = await fetch('/api/auth/check', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           credentials: 'include',  // Ensure cookies (token) are included in request
//         });

//         const data = await res.json();

//         if (data.isLoggedIn) {
//           setIsLoggedIn(true);
//           setUserId(data.userId);  // Set the userId from response
//         } else {
//           setIsLoggedIn(false);
//         }
//       } catch (error) {
//         console.error('Failed to check auth status:', error);
//       }
//     };

//     checkAuthStatus();
//   }, []);

//   // Handle video upload
//   const handleVideoUpload = async () => {
//     if (!videoFile) return;

//     const videoRef = ref(storage, `challenges/${challengeId}/solutions/${videoFile.name}`);
//     setUploading(true);  // Set uploading state

//     try {
//       await uploadBytes(videoRef, videoFile);  // Upload video to Firebase storage
//       const videoURL = await getDownloadURL(videoRef);  // Get downloadable URL

//       const requestData = { userId, challengeId, solutionVideo: videoURL };

//       // Post the completed challenge to the backend
//       const response = await fetch('/api/challenges/completed', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestData),
//       });

//       if (!response.ok) throw new Error('Failed to save completed challenge');

//       // Show success message
//       await Swal.fire({
//         title: 'Submission Successful!',
//         text: 'We will review your submission.',
//         icon: 'success',
//         confirmButtonText: 'OK',
//       });

//       router.push('/challenges');  // Navigate back to challenges page
//     } catch (error) {
//       console.error('Error uploading video:', error);
//       Swal.fire({
//         title: 'Upload Failed',
//         text: 'Failed to upload video. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK',
//       });
//     } finally {
//       setUploading(false);  // Reset uploading state
//     }
//   };

//   // Show loading state
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-green-50">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="text-2xl text-green-600 font-semibold flex items-center"
//         >
//           <Loader className="w-16 h-16 animate-spin text-green-500" />
//         </motion.div>
//       </div>
//     );
//   }

//   // Show error state
//   if (error) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-red-50">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-xl text-red-600 font-semibold flex items-center"
//         >
//           <XCircle className="w-8 h-8 mr-2" />
//           {error}
//         </motion.div>
//       </div>
//     );
//   }

//   // Show if no challenge found
//   if (!challenge) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-yellow-50">
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-xl text-yellow-600 font-semibold flex items-center"
//         >
//           <Info className="w-8 h-8 mr-2" />
//           No challenge details found.
//         </motion.div>
//       </div>
//     );
//   }

//   // Main content rendering for challenge details
//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
//       <motion.h1
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold mb-6 text-center text-green-800"
//       >
//         {challenge.title}
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="text-lg text-gray-700 mb-8 text-center"
//       >
//         {challenge.description}
//       </motion.p>

//       {/* Challenge details */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl"
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-green-700">Challenge Details</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* <DetailItem icon={Calendar} label="Date" value={new Date(challenge.startDate).toLocaleDateString()} /> */}
//           {/* <DetailItem icon={CheckCircle} label="Criteria" value={challenge.criteria} /> */}
//           <DetailItem icon={Info} label="Instructions" value={challenge.instructions} />
//           <DetailItem icon={Award} label="Points" value={challenge.points} />
//           <DetailItem icon={TrendingUp} label="Total Impact" value={challenge.totalImpact} />
//           <DetailItem icon={Info} label="Impact Type" value={challenge.impactType} />
//         </div>
//       </motion.div>

//       {/* Solution submission */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.6 }}
//         className="mt-12"
//       >
//         <h2 className="text-2xl font-semibold mb-4 text-center text-green-700">Submit Your Solution</h2>
//         <div className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
//           <input
//             type="file"
//             accept="video/*"
//             onChange={(e) => setVideoFile(e.target.files[0])}
//             className="mb-6 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//           <div className="flex justify-center">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={handleVideoUpload}
//               disabled={uploading || !videoFile}
//               className={`bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 hover:bg-green-700 flex items-center ${
//                 (uploading || !videoFile) ? 'opacity-50 cursor-not-allowed' : ''
//               }`}
//             >
//               <Upload className="w-5 h-5 mr-2" />
//               {uploading ? 'Uploading...' : 'Submit Video'}
//             </motion.button>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// // A reusable component for challenge details
// const DetailItem = ({ icon: Icon, label, value }) => (
//   <div className="flex items-center mb-4">
//     <Icon className="w-6 h-6 mr-2 text-green-500" />
//     <span className="font-medium text-gray-600">{label}:</span>
//     <span className="ml-2 text-gray-700">{value}</span>
//   </div>
// );

// export default ChallengeDetails;


















"use client"
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../services/firebase';
import Swal from 'sweetalert2';
import { Calendar, Award, TrendingUp, Upload, Info, CheckCircle, XCircle, Loader, Recycle, Trash2, Water, Wind } from 'lucide-react';

const ChallengeDetails = () => {
  const { challengeId } = useParams();
  const router = useRouter();
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [videoFile, setVideoFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [error, setError] = useState('');
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchChallengeDetails = async () => {
      try {
        const response = await fetch(`/api/challenges/${challengeId}`);
        if (!response.ok) throw new Error('Failed to fetch challenge details');
        const data = await response.json();
        setChallenge(data);
      } catch (error) {
        console.error('Error fetching challenge details:', error);
        setError('Error fetching challenge details');
      } finally {
        setLoading(false);
      }
    };

    if (challengeId) fetchChallengeDetails();
  }, [challengeId]);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const res = await fetch('/api/auth/check', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });
        const data = await res.json();
        setIsLoggedIn(data.isLoggedIn);
        setUserId(data.userId);
      } catch (error) {
        console.error('Failed to check auth status:', error);
      }
    };
    checkAuthStatus();
  }, []);

  const handleVideoUpload = async () => {
    if (!videoFile) return;

    const videoRef = ref(storage, `challenges/${challengeId}/solutions/${videoFile.name}`);
    setUploading(true);
    setShowUploadModal(true);

    const uploadTask = uploadBytesResumable(videoRef, videoFile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error('Error uploading video:', error);
        setUploading(false);
        setShowUploadModal(false);
        Swal.fire({
          title: 'Upload Failed',
          text: 'Failed to upload video. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      },
      async () => {
        const videoURL = await getDownloadURL(uploadTask.snapshot.ref);
        const requestData = { userId, challengeId, solutionVideo: videoURL };

        const response = await fetch('/api/challenges/completed', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestData),
        });

        if (!response.ok) throw new Error('Failed to save completed challenge');

        Swal.fire({
          title: 'Submission Successful!',
          text: 'We will review your submission.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        setUploading(false);
        setShowUploadModal(false);
        router.push('/challenges');
      }
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-green-600 font-semibold flex items-center"
        >
          <Loader className="w-16 h-16 animate-spin text-green-500 mr-4" />
          {/* Loading Challenge... */}
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-50">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-red-600 font-semibold flex items-center"
        >
          <XCircle className="w-8 h-8 mr-2" />
          {error}
        </motion.div>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="flex items-center justify-center h-screen bg-yellow-50">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-yellow-600 font-semibold flex items-center"
        >
          <Info className="w-8 h-8 mr-2" />
          No challenge details found.
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <AnimatePresence>
        {showUploadModal && (
          <UploadProgressModal progress={uploadProgress} />
        )}
      </AnimatePresence>
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-center text-green-800"
      >
        {challenge.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-gray-700 mb-8 text-center"
      >
        {challenge.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
      >
        <DetailCard icon={Info} label="Instructions" value={challenge.instructions} />
        <DetailCard icon={Award} label="Points" value={challenge.points} />
        <DetailCard icon={TrendingUp} label="Total Impact" value={challenge.totalImpact} />
        <DetailCard icon={Recycle} label="Impact Type" value={challenge.impactType} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-12"
      >
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-center text-green-700 flex items-center justify-center mb-4">
            <Upload className="w-6 h-6 mr-2" />
            Submit Your Solution
          </h2>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files[0])}
            className="mb-6 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex justify-center">
            <button
              onClick={handleVideoUpload}
              disabled={!videoFile || uploading}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {uploading ? 'Uploading...' : 'Upload Solution'}
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const UploadProgressModal = ({ progress }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full"
      >
        <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center justify-center">
          <Upload className="w-5 h-5 mr-2" />
          Uploading Video
        </h3>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="mt-4 text-gray-700 text-center">{Math.round(progress)}% complete</p>
      </motion.div>
    </motion.div>
  );
};

const DetailCard = ({ icon: Icon, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-lg shadow-md p-6 overflow-hidden transition-all duration-300 hover:shadow-lg"
  >
    <div className="flex items-center">
      <Icon className="w-10 h-10 text-green-600 mr-4" />
      <div>
        <p className="text-sm font-semibold text-gray-600">{label}</p>
        <p className="text-lg text-gray-800">{value}</p>
      </div>
    </div>
  </motion.div>
);

export default ChallengeDetails;