<template>
    <v-app class="main">
        <div class="contain">
            <v-card
            elevation="2"
            class="card"
            >
            <v-list-item-title class="bienvenido headline mb-1">
                Bienvenido
            </v-list-item-title>
            <!-- BARRA COLOR -->

            <div id="barra"></div>
            <v-alert
            :value="alert"
            border="right"
            colored-border
            type="error"
            elevation="2"
            class="mx-5"
            transition="scale-transition"
            >
                {{message_alert}}
            </v-alert>
            <v-form
                ref="form"
                lazy-validation
                class="form"
            >
                <v-text-field
                v-model="user.email"
                :rules="emailRules"
                label="E-mail"
                required
                color="rgb(65, 65, 65)"
                ></v-text-field>
                <v-text-field
                v-model="user.password"
                type="password"
                :rules="passwordRules"
                label="Contraseña"
                required
                autocomplete="on"
                color="rgb(65, 65, 65)"
                ></v-text-field>
                <div class="container-2">
                    <v-checkbox
                        class="mx-0"
                        v-model="conect"
                        color="orange darken-3"
                    >
                    <template v-slot:label>
                        <div>
                            <p class="p">
                                Mantener conectado
                            </p>
                        </div>
                    </template>
                    </v-checkbox><p></p>
                    <a @click="forget_password">¿Olvidaste la contraseña?</a>
                </div>
                <v-btn class="mr-4 submit-button" @click="login(); validate()" >
                    Log In
                </v-btn>
            </v-form>
            <p id="registro_linea">¿No tienes una cuenta? <a id="registro_link"  @click="registrar" >Registrate</a></p>
            </v-card>
        </div>
        <v-dialog
        v-model="ciudadano"
        max-width="390"
        >
        <v-card class="card_dialog pt-6">
            <v-img
                class="mt-2"
                contain
                src="../assets/alertas.png"
                height="100"
            ></v-img>
            <v-card-title class="text_dialog headline">
               ¡Ups! Ha ocurrido un error
            </v-card-title>
            <v-card-text>
                Usa nuestra App Glopstra <br>
                Esta pagina es de uso exclusivo para usuarios de tipo gobierno o empresa.
            </v-card-text>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="#cd3330"
                class="text_dialog"
                text
                @click="ciudadano = false;"
            >
                Ok
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-app>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import {mapActions,mapState} from 'vuex';

export default {
  name: 'LogIn',
  components: {
    
  },
  data:()=>({
        ciudadano:false, 
        message_alert:'',
        conect:false,
        alert:false,
        user:{
            email:'',
            password:''
        },
        emailRules: [
            v => !!v || 'El email es requerido',
            v => /.+@.+\..+/.test(v) || 'Ingrese un email valido',
        ],
        passwordRules: [
            v => !!v || 'La contraseña es requerida',
        ],
    }),
    methods:{

        validate () {
            this.$refs.form.validate()
        },
        registrar() {
            this.$router.push('/Registro');
        },
        forget_password() {
            this.$router.push('/Recuperar_contrasena');
        },
        login(){
            let m_alert='';
            const path = 'http://160.153.253.91:3200/login';
            axios.post(path, this.user).then((result) => {
                console.log(result)
                if (result.data.results.Tusuario==='ciudadano') {
                    this.ciudadano=true;
                    this.user.email='';
                    this.user.password='';
                    this.conect=false;
                }else{
                    if(result.data.results.usuario==='conectado' && result.data.results.status){
                        localStorage.setItem('token', result.data.results.tokenbd);
                        this.alert=false;
                        localStorage.setItem('email',result.data.results.email);
                        if (this.conect==true) {
                            localStorage.setItem('conect','true');
                        }else{
                            localStorage.setItem('conect','false');
                        }

                        this.$router.push('/Account');
                    }else{
                        this.$router.push('/Codigo');
                    }
                }
            })
            .catch(function (error) {
                let err=JSON.parse(error.request.response).error
                console.log(err)
                if (err.message==='Contraseña incorrecta'){
                    m_alert='Contraseña incorrecta'
                }else if(err.message==="El usuario no esta registrado en el sistema"){
                    m_alert="El usuario no esta registrado en el sistema"
                }else{
                    m_alert='Ha ocurrido un error, por favor intentarlo más tarde'
                }
            })
            .then(() =>{
              if (m_alert!='') {
                    this.message_alert=m_alert
                    this.alert=true;
                }  
            });
            
            
            
        }
    }
}

</script>
<style scoped>
@font-face {
    font-family: "muli-black";
    src: url("../assets/Muli-Black.ttf");
}

@font-face {
    font-family: "gotham";
    src: url("../assets/Gotham-Bold.otf");
}
@font-face {
    font-family: "gotham_book";
    src: url("../assets/GothamBook.ttf");
}

    .main{
        background-image: url('../assets/descargas.png') !important;
        background-size: cover !important;
        padding: 10vh 7vh 0px 7vh;
        height: 100%;
        background-repeat: no-repeat !important;

        background-position: center;
    }
    .headline.bienvenido{
        font-size:2.5rem !important;
        color: rgb(65, 65, 65);
        font-family: "gotham" !important;
        text-align: center;
    }
    .card{
        font-family: "gotham";
        width:50%;
        padding: 3vw 0vh 0vh;
        height: 100%;
        border-radius: 20px 20px 20px 20px !important;
        -webkit-border-radius: 20px 20px 20px 20px !important;
        -moz-border-radius: 20px 20px 20px 20px !important;
        -ms-border-radius: 20px 20px 20px 20px !important;
        -o-border-radius: 20px 20px 20px 20px !important;  
    }
    #barra{
        width: 18%;
        height: 4px;
        margin: .7rem auto 2vw;
        background: linear-gradient( 90deg, #f9bf00, #cd3330 85%);
        border-radius: 50px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        -ms-border-radius: 50px;
        -o-border-radius: 50px;
    }
    .form{
        width: 60%;
        margin: 0px auto;
        height: fit-content;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .submit-button{
        background: linear-gradient(90deg, rgba(236,124,58,1) 0%, rgba(236,119,70,1) 16%, rgba(242,82,45,1) 72%);
        width: 100%;
        color: white !important;
        font-size: 16px;
        padding: 8px 40px;
        margin: 1% auto 2vw;
        box-shadow: 0px 0px 5px gray;
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -ms-border-radius: 8px;
        -o-border-radius: 8px;
        font-family: 'gotham';
    }.submit-button:hover{
        box-shadow: 0px 0px 5px black;
    }
    .container-2{
        margin-top:.2rem;
        font-family: 'gotham';
        display: flex;
        align-items:center;
        justify-content:center;
        margin-bottom: 0.5vw;
        font-size:.8rem !important;
    }
    .container-2 .p{
        font-size:.8rem !important;
    }
    .container-2 p, .container-2 a{
        
        margin: 0 auto;
        text-decoration: none !important;
    }
    .container-2 a:hover{
        text-decoration: none !important;
        color: #fa4e23;
    }
    .container-2 a{
        color: #F15831;
        text-align: center;
    }
    p{
        text-align: center;
        color:#BCBCBC;
        
    }
    p#registro_linea{
        font-size:.8rem;
        font-family: 'gotham';
        margin: 0 0 5vh !important;
    }
    p#registro_linea a#registro_link{
        text-decoration: none !important;
        color:#F15831;
        
    }
   
    @media (max-width: 1100px) {
    .main{
        padding: 0px; 
        background-image: url('../assets/contacto.png');
        }
    .main .card{
        width:96%;
        padding-top:7vh;
        margin: 8vh auto;
        height: 90%;
        border-radius: 20px 20px 20px 20px;
        -webkit-border-radius: 20px 20px 20px 20px;
        -moz-border-radius: 20px 20px 20px 20px;
        -ms-border-radius: 20px 20px 20px 20px;
        -o-border-radius: 20px 20px 20px 20px;
    }
    .card #barra{
        margin-bottom: 7vh;
    }
    .formRegistrar{
        width: 82%;
    }
    .form{
        width: 78%;
    }
    .container-2{
        margin: 5% 0 9%;
    }
    .container-2 p, .container-2 a, p#registro_linea, #qr{
        font-size:.8rem;
    }
    p#registro_linea{
        margin-top: 5%
    }
}

</style>