<template>
    <v-app class="main">
        
        <div class="contain">
            <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            class="navigation_drawer"
            >
            <template v-slot:prepend>
                <v-list-item class="item_glopstra" two-line >
                    <v-list-item-avatar class="avatar_g">
                        <img  src="../assets/app.png">
                    </v-list-item-avatar>

                    <v-list-item-content class="prueba_txt">
                        <v-list-item-title class="glopstra">Glopstra</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <v-list-item class="d-flex justify-center" >
                <img class="user_img" src="../assets/user.png">
                
            </v-list-item>
            <v-list-item class="d-flex justify-center" >
                <v-list-item-content>
                    <v-list-item-title class="d-flex justify-center glopstra">{{name}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            
            <v-divider class="barra"></v-divider>
            
            <v-list dense >
                <v-list-item @click="dashboard" class="border" :class="opcion_click_home">
                    <v-list-item-content>
                        <v-list-item-title class="opcion_menu">Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            
            <v-divider class="barra"></v-divider>

            <v-list dense >
                <v-list-item  @click="reports" class="border" :class="opcion_click_report">
                    <v-list-item-content>
                        <v-list-item-title class="opcion_menu">Denuncias</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-divider class="barra"></v-divider>

            <v-list dense >
                <v-list-item  @click="process" class="border" :class="opcion_click_process">
                    <v-list-item-content>
                        <v-list-item-title class="opcion_menu">Procesos de atención</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                
            </v-list>

            <v-divider class="barra"></v-divider>

            <v-list dense >
                <v-list-item  @click="experiences" class="border" :class="opcion_click_experiences">
                    <v-list-item-content>
                        <v-list-item-title class="opcion_menu">Experiencias</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                
            </v-list>

            <v-divider class="barra"></v-divider>
            
            <v-list dense >
                        <v-list-item  @click="contact" class="border" :class="opcion_click_contact">
                            <v-list-item-content>
                                <v-list-item-title class="opcion_menu">PQRS</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        
                    </v-list>

                    <v-divider class="barra"></v-divider>
            
            <v-list dense >
                <v-list-item  @click="config" class="border"  :class="opcion_click_config">
                    
                    <v-list-item-content>
                        <v-list-item-title class="opcion_menu config">Configuración</v-list-item-title>
                    </v-list-item-content>
                    
                </v-list-item>
                
            </v-list>
            
            </v-navigation-drawer>
            <v-row no-gutters class="mx-sm-3 mx-md-0">
                <v-col
                    sm="6"
                    md="2" 
                    v-show="!movil"
                >
                    <v-navigation-drawer
                    absolute
                    permanent
                    class="navigation_drawer"
                    >
                    <template v-slot:prepend>
                        <v-list-item class="item_glopstra" two-line >
                            <v-list-item-avatar class="avatar_g">
                                <img  src="../assets/app.png">
                            </v-list-item-avatar>

                            <v-list-item-content class="prueba_txt">
                                <v-list-item-title class="glopstra">Glopstra</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <v-list-item class="d-flex justify-center" >
                        <img class="user_img" src="../assets/user.png">
                        
                    </v-list-item>
                    <v-list-item class="d-flex justify-center" >
                        <v-list-item-content>
                            <v-list-item-title class="d-flex justify-center glopstra">{{name}}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    
                    <v-divider class="barra"></v-divider>
                    
                    <v-list dense >
                        <v-list-item @click="dashboard" class="border" :class="opcion_click_home">
                            <v-list-item-content>
                                <v-list-item-title class="opcion_menu">Inicio</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    
                    <v-divider class="barra"></v-divider>

                    <v-list dense >
                        <v-list-item  @click="reports" class="border" :class="opcion_click_report">
                            <v-list-item-content>
                                <v-list-item-title class="opcion_menu">Denuncias</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>

                    <v-divider class="barra"></v-divider>

                    <v-list dense >
                        <v-list-item  @click="process" class="border" :class="opcion_click_process">
                            <v-list-item-content>
                                <v-list-item-title class="opcion_menu">Procesos de atención</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        
                    </v-list>

                    <v-divider class="barra"></v-divider>

                    <v-list dense >
                        <v-list-item  @click="experiences" class="border" :class="opcion_click_experiences">
                            <v-list-item-content>
                                <v-list-item-title class="opcion_menu">Experiencias</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        
                    </v-list>

                    <v-divider class="barra"></v-divider>

                    <v-list dense >
                        <v-list-item  @click="contact" class="border" :class="opcion_click_contact">
                            <v-list-item-content>
                                <v-list-item-title class="opcion_menu">PQRS</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        
                    </v-list>

                    <v-divider class="barra"></v-divider>
                    
                    <template v-slot:append>
                        <v-list dense >
                        <v-list-item  @click="config" class="border"  :class="opcion_click_config">
                            <v-list-item-icon class="avatar_g">
                                <img class="icon_config" src="../assets/config.png">
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title class="opcion_menu config">Configuración</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        
                    </v-list>
                    </template>
                    </v-navigation-drawer>
                </v-col>
                <v-col
                    sm="12"
                    md="10"
                >
                    <v-row no-gutters class="mx-sm-3 mx-md-0" :class="menu_movil?'header_movil':''">
                        <v-col sm="6" class="mx-0 d-flex" v-if="menu_movil">
                            <a  class="menu_movil" @click.stop="drawer = !drawer"> 
                                <img class="icon_menu_movil" src="../assets/icons/menu.png">   
                            </a>
                            <p class="glopstra_movil">Glopstra</p>
                        </v-col>
                        <v-col sm="6" md="12" class="mx-0">
                           <a @click="logout" v-if="!menu_movil" class="logout d-flex"> 
                                <img class="icon_logout" src="../assets/logouts/logOut.png">
                            </a> 
                            <a @click="logout" v-if="menu_movil" class="logout d-flex"> 
                                <img class="icon_logout_movil" src="../assets/logouts/logout_movil.png">
                            </a> 
                        </v-col>
                    
                    </v-row>
                    
                    <div class="dashboard" :class="[ocultar_home,opcion_click_home]">
                        <Home/>
                    </div>
                    <div class="reports" :class="[ocultar_report,opcion_click_report]">
                        <Reportes/>
                    </div>
                    <div class="process" :class="[ocultar_process,opcion_click_process]">
                        <Proceso/>
                    </div>
                    <div class="experiences" :class="[ocultar_experiences,opcion_click_experiences]">
                        <Experiencias/>
                    </div>
                    <div class="contact" :class="[ocultar_contact,opcion_click_contact]">
                        <Contact/>
                    </div>
                    <div class="config" :class="[ocultar_config,opcion_click_config]">
                        
                    </div>
                </v-col>
            </v-row>
        </div>
    </v-app>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import Home from '../components/Home.vue';
import Proceso from '../components/Proceso.vue';
import Reportes from '../components/Reportes.vue';
import Experiencias from '../components/Experiencias.vue';
import Contact from '../components/Contact.vue';

export default {
  name: 'Account',
  components: {
    Home,
    Proceso,
    Reportes,
    Experiencias,
    Contact,
  },
  data:()=>({
        drawer:false,
        menu_movil:false,
        name:'',
        opcion_click_home:'',
        opcion_click_report:'',
        opcion_click_process:'',
        opcion_click_config:'',
        opcion_click_experiences:'',
        opcion_click_contact:'',
        ocultar_home:'',
        ocultar_config:'',
        ocultar_process:'',
        ocultar_report:'',
        ocultar_experiences:'',
        ocultar_contact:'',
    }),
    methods:{
        dashboard(){
            this.opcion_click_home='opcion_click_home';
            this.opcion_click_experiences='';
            this.opcion_click_report='';
            this.opcion_click_process='';
            this.opcion_click_contact='';
            this.opcion_click_config='';
            this.ocultar_config='ocultar';
            this.ocultar_process='ocultar';
            this.ocultar_report='ocultar';
            this.ocultar_experiences='ocultar';
            this.ocultar_contact='ocultar';
        },
        reports(){
            this.opcion_click_report='opcion_click_report';
            this.opcion_click_experiences='';
            this.opcion_click_home='';
            this.opcion_click_process='';
            this.opcion_click_config='';
            this.opcion_click_contact='';
            this.ocultar_home='ocultar';
            this.ocultar_config='ocultar';
            this.ocultar_process='ocultar';
            this.ocultar_experiences='ocultar';
            this.ocultar_contact='ocultar';
        },
        process(){
            this.opcion_click_process='opcion_click_process';
            this.opcion_click_experiences='';
            this.opcion_click_report='';
            this.opcion_click_home='';
            this.opcion_click_config='';
            this.opcion_click_contact='';
            this.ocultar_home='ocultar';
            this.ocultar_config='ocultar';
            this.ocultar_report='ocultar';
            this.ocultar_experiences='ocultar';
            this.ocultar_contact='ocultar';
        },
        experiences(){
            this.opcion_click_experiences='opcion_click_experiences';
            this.opcion_click_process='';
            this.opcion_click_report='';
            this.opcion_click_home='';
            this.opcion_click_config='';
            this.opcion_click_contact='';
            this.ocultar_home='ocultar';
            this.ocultar_config='ocultar';
            this.ocultar_report='ocultar';
            this.ocultar_process='ocultar'; 
            this.ocultar_contact='ocultar';
        },
        contact(){
            this.opcion_click_contact='opcion_click_contact';
            this.opcion_click_experiences='';
            this.opcion_click_process='';
            this.opcion_click_report='';
            this.opcion_click_home='';
            this.opcion_click_config='';
            this.ocultar_home='ocultar';
            this.ocultar_config='ocultar';
            this.ocultar_report='ocultar';
            this.ocultar_process='ocultar';
            this.ocultar_experiences='ocultar';
        },
        config(){
            this.opcion_click_config='opcion_click_config';
            this.opcion_click_experiences='';
            this.opcion_click_report='';
            this.opcion_click_home='';
            this.opcion_click_process='';
            this.opcion_click_contact='';
            this.ocultar_home='ocultar';
            this.ocultar_process='ocultar';
            this.ocultar_report='ocultar';
            this.ocultar_experiences='ocultar';
            this.ocultar_contact='ocultar';
        },
        logout(){
            let email= {email: localStorage.getItem('email')}
            const path = 'http://160.153.253.91:3200/logout';
            axios.post(path, email).then((result) => {
                if (result.data.resp==="exito") {
                    localStorage.removeItem('email')
                    localStorage.removeItem('token')
                    this.$router.push('/LogIn');
                    
                }
            })
            .catch((error) => {
                console.log(error);
            });
        
        },
    },
    computed:{
        movil() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': this.menu_movil=true; return true
                case 'sm':this.menu_movil=true; return true
                case 'md':this.menu_movil=false; return false
                case 'lg':this.menu_movil=false; return false
                case 'xl':this.menu_movil=false; return false
            }
        },
    },
    mounted(){
        this.dashboard();
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
    background-color: #EEEEEE  !important;
}

.menu_movil{
    height: 1.5rem;
    margin:.5rem 1rem;
}
.navigation_drawer{
    
    background: rgb(240,191,55);
    background: linear-gradient(148deg, rgba(240,191,55,1) 0%, rgba(209,68,62,1) 100%);
    
}
.header_movil{
    background: rgb(240,191,55);
    background: linear-gradient(148deg, rgba(240,191,55,1) 0%, rgba(209,68,62,1) 100%);
    margin-bottom: 1rem;
}
.avatar_g{
    margin-right: .3rem !important;
}
.icon_logout_movil{
    height: 1.3rem !important;
    margin-right: .5rem;
    margin-top:.9rem;
}
.glopstra_movil{
    margin: .2rem 0 !important;
}
.glopstra, .glopstra_movil{
    font-family:"gotham";
    color:white;
    font-size:1.8rem;
}
.item_glopstra{
    margin-left:1.3rem !important;
}
.barra{
    width: 10rem;
    margin:0 auto;
    background-color: #ffffff8a;
}
.user_img{
    width: 5.5rem;
    margin-top:1rem;
}
.opcion_menu{
    color:white;
    margin-left:2.5rem;
}
.opcion_menu.config{
    color:white;
    margin-left:2.5rem;
}
.opcion_click_home,.opcion_click_report,.opcion_click_process, .opcion_click_config, .opcion_click_experiences,.opcion_click_contact{
    background-color: rgba(255, 255, 255, 0.39);
    color:rgba(209,68,62,1);
    display: inherit !important;
}
.opcion_click_home.border,.opcion_click_report.border,.opcion_click_process.border, .opcion_click_config.border,.opcion_click_experiences.border,.opcion_click_contact.border{
    border-left: 5px solid #D1443E;
}
.opcion_click_home .opcion_menu,.opcion_click_report .opcion_menu,.opcion_click_process .opcion_menu, .opcion_click_config .opcion_menu, .opcion_click_experiences .opcion_menu, .opcion_click_contact .opcion_menu{
    padding-top: .2rem;
    color:rgb(204, 49, 44);
}
.ocultar{
    display: none;
}

.icon_config{
    margin-top: .1rem;
    height: 1.2rem;
}
.logout{
    justify-content: flex-end !important;
}

.logout .icon_logout{
    height: 3rem;
}

</style>