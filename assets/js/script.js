// Navbar toggle for mobile
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
}

// Login button alert
function login() {
    alert("Login clicked!");
}

// Form submission
function submitForm(event) {
    event.preventDefault();
    alert("Form submitted successfully!");
}

// Footer subscribe
function subscribe(event) {
    event.preventDefault();
    const email = document.getElementById("subscribeEmail").value;
    alert("Subscribed with: " + email);
    document.getElementById("subscribeEmail").value = "";
}