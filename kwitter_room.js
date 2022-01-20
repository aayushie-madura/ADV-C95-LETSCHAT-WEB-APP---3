
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCqwZFbmcXNOBlEhASzjLhGR9F3__Y8C3M",
      authDomain: "let-chat-webapp-1.firebaseapp.com",
      databaseURL: "https://let-chat-webapp-1-default-rtdb.firebaseio.com",
      projectId: "let-chat-webapp-1",
      storageBucket: "let-chat-webapp-1.appspot.com",
      messagingSenderId: "902002998959",
      appId: "1:902002998959:web:4eef3271573ec2c203de5a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function add_room(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("roomname",room_name);
      window.location="kwitter_page.html";  
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
