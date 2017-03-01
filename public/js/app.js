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
    const btnLogin = document.getElementById("btnLogin");
    const btntSignup = document.getElementById("btntSignup");
    const btnLogout = document.getElementById("btnLogout");
    // Add login event
    btnLogin.addEventListener("click", e=> {
        // Get email and pass
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword (email, pass);
        promise.catch (e => console.log(e.message))
    })
}; 