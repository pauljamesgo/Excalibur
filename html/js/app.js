window.onload = function() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD3bRPRj4XiYymL2tVJWYIfu5GM8qx7XUk",
        authDomain: "excalibur-b66bd.firebaseapp.com",
        databaseURL: "https://excalibur-b66bd.firebaseio.com",
        storageBucket: "excalibur-b66bd.appspot.com",
        messagingSenderId: "750347650987"
    };
    firebase.initializeApp(config);
    // Get elements
    const txtEmail = document.getElementById("txtEmail");
    const txtPassword = document.getElementById("txtPassword");
    const txtLogin = document.getElementById("txtLogin");
    const txtSignup = document.getElementById("txtSignup");
    const txtLogout = document.getElementById("txtLogout");
    // Add login event
    btnLogin.addEventListener("click", e=> {
        // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth;
        // Sign in
        const promise = auth.signInWithEmailAndPassword (email, pass);
        promise.catch (e => console.log(e.message))
    })
}; 