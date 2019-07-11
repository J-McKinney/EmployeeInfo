var config = {
    apiKey: "AIzaSyDoMCvEYp-SmRjzLbIt_3JcnsSK02BPVUM",
    authDomain: "employeeinfo-bcec0.firebaseapp.com",
    databaseURL: "https://employeeinfo-bcec0.firebaseio.com",
    projectId: "employeeinfo-bcec0",
    storageBucket: "employeeinfo-bcec0.appspot.com",
    messagingSenderId: "439651256996",
    appId: "1:439651256996:web:cee2a882c0b397ef"
  };
  var database = firebase.database();
  // Initialize Firebase
  firebase.initializeApp(config);

  $("#addEmployeeBtn").on("click", function() {
console.log("pushed")
  })