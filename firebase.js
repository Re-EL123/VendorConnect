// firebase.js

// Import Firebase SDKs via CDN
document.write(`
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"><\/script>
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"><\/script>
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js"><\/script>
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-storage-compat.js"><\/script>
`);

// Wait until all Firebase scripts are loaded
window.addEventListener('load', () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDEsYzVYNvSsKvgFk5cSa_7lWWdJtDc1gs",
    authDomain: "online-mall-4422.firebaseapp.com",
    databaseURL: "https://online-mall-4422-default-rtdb.firebaseio.com",
    projectId: "online-mall-4422",
    storageBucket: "online-mall-4422.appspot.com",
    messagingSenderId: "947082232783",
    appId: "1:947082232783:web:116206502e5fb38383c8ba",
    measurementId: "G-LNTNZQBGL8"
  };

  // Initialize Firebase if not already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Optional: assign global aliases
  window.auth = firebase.auth();
  window.db = firebase.firestore();
  window.storage = firebase.storage();
});
