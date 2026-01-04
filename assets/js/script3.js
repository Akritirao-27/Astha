function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
}

function login() {
    alert("Login button clicked!");
}

function subscribe(event) {
    event.preventDefault();
    const email = document.getElementById("subscribeEmail").value;
    alert("Subscribed with: " + email);
}
