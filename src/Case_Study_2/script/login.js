function login() {
    let email = document.getElementById('floatingInput').value;
    let password = document.getElementById('floatingPassword').value;

    if (!email || !password) {
        alert('Need to input email or password!')
    }

    if (email === 'admin@admin.com' && password === '123') {
        alert('Login successfully!');
        window.close();
        window.open("index.html");
    } else {
        alert('Wrong email or password. Please input again!');
    }

}