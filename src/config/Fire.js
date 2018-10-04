import firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD1thXQp-5Qu6f0d25eDu4zwzn6CC-LUtY",
    authDomain: "login-blog-eca59.firebaseapp.com",
    databaseURL: "https://login-blog-eca59.firebaseio.com",
    projectId: "login-blog-eca59",
    storageBucket: "login-blog-eca59.appspot.com",
    messagingSenderId: "596305810786"
  };
  const fire = firebase.initializeApp(config);

  export default fire;
