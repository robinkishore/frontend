function validate() {
    var username1 = document.getElementById("email").value
    var password1 = document.getElementById("password").value

    if (username1 == "") {
        alert("Enter the Email");
        document.form.email.focus();
        return false;
    }
    if (!isNaN(username1)) {
        alert("Enter Alphabets only");
        document.form.email.value = "";
        document.form.email.focus();
        return false;
    }
    if (password == "") {
        alert("Enter atleast 6 characters");
        document.form.password.focus();
        return false;
    }
    return true;
}