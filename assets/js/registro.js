import { usuarios } from "./usuarios.js";

$(document).ready(function () {

    $('#btnEnviar').click(()=>{
        let existe = false;
        $('#labelUser').text('Usuario:');
        $('#labelPass').text('Contraseña: ');
        $('#labelConPass').text('Confirma contraseña: ');

        usuarios.forEach(i => {
            if (i.usuario == $('#user').val()) {
                existe = true;
                return existe;
            }
        });
        
        if (existe === true) {
            alert('El usuario ya existe');
            return;
        }
        
        if(existe === true){
            console.log("el usuario existe");
            return;
        }

        if($('#user').val()=== ''){
            $('#labelUser').text('Ingresa tu usuario!');
            $('#saludar').text('')
            return;
            
        }
        if($('#pass').val()=== ''){
            $('#labelPass').text('Ingresa tu contraseña!');
            $('#saludar').text('')  
            return;
        }
        if(  $('#conPass').val() !== $('#pass').val()){
            alert("Las contraseñas no coinciden!")
            return;
        }


        let user = $('#user').val();
        let pass = $('#pass').val();

        $('#saludar').text(`Bienvenido: ${user}`);


        let nuevoUsuario = {
          usuario:user,
          password:pass  
        };

        usuarios.push(nuevoUsuario);
        console.table(usuarios);

    })

});