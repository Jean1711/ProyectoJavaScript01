document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    let fullname = document.getElementById('fullname').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (fullname === '') {
        alert('Por favor, ingrese su nombre completo.');
        return;
    }

    if (phone === '' || isNaN(phone)) {
        alert('Por favor, ingrese un número de teléfono válido.');
        return;
    }

    if (email === '' || !validateEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    if (message === '') {
        alert('Por favor, escriba su mensaje.');
        return;
    }

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "../php/crear_mensaje.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(xhr.responseText);
            clearForm();
        }
    };
    let data = `fullname=${fullname}&phone=${phone}&email=${email}&message=${message}`;
    xhr.send(data);
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function clearForm() {
    document.getElementById('fullname').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
}
