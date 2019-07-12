var config = {
    apiKey: "AIzaSyDoMCvEYp-SmRjzLbIt_3JcnsSK02BPVUM",
    authDomain: "employeeinfo-bcec0.firebaseapp.com",
    databaseURL: "https://employeeinfo-bcec0.firebaseio.com",
    projectId: "employeeinfo-bcec0",
    storageBucket: "employeeinfo-bcec0.appspot.com",
    messagingSenderId: "439651256996",
    appId: "1:439651256996:web:9aa0656d1df3c186"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  var database = firebase.database();

$("#addEmployeeBtn").on("click", function (event) {
    event.preventDefault();
    console.log("pushed")
})

console.log("hello")