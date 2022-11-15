var firebaseConfig = {
  apiKey: "AIzaSyAjo3TTrr5oWkew5eG6K9ZfdVOlkydSNT4",
  authDomain: "lets-chat-b6d23.firebaseapp.com",
  projectId: "lets-chat-b6d23",
  storageBucket: "lets-chat-b6d23.appspot.com",
  messagingSenderId: "868956668433",
  appId: "1:868956668433:web:624448849b37f55a2427b0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //we are fetching the name of the person entered on the first screen from local storage using the key
  user_name = localStorage.getItem("user_name");

  document.getElementById("welcome_user").innerHTML = "Welcome " + user_name + " !";


  function addRoom()
  {
room_name = document.getElementById("room_input").value;
console.log(room_name);

firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"


    //● firebase is used to set the reference for adding data to the database.
    //● database() - means we want to add data to the database.
    //ref() means the reference, where we want to add a user name in the database
    //“/” - this means we want to add the user name in the root as the main folder.
    //child() function is used to give the name to the main folder
    //room_name is giving us the name of the main folder
    //update - is the firebase function used to update the database with the values.



//an empty main folder cannot be added. therefore we pass purpose inside it.
//we need to add some values and that’s why we are adding this purpose. purpose is the keyword for the value “adding room name"
});

localStorage.setItem("ROOM NAME" , room_name);

window.location = "kwitter_page.html"
  }


  function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(click_name)
{
  console.log(click_name);
  localStorage.setItem("ROOM NAME",click_name);
  window.location = "kwitter_page.html"

}

function logout()
{
  window.location = "index.html";
  localStorage.removeItem("ROOM NAME")
  localStorage.removeItem("user_name")
}
