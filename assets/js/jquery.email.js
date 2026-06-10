document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre  = document.getElementById("name").value;
    const email   = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;

    // Validación básica
    if (!nombre || !email || !mensaje) {
        alert("Please fill in all fields before sending.");
        return;
    }
    const me = alert("I received your message. We'll get in touch!! :) ");
    // Construir el enlace mailto
    const mailtoLink = `mailto:tucorreo@gmail.com`
        + `?subject=Portfolio contact from ${encodeURIComponent(nombre)}`
        + `&body=Name: ${encodeURIComponent(nombre)}`
        + `%0AEmail: ${encodeURIComponent(email)}`
        + `%0A%0AMessage:%0A${encodeURIComponent(mensaje)}`;

    window.location.href = mailtoLink;
});