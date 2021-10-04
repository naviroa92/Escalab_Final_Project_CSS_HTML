function ValidarDatos(){
    var name=document.getElementById('name');
    var phonenumber=document.getElementById('phonenumber');
    var email=document.getElementById('email');
    var info=document.getElementById('info');

    if(name.value == ''){
        name.classList.remove('success')
        name.classList.add('error');
    }else{
        name.classList.add('success');
        name.classList.remove('error')

    }

    if(phonenumber.value == ''){
        phonenumber.classList.remove('success')
        phonenumber.classList.add('error');
    }else{
        phonenumber.classList.remove('error')
        phonenumber.classList.add('success');

    }

    if(email.value == ''){
        email.classList.remove('success')
        email.classList.add('error');
    }else{
        email.classList.add('success');
        email.classList.remove('error')
    }

    if(info.value == ''){
        info.classList.remove('success')
        info.classList.add('error');
    }else{
        info.classList.add('success');
        info.classList.remove('error')
    }
}