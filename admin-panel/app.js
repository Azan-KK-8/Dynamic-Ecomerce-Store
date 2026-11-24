import { auth, db } from "../firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js"
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");
form.addEventListener("submit", async (e) => {
  if (emailInput.value == "" || passwordInput.value == "") {
    alert("please Enter Email and password")
    return;
  }
  try {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log("Email :", email);
    console.log("Password :", password);
    const user = await signInWithEmailAndPassword(auth, email, password);
    const userId = await doc(db, "users", user.user.uid);
    await setDoc(userId, {
      name: "Admin",
      email: email,
      password: password,
      role: "admin"
    });
    alert("Admin is login SuccessFully");
    window.location.href = "dashboard.html"

  } catch (error) {
    console.log(error)
  }
})

