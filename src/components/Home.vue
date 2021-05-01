<template>
    <v-app class="main">
        <div class="contain">
            <h1>Dashboard</h1>
            <div class="contain_dashboard" >
                <v-row no-gutters justify="space-around">
                    <v-col
                        cols="12"
                        sm="12"
                        md="3"
                    >
                        <v-card
                        class="card_datos gradiente pl-4 pa-2"
                        outlined
                        tile
                        elevation="4"
                        >
                        <v-row no-gutters>
                            <v-col
                                sm="8"
                            >
                                <div class="overline mb-4">
                                    Datos 
                                </div>
                            </v-col>
                            <v-col
                                sm="4"
                                class="d-flex col"
                            >
                                <img class="icon_barras mt-1 mr-3 icon" src="../assets/barras.png">
                            </v-col>
                        </v-row>
                        
                        <v-card-text class="headline font-weight-bold white--text text-center mt-4">
                            1212121212
                        </v-card-text>

                        <v-list-item-content>
                            <v-list-item-title>
                                <img class="icon_arrow icon mr-1" src="../assets/up_w.png">
                                484
                            </v-list-item-title>
                        </v-list-item-content>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="12"
                        md="3"
                        
                    >
                        <v-card
                        class="card_datos pl-4 pa-2"
                        outlined
                        tile
                        elevation="4"
                        >
                        <v-row no-gutters>
                            <v-col
                                sm="8"
                            >
                                <div class="overline mb-4">
                                    Datos 
                                </div>
                            </v-col>
                            <v-col
                                sm="4"
                                class="d-flex col"
                            >
                                <img class=" icon mt-1 mr-3" src="../assets/view.png">
                            </v-col>
                        </v-row>
                        
                        <v-card-text class="headline font-weight-bold  text-center mt-4">
                            1212121212
                        </v-card-text>

                        <v-list-item-content>
                            <v-list-item-title>
                                <img class="icon_arrow icon mr-1" src="../assets/down.png">
                                484
                            </v-list-item-title>
                        </v-list-item-content>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        sm="12"
                        md="3"
                    >
                        <v-card
                        class="card_datos  pl-4 pa-2"
                        outlined
                        tile
                        elevation="4"
                        >
                        <v-row no-gutters>
                            <v-col
                                sm="8"
                            >
                                <div class="overline mb-4">
                                    Datos 
                                </div>
                            </v-col>
                            <v-col
                                sm="4"
                                class="d-flex col"
                            >
                                <img class=" mt-1 mr-3 icon" src="../assets/share.png">
                            </v-col>
                        </v-row>
                        
                        <v-card-text class="headline font-weight-bold text-center mt-4">
                            1212121212
                        </v-card-text>

                        <v-list-item-content>
                            <v-list-item-title>
                                <img class="icon_arrow icon mr-1" src="../assets/up.png">
                                484
                            </v-list-item-title>
                        </v-list-item-content>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </div>
    </v-app>
</template>

<script>
// @ is an alias to /src
import axios from "axios";


export default {
  name: 'Home',
  components: {

  },
  data:()=>({
        
    }),
    methods:{
        
        
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
    height: 100%;
}
.contain h1{
    color:#686868;
    font-family: "gotham";
    
}
.contain{
    margin:0rem 5rem;
}
.contain_dashboard{
    margin-top: 2rem;
}
.card_datos{
    border: transparent;
    
    border-radius: 10px !important;
    
}
.card_datos.gradiente{
    background: rgb(240,191,55);
    background: linear-gradient(148deg, rgba(240,191,55,1) 0%, rgba(209,68,62,1) 100%);
    color: white;
}
.icon_barras{
    /* margin-left:7rem !important; */
}
.col{
    justify-content: flex-end  !important;
    height: 1.1rem;
}
.icon{
    height: .7rem;
}

</style>