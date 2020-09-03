import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyAp846i5sn4xXNIxvuhQW-A1kr67CDA5Ps",
    authDomain: "spacex-91140.firebaseapp.com",
    databaseURL: "https://spacex-91140.firebaseio.com",
    projectId: "spacex-91140",
    storageBucket: "spacex-91140.appspot.com",
    messagingSenderId: "122541570798",
    appId: "1:122541570798:web:fc8d71b47284fba62011ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase