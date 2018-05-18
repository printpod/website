// Handles all Firebase interaction + events 

  // Initialize Firebase
var config = {
    apiKey: "AIzaSyBhbCFJVb9k2ZoG-6ifAyUMn4fXHJ8B3Os",
    authDomain: "printpod-firebase.firebaseapp.com",
    databaseURL: "https://printpod-firebase.firebaseio.com",
    projectId: "printpod-firebase",
    storageBucket: "printpod-firebase.appspot.com",
    messagingSenderId: "465822311345",
  };

firebase.initializeApp(config);



// Add a real time listener
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
    }).catch(function(error) {
  // An error happened.
});

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
  document.getElementById("window").innerHTML = "Welcome to PrintPod! Upload your documents!";
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorCode + "message :" + errorMessage)
  // ...
});
   
};

document.getElementById('register-btn').addEventListener('click', register);



