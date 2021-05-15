<template>
  <v-app class="main">
        <div class="contain mb-2">
            <v-card
            elevation="2"
            class="card"
            >
            <v-list-item-title class="registro headline mb-1">
                Registro
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
                class='input_p'
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

                <v-text-field
                v-model="password_dos"
                type="password"
                :rules="passwordRules"
                label="Repita la Contraseña"
                required
                autocomplete="on"
                color="rgb(65, 65, 65)"
                ></v-text-field>

                <v-autocomplete
                    class="mr-3"
                    :items="paises_name"
                    label="País:"
                    v-model="user.country"
                    name="pais"
                    :rules="paisRules"
                    clearable
                    required
                    @change="states"
                ></v-autocomplete>

                <v-autocomplete
                    class="mr-3"
                    :items="estados_name"
                    label="Estado:"
                    v-model="user.state"
                    name="estado"
                    :rules="estadoRules"
                    clearable
                    required
                    @change="citys"
                ></v-autocomplete>

                <v-autocomplete
                    class="mr-3"
                    :items="ciudades_name"
                    label="Ciudad:"
                    v-model="user.city"
                    name="ciudad"
                    :rules="ciudadRules"
                    clearable
                    required
                ></v-autocomplete>

                <v-text-field
                v-model="user.phone"
                :rules="telefonoRules"
                label="Teléfono"
                required
                type="number"
                
                color="rgb(65, 65, 65)"
                ></v-text-field>

                <div class="container-2">
                    <p>Tipo de usuario: </p>
                    <v-radio-group
                    v-model="user.Tusuario"
                    row
                    :rules="tipoURules"
                    class="d-flex justify-space-around mt-0"
                    required
                    >
                        
                        <v-radio
                            label="Ciudadano"
                            value="ciudadano"
                            color="#F94E2D"
                            class="mr-7"
                        ></v-radio>
                        <v-radio
                            label="Empresa"
                            value="empresa"
                            color="red"
                            class="ml-7"
                        ></v-radio>
                    </v-radio-group>
                </div>
                <v-btn class="mr-4 submit-button" :loading="loadingButton" @click="registrar" >
                    Registrarse
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
    name: 'Registro',
    components: {
        
    },
    data:()=>({
        message_alert:'',
        loadingButton: false,
        alert:false,
        password_dos:'',
        user:{
            email:'',
            country:'',
            state:'',
            city:'',
            Tusuario:'',
            phone:'',
            password:'',
        },
        paises_name:[],
        ciudades_name:[],
        estados_name:[],
        paises:[],
        ciudades:[],
        estados:[],
        headers:{
                'Content-Type': 'application/json'
        },
        emailRules: [
            v => !!v || 'El email is requerido',
            v => /.+@.+\..+/.test(v) || 'Ingrese un email valido',
        ],
        passwordRules: [
            v => !!v || 'La contraseña es requerida',
            v => (v && v.length >= 8) || 'Minimo 8 caracteres',
            v => /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(v) || 'La contraseña debe contener al menos una letra minúscula, un número y una letra mayúscula'
        ],
        telefonoRules: [
            v => !!v || 'El teléfono es requerido',
            v => (v && v.length >= 8) || 'Minimo 8 caracteres',
            v => /(?=.*\d)/.test(v) || 'La contraseña debe contener al menos una letra minúscula, un número y una letra mayúscula'
        ],
        paisRules: [
            v => !!v || 'El pais es requerido',
        ],
        estadoRules: [
            v => !!v || 'El estado es requerido',
        ],
        ciudadRules: [
            v => !!v || 'La ciudad es requerido',
        ],
        tipoURules: [
            v => !!v || 'El tipo de usuario es requerido',
        ],
        
    }),
    methods:{

        registrar(){
            let newUser={}
            let usuario_exist=''
            if(this.user.password===this.password_dos && this.user.T_usuario!=''){
                
                newUser={
                    email:`${this.user.email}`,
                    country:`${this.user.country}`,
                    state:`${this.user.state}`,
                    city:`${this.user.city}`,
                    Tusuario:`${this.user.Tusuario}`,
                    phone:parseInt(this.user.phone),
                    password:`${this.user.password}`,
                }
                console.log(newUser)
                const path = 'http://160.153.253.91:3200/singup';
                axios.post(path, newUser).then((result) => {
                    localStorage.setItem('email',this.user.email)
                    localStorage.setItem('code','registro')
                    this.$router.push('/Codigo');
                    this.alert=false;
                    this.loadingButton=false;
                    this.user.email='';
                    this.user.password='';
                    this.user.phone='';
                    this.user.T_usuario='';
                    this.user.country='';
                    this.user.state='';
                    this.user.city='';
                    
                })
                .catch((error) => {
                    let err=JSON.parse(error.request.response)
                    if (err.usuario==='Usuario ya existente') {
                        usuario_exist='Usuario ya existente'
                    }
                    
                })
                .then(()=> {
                    if (usuario_exist!='') {
                        this.message_alert=usuario_exist;
                        this.alert=true;
                    } else{
                        this.alert=false;
                    }
                });
                
            }
            if(this.user.password!=this.password_dos){
                this.message_alert='Las contraseñas no coinciden';
                this.alert=true;
                
            }
            else if(this.user.T_usuario==''){
                this.message_alert='El tipo de usuario es requerido'
                this.alert=true;
            }else{
                this.alert=false;
            }
        },
        countries(){
            const path = 'http://160.153.253.91:3200/contries';
            axios.get(path).then((respuesta) => {
                // console.log(respuesta)
                this.paises= respuesta.data
                this.paises.forEach(pais => {
                    this.paises_name.push(pais.name)
                });
            })
            .catch((error) => {
                console.log(error)
            })
        },
        states(){
            let pais=''
            pais = this.paises.filter((p)=>{
                if(p.name==this.user.country){
                    return p;
                }
                return false;
            });
            if(pais!=''){
                pais={
                    country: pais[0].id
                }
            }
            const path = 'http://160.153.253.91:3200/states';
            axios.post(path, pais).then((result) => {
                this.estados=result.data
                this.estados.forEach(estado=>{
                    this.estados_name.push(estado.name)
                })
            })
            .catch((error) => {
                console.log(error);
            });
        },
        citys(){
            let estado=''
            estado = this.estados.filter((p)=>{
                if(p.name==this.user.state){
                    return p;
                }
                return false;
            });
            if(estado!=''){
                estado={
                    states: estado[0].id
                }
            }
            const path = 'http://160.153.253.91:3200/cities';
            axios.post(path, estado).then((result) => {
                this.ciudades=result.data
                this.ciudades.forEach(ciudad=>{
                    this.ciudades_name.push(ciudad.name)
                })
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },
    created () {
        this.countries();
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
    .headline.registro{
        font-size:2.5rem !important;
        color: rgb(65, 65, 65);
        font-family: "gotham" !important;
        text-align: center;
        overflow: inherit;
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
        margin-top:1rem;
        font-family: 'gotham';
        display: flex;
        align-items:center;
        justify-content:center;
        margin-bottom: .5vw;
        font-size:1rem;
        flex-direction:column;
    }
    .container-2 p, .container-2 a{
        
        margin-right:  auto;
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
    }
    p#registro_linea a#registro_link{
        text-decoration: none !important;
        color:#F15831;
        
    }
    #qr{
        margin: 8vh 0 5vh !important;
        font-size:.8rem;
        font-family: 'gotham';
    }
    @media (max-width: 768px) {
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
