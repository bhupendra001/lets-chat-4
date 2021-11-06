//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var  firebaseConfig = {
    apiKey: "AIzaSyDRt8DJj4FuhpoSAnsO3x21lfG1V1nGo00",
    authDomain: "kwitter2-daa4f.firebaseapp.com",
    databaseURL: "https://kwitter2-daa4f-default-rtdb.firebaseio.com",
    projectId: "kwitter2-daa4f",
    storageBucket: "kwitter2-daa4f.appspot.com",
    messagingSenderId: "807241270553",
    appId: "1:807241270553:web:f9834051175809bf95f188"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){

msg = document.getElementById("msg").value;     
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

});    
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();