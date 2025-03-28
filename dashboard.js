document.addEventListener("DOMContentLoaded", function () {
  const profileBtn = document.getElementById("profile-btn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeSidebar = document.getElementById("close-sidebar");

  const editProfileBtn = document.getElementById("edit-profile-btn");
  const saveProfileBtn = document.getElementById("save-profile");
  const cancelEditBtn = document.getElementById("cancel-edit");

  const profileView = document.getElementById("profile-view");
  const editProfile = document.getElementById("edit-profile");

  // Fields
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  const displayName = document.getElementById("display-name");
  const displayEmail = document.getElementById("display-email");
  const displayPhone = document.getElementById("display-phone");
  const dashboardName = document.getElementById("dashboard-name");

  // Open Sidebar
  profileBtn.addEventListener("click", function (event) {
    event.preventDefault();
    sidebar.classList.add("active");
    overlay.classList.add("active");
  });

  // Close Sidebar
  closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Open Edit Mode
  editProfileBtn.addEventListener("click", function () {
    profileView.style.display = "none";
    editProfile.style.display = "block";
  });

  // Save Changes & Update Profile
  saveProfileBtn.addEventListener("click", function () {
    const updatedName = nameInput.value;
    const updatedEmail = emailInput.value;
    const updatedPhone = phoneInput.value;

    // Update text fields
    displayName.textContent = updatedName;
    displayEmail.textContent = updatedEmail;
    displayPhone.textContent = updatedPhone;
    dashboardName.textContent = updatedName;

    // Back to profile view
    profileView.style.display = "block";
    editProfile.style.display = "none";
  });

  // Cancel Edit (Go Back)
  cancelEditBtn.addEventListener("click", function () {
    profileView.style.display = "block";
    editProfile.style.display = "none";
  });

  // Close sidebar when clicking outside
  overlay.addEventListener("click", function () {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const voteNowBtn = document.getElementById("vote-now-btn");
  const voteSection = document.getElementById("vote-section");

  voteNowBtn.addEventListener("click", function (event) {
    event.preventDefault();
    voteSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const cards = document.querySelectorAll(".card");
  const totalCards = cards.length;
  let currentIndex = 0;

  // Clone the cards for infinite effect
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
  });

  const moveCarousel = () => {
    currentIndex++;
    carousel.style.transition = "transform 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${
      (100 / totalCards) * currentIndex
    }%)`;

    if (currentIndex === totalCards) {
      setTimeout(() => {
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
        currentIndex = 0;
      }, 500);
    }
  };

  setInterval(moveCarousel, 3000); // Change card every 3 seconds
});
