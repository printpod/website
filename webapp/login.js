// Handles all Firebase interaction + events 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBhbCFJVb9k2ZoG-6ifAyUMn4fXHJ8B3Os",
    authDomain: "printpod-firebase.firebaseapp.com",
    databaseURL: "https://printpod-firebase.firebaseio.com",
    projectId: "printpod-firebase",
    storageBucket: "printpod-firebase.appspot.com",
    messagingSenderId: "465822311345"
  };
  firebase.initializeApp(config);


// Add a real time listener
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.alert('Signed in!')

  } else {
    // No user is signed in.
   // window.alert('No user Signed in!')
  }
});



// Login function
function login() {

      var email = document.getElementById('emailAddress').value;
      var password = document.getElementById('password').value;
      firebase.auth.signInWithEmailAndPassword(email, password).catch(function(error){
        var errorCode = error.code
        var errorMessage = error.message
        window.alert("Error: " + errorCode + errorMessage)

      });
}
  


// Register function
function register(){
  // Get details
  var email = document.getElementById('emailAddress').value;
  var password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorCode + errorMessage)
  // ...
});
   
document.getElementById('register-btn').addEventListener('click', register);



};

firebase.initializeApp({
  apiKey: "AIzaSyBhbCFJVb9k2ZoG-6ifAyUMn4fXHJ8B3Os",
  authDomain: "printpod-firebase.firebaseapp.com",
  databaseURL: "https://printpod-firebase.firebaseio.com",
  projectId: "printpod-firebase",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// add data

db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});


