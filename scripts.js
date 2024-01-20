// scripts.js

function submitPassword() {
    const password = document.getElementById("password").value;
    
    // Send the password to the server for validation
    fetch("password-protected-pdf.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `password=${password}`,
    })
    .then(response => {
        if (response.ok) {
            // Password is correct, show the PDF
            document.getElementById("passwordForm").style.display = "none";
            document.getElementById("documentFrame").src = "C:\Users\anshu\Downloads\alice_python\Demo_website\password-protected-pdf.php";
        } else {
            // Incorrect password, display an error message
            alert("Incorrect password.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
