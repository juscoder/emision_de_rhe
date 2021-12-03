
$(document).ready(function() {
    
    $("#idselect").change(function() {
        var name = $("#idselect").val();
        $(".container2").hide();
        $("."+name).show();

    })
})

function valida(f){

    var opciones = document.getElementById('idselect').value;
    var ingreso = document.getElementById('dni').value;
    var ingresox = document.getElementById('carnet').value;
    var ingreso2 = document.getElementById('ruc').value;
    var ingreso3 = document.getElementById('pasaporte').value;
    

    var ok= true;
    var msg = '';

    if(opciones == 'div3'){
        if(!/^([0-9])*$/.test(f.elements['dni'].value))
        {
            //Estos son para el Sweet Alert popup
            /* swal("Error", "Los datos ingresados no son numeros, Ingrese numeros correctos", "error"); */
           
            msg="Los datos ingresados no son numeros, Ingrese numeros correctos";
            alertify.error(msg);
            f.elements['dni'].value = '';
            ok = false
        }
        else{
            if(f.elements['dni'].value.length >0 && f.elements['dni'].value.length != 8)
            {
                /* swal("Error", "El DNI tiene que tener 8 digitos", "error"); */

                msg = "El DNI tiene que tener 8 digitos";
                alertify.error(msg);
                ok = false;
            }
            
        }
       
    }

    if(opciones == 'div4'){
        if(!/^([0-9])*$/.test(f.elements['carnet'].value))
        {
            /* swal("Los datos ingresados no son numeros, Ingrese numeros correctos", "error"); */
            msg="Los datos ingresados no son numeros, Ingrese numeros correctos";
            alertify.error(msg);
            f.elements['carnet'].value = '';
            ok = false
        }
        else{
            if(f.elements['carnet'].value.length >0 && f.elements['carnet'].value.length !=12)
            {
                /* swal("El CARNET tiene que tener 12 digitos", "error"); */
                msg = "El CARNET tiene que tener 12 digitos";
                alertify.error(msg);
                ok = false;
            }
        }
    }
    if(opciones == 'div5'){
        if(!/^([0-9])*$/.test(f.elements['ruc'].value))
        {
            /* swal("Los datos ingresados no son numeros, Ingrese numeros correctos", "error"); */
            msg="Los datos ingresados no son numeros, Ingrese numeros correctos";
            alertify.error(msg);
            f.elements['ruc'].value = '';
            ok = false
        }
        else{
            if(f.elements['ruc'].value.length >0 && f.elements['ruc'].value.length !=11)
            {
                /* swal("El RUC tiene que tener 11 digitos", "error"); */
                msg = "El RUC tiene que tener 11 digitos";
                alertify.error(msg);
                ok = false;
            }
        }
    }
    if(opciones == 'div6'){
        if(!/^([0-9])*$/.test(f.elements['pasaporte'].value))
        {
            /* swal("Los datos ingresados no son numeros, Ingrese numeros correctos", "error"); */
            msg="Los datos ingresados no son numeros, Ingrese numeros correctos";
            alertify.error(msg);
            f.elements['pasaporte'].value = '';
            ok = false
        }
        else{
            if(f.elements['pasaporte'].value.length >0 && f.elements['pasaporte'].value.length !=12)
            {
                /* swal("El PASAPORTE tiene que tener 12 digitos", "error"); */
                msg = "El PASAPORTE tiene que tener 12 digitos";
                alertify.error(msg);
                ok = false;
            }
        }
    }

    if(ok == false)      
    return ok;
    
}
