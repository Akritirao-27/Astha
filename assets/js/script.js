function showData(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
    const note = document.getElementById("note").value;

    document.getElementById("message").innerText =
        `Hello ${name}! You are ${age} years old from ${city}.`;
}
