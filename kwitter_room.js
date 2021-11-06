
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAKvLwGeRafbuB5fpqJIvD6a3Q5LQNcjz0",
      authDomain: "kwitter-525a7.firebaseapp.com",
      databaseURL: "https://kwitter-525a7-default-rtdb.firebaseio.com",
      projectId: "kwitter-525a7",
      storageBucket: "kwitter-525a7.appspot.com",
      messagingSenderId: "996295826738",
      appId: "1:996295826738:web:08db10a2664e2646974b2b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome-" + user_name;

    function addroomname(){

     room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
     purpose: "Adding room name"

     });
     localStorage.setItem("room_name",room_name);
     window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirect(name){

console.log(name);
localStorage.setItem("room_name",name);
window.location = "index.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
