 // Initialize Firebase
 var config = {
     apiKey: "AIzaSyD1_SBIcTfWlYScyTdGhIq0NkN-3IpCL84",
     authDomain: "farmily-c529a.firebaseapp.com",
     databaseURL: "https://farmily-c529a.firebaseio.com",
     projectId: "farmily-c529a",
     storageBucket: "farmily-c529a.appspot.com",
     messagingSenderId: "847682696085"
 };
 firebase.initializeApp(config);

 var database = firebase.database();

 var provider = new firebase.auth.GithubAuthProvider();
 var userId = "";

 // loginbtn
 $(".loginbtn").click(function() {
     event.preventDefault();
     loginGH();
 }); // End of sign on with GitHub

 $('.signOut').on("click", function() {
     signout();
 });


 //Login for Github
 function loginGH() {

     firebase.auth().signInWithPopup(provider).then(function(result) {
         // This gives you a GitHub Access Token. You can use it to access the GitHub API.
         var token = result.credential.accessToken;
         // The signed-in user info.
         user = result.user;

         $('html').addClass('logged-in');

         // to retrieve current user unique ID
         userId = firebase.auth().currentUser.uid;

         console.log("userid 1 is: " + userId);

         // if user is successfully logged in...
         sessionStorage.setItem("userKey", userId);

     }).catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // The email of the user's account used.
         var email = error.email;
         // The firebase.auth.AuthCredential type that was used.
         var credential = error.credential;
         console.log("Error - " + errorCode + "  " + errorMessage + "  " + email + "  " + credential);
     });

 }


 function signout() {
     firebase.auth().signOut().then(function() {
         // Sign-out successful.
         console.log("Bye");
         $('html').removeClass('logged-in');
         sessionStorage.removeItem("userKey");
         sessionStorage.removeItem("displayName");
         sessionStorage.clear();

     }).catch(function(error) {
         // An error happened.
     });
 }

 function initApp() {
     // Listening for auth state changes.
     // [START authstatelistener]
     firebase.auth().onAuthStateChanged(function(user) {
         // [START_EXCLUDE silent]
         // [END_EXCLUDE]
         console.log("Attempted Sign in");
         console.log(user);
         if (user) {
             // User is signed in.

             var uid = user.uid;
             // window.location = '/saved-jobs.html';          
             console.log(uid);

             // if user is successfully logged in...
             sessionStorage.setItem("displayName", user.displayName);

             console.log(user.displayName);
         }
     });
     // [END authstatelistener]

 } // [END initApp()]

 window.onload = function() {
     initApp();
 };