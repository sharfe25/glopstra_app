<template>
    <v-app class="main" >
        <div class="contain" >
            <v-card
            elevation="2"
            class="card"
            >
                <v-list-item-title class="olvide headline mb-1 ">
                    Recuperar Contraseña
                </v-list-item-title>
                
                <!-- BARRA COLOR -->
                <div id="barra"></div>

                <v-card-subtitle class="text-center mx-3">
                    Para restablecer la contraseña, registra la siguiente información:
                </v-card-subtitle>
                <v-form
                    ref="form"
                    lazy-validation
                    class="form"
                >
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                    color="rgb(65, 65, 65)"
                    ></v-text-field>
                    
                    <v-btn class="mr-4 submit-button" @click="send_code" >
                        Recuperar
                    </v-btn>

                </v-form>
            </v-card>
        </div>
    </v-app>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: 'Recuperar_contrasena',
  components: {
    
  },
  data:()=>({
        email:'',
        number:'',
        emailRules: [
            v => !!v || 'El email es requerido',
            v => /.+@.+\..+/.test(v) || 'Ingrese un email valido',
        ],
    }),
    methods:{
        send_code() {
            let email={}
            if(localStorage.getItem('email')!=undefined){
                email={email:`${this.email}`}
                localStorage.setItem('email',this.email)
            }
            const path = 'http://160.153.253.91:3200/codeupdate';
            axios.post(path, email).then((result) => {
                
            })
            .catch((error) => {
                console.log(error);
            });
            this.$router.push('/Codigo');
            localStorage.setItem('code','cambio contrasena');
        },
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
        background-image: url('../assets/contacto.png') !important;
        background-size: cover !important;
        padding: 20vh 7vh 0px 7vh;
        height: 100%;
        background-repeat: no-repeat !important;

        background-position: center;
    }
    .headline.olvide{
        font-size:2rem !important;
        color: rgb(65, 65, 65);
        font-family: "gotham" !important;
        text-align: center;
        overflow: inherit;
    }
    .card{
        margin:auto;
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
        margin: .7rem auto 1rem;
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
        font-size: .9rem;
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
    .card_dialog{
        border-radius: 10px  !important;
    }

    @media (max-width: 768px) {
    .main{
        padding: 0px; 
        background-image: url('../assets/contacto.png');
        }
    .main .card{
        width:96%;
        padding:3vh 0 2vh;
        margin: 8vh auto;
        height: 90%;
        border-radius: 20px 20px 20px 20px;
        -webkit-border-radius: 20px 20px 20px 20px;
        -moz-border-radius: 20px 20px 20px 20px;
        -ms-border-radius: 20px 20px 20px 20px;
        -o-border-radius: 20px 20px 20px 20px;
    }
    .card #barra{
        margin-bottom: 1vh;
    }
    .headline.olvide{
        font-size:1.7rem !important;
        
    }
    .formRegistrar{
        width: 82%;
    }
    
}

</style>