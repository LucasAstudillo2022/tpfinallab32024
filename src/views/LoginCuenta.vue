<template>
    <form @submit.prevent="onSubmit">
        <label id="cuentaUsuario">Usuario: </label> <input id="usuario"> <br/>
        <label id="contraseniaUsuario">Contraseña: </label><input type="text" id="contrasenia"><br>
        <input type="submit" value="Submit">


    </form>

</template>

<script>
import router from '@/router';

export default{
     data()
     {
        return{
            usuario: "",
            contrasenia:""

        }

     },
     methods:{
        onSubmit(){
        if(this.usuario != " " || this.contrasenia != "")
        {
            localStorage.setItem("usuario", this.usuario)
            localStorage.setItem("contrasenia", this.contrasenia)
            router.replace("/home")
            debugger
            
        }else{ //ver como muestro mensaje de error
            alert("Ingrese algo")
            return
        }
        
        
        
        

        
        }

     }
    }

</script>