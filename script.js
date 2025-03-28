// Smooth Scroll for Results Button
document
  .getElementById("resultsBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  });

// Login Modal Functionality
const loginModal = document.getElementById("loginModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  loginModal.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
  loginModal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
});

// Sample ID & Password
const sampleEmail = "shivam.com";
const samplePassword = "shivam";

submitBtn.addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === sampleEmail && password === samplePassword) {
    message.style.color = "green";
    message.textContent = "Login Successful!";

    // Redirect after 1.5 seconds
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
  } else {
    message.style.color = "red";
    message.textContent = "Invalid Email or Password!";
  }
});
