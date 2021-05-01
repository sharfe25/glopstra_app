<template>
    <v-app class="main">
        <div class="contain">
            <v-row no-gutters >
                <v-col
                    sm="6"
                    md="2"
                    
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
                                <v-list-item-title class="opcion_menu">Home</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    
                    <v-divider class="barra"></v-divider>

                    <v-list dense >
                        <v-list-item  @click="reports" class="border" :class="opcion_click_report">
                            <v-list-item-content>
                                <v-list-item-title class="opcion_menu">Reportes</v-list-item-title>
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
                    sm="6"
                    md="10"
                >
                    <a @click="logout" class="logout d-flex">
                        <img class="icon_logout" src="../assets/logOut.png">
                    </a>
                    
                    <div class="dashboard" :class="[ocultar_home,opcion_click_home]">
                        <Home/>
                    </div>
                    <div class="reports" :class="[ocultar_report,opcion_click_report]">
                        <Reportes/>
                    </div>
                    <div class="process" :class="[ocultar_process,opcion_click_process]">
                        <Proceso/>
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

export default {
  name: 'Account',
  components: {
    Home,
    Proceso,
    Reportes
    
  },
  data:()=>({
        name:'Sharon',
        opcion_click_home:'',
        opcion_click_report:'',
        opcion_click_process:'',
        opcion_click_config:'',
        ocultar_home:'',
        ocultar_config:'',
        ocultar_process:'',
        ocultar_report:'',
    }),
    methods:{
        dashboard(){
            this.opcion_click_home='opcion_click_home';
            this.opcion_click_report='';
            this.opcion_click_process='';
            this.opcion_click_config='';
            this.ocultar_config='ocultar';
            this.ocultar_process='ocultar';
            this.ocultar_report='ocultar';
        },
        reports(){
            this.opcion_click_report='opcion_click_report';
            this.opcion_click_home='';
            this.opcion_click_process='';
            this.opcion_click_config='';
            this.ocultar_home='ocultar';
            this.ocultar_config='ocultar';
            this.ocultar_process='ocultar';
        },
        process(){
            this.opcion_click_process='opcion_click_process';
            this.opcion_click_report='';
            this.opcion_click_home='';
            this.opcion_click_config='';
            this.ocultar_home='ocultar';
            this.ocultar_config='ocultar';
            this.ocultar_report='ocultar';
        },
        config(){
            this.opcion_click_config='opcion_click_config';
            this.opcion_click_report='';
            this.opcion_click_home='';
            this.opcion_click_process='';
            this.ocultar_home='ocultar';
            this.ocultar_process='ocultar';
            this.ocultar_report='ocultar';
        },
        logout(){
            let email= {email: localStorage.getItem('email')}
            const path = 'http://160.153.253.91:3200/logout';
            axios.post(path, email).then((result) => {
                console.log(result)
                if (result.data.resp==="exito") {
                    this.$router.push('/LogIn');
                    localStorage.removeItem('email')
                }
            })
            .catch((error) => {
                console.log(error);
            });
        
        }
        
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
.navigation_drawer{
    background: rgb(240,191,55);
    background: linear-gradient(148deg, rgba(240,191,55,1) 0%, rgba(209,68,62,1) 100%);
}
.avatar_g{
    margin-right: .3rem !important;
}
.glopstra{
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
    margin-left:0.3rem;
}
.opcion_click_home,.opcion_click_report,.opcion_click_process, .opcion_click_config{
    background-color: rgba(255, 255, 255, 0.39);
    color:rgba(209,68,62,1);
    display: inherit !important;
}
.opcion_click_home.border,.opcion_click_report.border,.opcion_click_process.border, .opcion_click_config.border{
    border-left: 5px solid #D1443E;
}
.opcion_click_home .opcion_menu,.opcion_click_report .opcion_menu,.opcion_click_process .opcion_menu, .opcion_click_config .opcion_menu{
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