<?php
// password-protected-pdf.php

$correctPassword = "Anshul";  // Replace with your actual password

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $enteredPassword = $_POST["password"];

    if ($enteredPassword === $correctPassword) {
        // Password is correct, serve the PDF file
        header("Content-type: application/pdf");
        readfile("1.pdf");  // Replace with the actual path to your PDF
        exit();
    } else {
        // Incorrect password, display an error message
        echo "Incorrect password.";
    }
}
?>
