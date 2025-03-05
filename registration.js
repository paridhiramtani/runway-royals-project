document.getElementById("bookSlot").addEventListener("click", function () {
  document.getElementById("createAccountModal").style.display = "flex";
});

document.getElementById("createAccountForm").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("createName").value;
  const email = document.getElementById("createEmail").value;
  const password = document.getElementById("createPassword").value;

  // Validation check
  if (name && email && password) {
    // Handle form submission, e.g., send data to a server
    alert("Registration confirmed!");
    document.getElementById("createAccountModal").style.display = "none";
  } else {
    alert("Please fill in all required fields.");
  }
});

let menu = document.getElementById("nav-menu");
function toggleMenu() {
  menu.classList.toggle("show-menu");
}
