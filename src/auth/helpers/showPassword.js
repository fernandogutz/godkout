export const showPassword = () => {
    const eye = document.querySelector('.eyeBtn');
    const inputPassword = document.querySelector('#password');

    console.log(eye);
    console.log(inputPassword.type);

    if(inputPassword.type === 'password') {
        console.log('TYPE: PASS');
        inputPassword.type = 'text';
        eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';

    } else {
        inputPassword.type = 'password';
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>';
        console.log('TYPE: TEXT');


    }


}