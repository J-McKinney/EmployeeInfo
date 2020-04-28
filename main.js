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

var name = "";
var role = "";
var start = "";
var rate = 0;

$("#addEmployeeBtn").on("click", function (event) {
    event.preventDefault();
    // console.log("pushed")
    name = $("#employeeNameInput").val().trim();
    role = $("#employeeInputRole").val().trim();
    start = $("#startDate").val().trim();
    rate = $("#monthlyRate").val().trim();

    database.ref().push({
        name: name,
        role: role,
        start: start,
        rate: rate
    });
    console.log(name);
    console.log(role);
    console.log(start);
    console.log(rate);
})
// id="employeeNameInput"
// id="employeeInputRole"
// id="startDate"
// id="monthlyRate"
// console.log("hello")
// `.on("child_added")`
database.ref().on("child_added", function (childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().role);
    console.log(childSnapshot.val().start);
    console.log(childSnapshot.val().rate);
})