document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const loginMessage = document.getElementById("login-message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aquí debes implementar la lógica de autenticación.
        // Por simplicidad, este ejemplo solo muestra un mensaje de error.
        if (username === "usuario" && password === "contraseña") {
            loginMessage.textContent = "Inicio de sesión exitoso. Redirigiendo...";
            setTimeout(function () {
                window.location.href = "dashboard.html"; // Redirige a una página de dashboard o perfil.
            }, 2000); // Redirige después de 2 segundos (puedes ajustar este valor).
        } else {
            loginMessage.textContent = "Nombre de usuario o contraseña incorrectos.";
        }
    });
});
