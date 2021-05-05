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
                                    Descargas 
                                </div>
                            </v-col>
                            <v-col
                                sm="4"
                                class="d-flex col"
                            >
                                <img class="icon_barras mt-1 mr-3 icon" src="../assets/dashboard/barras.png">
                            </v-col>
                        </v-row>
                        
                        <v-card-text class="headline font-weight-bold white--text text-center mt-4">
                            {{descargas}}
                        </v-card-text>

                        <v-list-item-content>
                            <v-list-item-title>
                                <img class="icon_arrow icon mr-1" src="../assets/dashboard/up_w.png">
                                {{actual}}
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
                                    Registros 
                                </div>
                            </v-col>
                            <v-col
                                sm="4"
                                class="d-flex col"
                            >
                                <img class=" icon mt-1 mr-3" src="../assets/dashboard/view.png">
                            </v-col>
                        </v-row>
                        
                        <v-card-text class="headline font-weight-bold  text-center mt-4">
                            2156151
                        </v-card-text>

                        <v-list-item-content>
                            <v-list-item-title>
                                <img class="icon_arrow icon mr-1" src="../assets/dashboard/down.png">
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
                                <img class=" mt-1 mr-3 icon" src="../assets/dashboard/share.png">
                            </v-col>
                        </v-row>
                        
                        <v-card-text class="headline font-weight-bold text-center mt-4">
                            1212121212
                        </v-card-text>

                        <v-list-item-content>
                            <v-list-item-title>
                                <img class="icon_arrow icon mr-1" src="../assets/dashboard/up.png">
                                484
                            </v-list-item-title>
                        </v-list-item-content>
                        </v-card>
                    </v-col>
                </v-row>
                <v-row justify="space-around">
                    <v-col 
                    cols="12"
                    sm="12"
                    md="7"
                    class="">
                        <v-card
                            elevation="2"
                            class="pa-3"
                        >
                        <v-row no-gutters>
                            <v-col
                                cols="12"
                                sm="8"
                            >
                                <div class="overline mb-2">
                                    Descargas 
                                </div>
                            </v-col>
                            <v-col
                                sm="4"
                                class="d-flex col"
                            >
                                <img class="icon_calendario mt-1 mr-3 icon" src="../assets/dashboard/calendario.png">
                            </v-col>
                        </v-row>
                        
                        <div 
                        v-for="(i, index) in 6"
                        :key="index">
                        <v-row  >
                            <v-col
                                cols="12"
                                sm="2"
                            >
                                
                                     {{meses[index]}}
                                
                            </v-col>
                            <v-col
                                sm="10"
                                class="d-flex col"
                            >
                               <v-progress-linear
                                color="rgba(240,191,55,1)"
                                height="25"
                                :value="descargas_year_month[0][meses[index].toLowerCase()]===undefined? 0:descargas_year_month[0][meses[index].toLowerCase()]"
                                
                                class="mb-3"
                                >
                                <template>
                                    <strong>{{ descargas_year_month[0][meses[index].toLowerCase()]===undefined? 0:descargas_year_month[0][meses[index].toLowerCase()] }}</strong>
                                </template>
                                </v-progress-linear>
                            </v-col>
                        </v-row>
                        </div>
                        </v-card>
                    </v-col>
                    <v-col 
                    cols="12"
                    sm="12"
                    md="3">
                        <v-card
                            elevation="2"
                            class=""
                        >
                            
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
        actual:0,
        total_descargas:0,
        meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        descargas_year_month:[]
    }),
    methods:{
        search_year(year,month){
            if(year && month){
                if (this.descargas_year_month.length>0) {
                    let descargas = this.descargas_year_month.filter((p)=>{
                        if(p.year==year){
                            switch (parseInt(month)) {
                                case 1:
                                    p.enero+=1
                                    break;
                                case 2:
                                    p.febrero+=1
                                    break;
                                case 3:
                                    p.marzo+=1
                                    break;
                                case 4:
                                    p.abril+=1
                                    break;
                                case 5:
                                    p.mayo+=1 
                                    break;
                                case 6:
                                    p.junio+=1    
                                        break;
                                case 7:
                                    p.julio+=1    
                                        break;
                                case 8:
                                    p.agosto+=1    
                                        break;
                                case 9:
                                    p.septiembre+=1    
                                        break;
                                case 10:
                                    p.octubre+=1    
                                        break;
                                case 11:
                                    p.noviembre+=1    
                                        break;
                                case 12:
                                    p.diciembre+=1     
                                    break;                               
                                default:
                                    break;
                            }  
                        }

                    });
                    return true
                }else{
                    return false
                } 
            }
            return true
        }
        
    },
    computed:{
        descargas:function(){ 
            const path = 'http://160.153.253.91:3200/downloads';
            axios.get(path).then((respuesta) => {
                this.descargas_year_month=[]
                respuesta.data.info.forEach((element,index) => {
                    let year=element.datenow.charAt(0)+element.datenow.charAt(1)+element.datenow.charAt(2)+element.datenow.charAt(3)
                    let month= element.datenow.charAt(5)+element.datenow.charAt(6)
                    let day=element.datenow.charAt(8)+element.datenow.charAt(9)
                    if (this.search_year(year,month)==false) {
                        switch (parseInt(month)) {
                                case 1:
                                    this.descargas_year_month.push({year:year, enero:1})
                                    break;
                                case 2:
                                    this.descargas_year_month.push({year:year, febrero:1})
                                    break;
                                case 3:
                                    this.descargas_year_month.push({year:year, marzo:1})
                                    break;
                                case 4:
                                    this.descargas_year_month.push({year:year, abril:1})
                                    break;
                                case 5:
                                    this.descargas_year_month.push({year:year, mayo:1})  
                                        break;
                                case 6:
                                    this.descargas_year_month.push({year:year, junio:1})   
                                        break;
                                case 7:
                                    this.descargas_year_month.push({year:year, julio:1})    
                                        break;
                                case 8:
                                    this.descargas_year_month.push({year:year, agosto:1})    
                                        break;
                                case 9:
                                    this.descargas_year_month.push({year:year, septiembre:1})    
                                        break;
                                case 10:
                                    this.descargas_year_month.push({year:year, octubre:1})    
                                        break;
                                case 11:
                                    this.descargas_year_month.push({year:year, noviembre:1})    
                                        break;
                                case 12:
                                    this.descargas_year_month.push({year:year, diciembre:1})     
                                        break;                               
                                default:
                                    break;
                        }   
                    }
                });
                console.log(this.descargas_year_month[0],this.descargas_year_month[0]['mayo'])
                this.total_descargas=parseInt(respuesta.data.downloads)
            })
            .catch((error) => {
                console.log(error)
            })
            return this.total_descargas
        }
    },
    created () {
        
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
.contain h1,.titulo-card{
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
.icon_calendario{
    height: 1.2rem;
}


</style>