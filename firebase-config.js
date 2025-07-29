// firebase-config.js
// Replace these with your actual Firebase configuration values
// Get these from your Firebase Console -> Project Settings -> General -> Your apps

const firebaseConfig = {
  apiKey: "AIzaSyCSjheTbGoWKCTf9eTkcGJpumy5o8qtH-0",
  authDomain: "wedge-4a30d.firebaseapp.com",
  projectId: "wedge-4a30d",
  storageBucket: "wedge-4a30d.firebasestorage.app",
  messagingSenderId: "731280181382",
  appId: "1:731280181382:web:1008c1ffefa50fb9a1a907"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export for use in other files (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { firebaseConfig };
}
