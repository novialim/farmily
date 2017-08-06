 $("#loginbtn").click(function() {
     event.preventDefault();
     // loginGH();
     alert("HELLO!");
 }); // End of sign on with GitHub


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


 