function apply_changes() {
    var textcolorredinput = document.getElementById("textcolorredinput").value;
    var textcolorgreeninput = document.getElementById("textcolorgreeninput").value;
    var textcolorblueinput = document.getElementById("textcolorblueinput").value;

    var bordercolorredinput = document.getElementById("bordercolorredinput").value;
    var bordercolorgreeninput = document.getElementById("bordercolorgreeninput").value;
    var bordercolorblueinput = document.getElementById("bordercolorblueinput").value;

    var borderwidthinput = document.getElementById("borderwidthinput").value;

    var tag = document.getElementById("paragraph");
    tag.style.backgroundColor = `rgb(${textcolorredinput},${textcolorgreeninput},${textcolorblueinput})`;
    tag.style.borderColor = `rgb(${bordercolorredinput},${bordercolorgreeninput},${bordercolorblueinput})`;
    tag.style.borderWidth = borderwidthinput
}

function verifyPasswords() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1 == password2 && password1.length >= 8 && password2.length >= 8) {
        alert("Passwords matched!");
    }
    else if (password1 != password2) {
        alert("Passwords do not match!");
    }
    else if (password1.length < 8 || password2.length < 8) {
        alert("Passwords are not at least 8 characters long!");
    }
}
