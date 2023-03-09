const email = 'emerson@ferreira.com.br';


console.log(email);
console.log('O seu e-mail é: + email');
console.log(`O seu e-mail é: + ${email}`);


document.getElementById('btn-submit').addEventListener('click' , e=> {
    console.log('O botao foi clicado');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('o mause esta sobre o formulario.');

});

document.querySelector('#form-login').addEventListener('mouseleave', e=> {

    console.log('o mouse esta forra do formulario');

});

document.querySelector('#form-tlogin'). addEventListener('submi', e=> {

    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;


    let json =  {

        email,
        password
    };

    console.log(json);

    let stringJSON = JSON.stringify(json);

    console.log(stringJSON);

    let jsonParse = JSON.parse(stringJSON);

    console.log(jsonParse);
    console.log(jsonParse.password);

});