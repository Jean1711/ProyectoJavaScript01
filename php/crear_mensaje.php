<?php
$servername = "localhost"; // Cambia esto si tu servidor de base de datos es diferente
$username = "root";
$password = "";
$dbname = "sistema_puppyPets";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$fullname = $_POST['fullname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO mensajes (nombre_mensaje, telefono_mensaje, email_mensaje, descripcion_mensaje) VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $fullname, $phone, $email, $message);

if ($stmt->execute()) {
    echo "Mensaje guardado correctamente.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$stmt->close();
$conn->close();
?>
