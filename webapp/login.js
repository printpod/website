// Handles all Firebase interaction + events 
 

// Add a real time listener
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.alert('Signed in!')

  } else {
    // No user is signed in.
    window.alert('No user Signed in!')
  }
});



// Login function
 function login() {

      var email = document.getElementById('emailAddress').value;
      var password = document.getElementById('password').value;
      window.alert("Email: " + email + " password " + password)
      firebase.auth.signInWithEmailAndPassword(email, password).catch(function(error){
        var errorCode = error.code
        var errorMessage = error.message
        window.alert("Error: " + errorCode + errorMessage)

      });
}
  

   

// Register function
function register() {

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorCode + errorMessage)
  // ...
});

}
