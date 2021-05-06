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

                        <v-list-item-content class="py-1">
                            <v-list-item-title class="my-0 overline text-center">
                                Totales de Glopstra
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
                                    Usuarios 
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
                            {{users}}
                        </v-card-text>

                        <v-list-item-content class="py-1">
                            <v-list-item-title class="my-0 overline text-center">
                                En Glopstra
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
                                    Familiares
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
                <v-row no-gutters class="mt-6" justify="space-around">
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
                            <div class="overline mb-0">
                                Empresas 
                            </div>
                        
                        <v-card-text class="headline font-weight-bold white--text text-center mt-0 mb-3">
                            {{descargas}}
                        </v-card-text>

                        
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
                        <div class="overline mb-0">
                            Sucursales
                        </div>
                        
                        
                        <v-card-text class="headline font-weight-bold  text-center mt-0 mb-3">
                            {{users}}
                        </v-card-text>

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
                        <div class="overline mb-0">
                            Empleados
                        </div>
                        
                        <v-card-text class="headline font-weight-bold text-center mt-0 mb-3">
                            1212121212
                        </v-card-text>

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
                                sm="4"
                            >
                                <div class="overline mb-2">
                                    Descargas 
                                </div>
                            </v-col>
                            <v-col
                                sm="8"
                                class="d-flex col"
                            >
                                
                                <v-autocomplete rounded class="autocomplete"  v-model="year_select" @change="mostrar_descargas_months" :items="years"></v-autocomplete>
                                <v-btn
                                class="ma-2 rango_modulo_btn"
                                text
                                color="rgba(240,191,55,1)"
                                @click="modulo_uno=!modulo_uno;mostrar_modulos_years();"
                                >
                                    {{rango_modulo}}
                                </v-btn>
                                <img class="icon_calendario mt-1 mr-3 icon" src="../assets/dashboard/calendario.png">
                            </v-col>
                        </v-row>
                        
                        <div 
                        v-for="(i, index) in modulos_year"
                        :key="index">
                        <v-row  >
                            <v-col
                                cols="12"
                                sm="3"
                                class="overline"
                            >
                                {{meses[i]}}
                            </v-col>
                            <v-col
                                sm="9"
                                class="d-flex"
                            >
                               <v-progress-linear
                                color="rgba(240,191,55,1)"
                                height="25"
                                :value="descargas_year_month.length>0?descargas_mes[meses[i].toLowerCase()]:0"
                                class="mb-3"
                                >
                                <template>
                                    <strong >{{descargas_year_month.length>0?descargas_mes[meses[i].toLowerCase()]:0}}</strong>
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
        descargas_mes:{},
        users:0,
        rango_modulo:'Julio - Diciembre',
        year_select:new Date().getFullYear().toString(),
        modulo_uno:true,
        modulos_year:[],
        actual:0,
        years:[],
        total_descargas:0,
        meses: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        descargas_year_month:[]
    }),
    methods:{
        mostrar_modulos_years(){
 
            if (this.modulo_uno==true) {
                this.modulos_year=[0,1,2,3,4,5]
                this.rango_modulo='Julio - Diciembre'
            }else{
                this.modulos_year=[6,7,8,9,10,11]
                this.rango_modulo='Enero - Junio'
            }
        },
        llenar_years(){
            this.descargas_year_month.forEach(element =>{
                this.years.push(element.year)
            })
        },
        
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
        
        mostrar_descargas_months(){
            this.descargas_year_month.forEach(element =>{
                if (this.year_select==element.year) {
                    this.descargas_mes=element
                    
                }
            })
            return true
        },
        
        descargas:function(){ 
            const path = 'http://160.153.253.91:3200/information';
            axios.get(path).then((respuesta) => {
                this.users=respuesta.data.users;
                this.descargas_year_month=[];
                respuesta.data.infoDownloads.forEach((element,index) => {
                    let year=element.datenow.charAt(0)+element.datenow.charAt(1)+element.datenow.charAt(2)+element.datenow.charAt(3);
                    let month= element.datenow.charAt(5)+element.datenow.charAt(6);
                    let day=element.datenow.charAt(8)+element.datenow.charAt(9);
                    if (this.search_year(year,month)==false) { 
                        this.descargas_year_month.push({
                            year:year, 
                            enero:0,
                            febrero:0,
                            marzo:0,
                            abril:0,
                            mayo:0,
                            junio:0,
                            julio:0,
                            agosto:0,
                            septiembre:0,
                            octubre:0,
                            noviembre:0,
                            diciembre:0
                        })
                        switch (parseInt(month)) {
                            case 1:
                                this.descargas_year_month[this.descargas_year_month.length-1].enero+=1
                                break;
                            case 2:
                                this.descargas_year_month[this.descargas_year_month.length-1].febrero+=1
                                break;
                            case 3:
                                this.descargas_year_month[this.descargas_year_month.length-1].marzo+=1
                                break;
                            case 4:
                                this.descargas_year_month[this.descargas_year_month.length-1].abril+=1
                                break;
                            case 5:
                                this.descargas_year_month[this.descargas_year_month.length-1].mayo+=1 
                                break;
                            case 6:
                                this.descargas_year_month[this.descargas_year_month.length-1].junio+=1    
                                    break;
                            case 7:
                                this.descargas_year_month[this.descargas_year_month.length-1].julio+=1    
                                    break;
                            case 8:
                                this.descargas_year_month[this.descargas_year_month.length-1].agosto+=1    
                                    break;
                            case 9:
                                this.descargas_year_month[this.descargas_year_month.length-1].septiembre+=1    
                                    break;
                            case 10:
                                this.descargas_year_month[this.descargas_year_month.length-1].octubre+=1    
                                    break;
                            case 11:
                                this.descargas_year_month[this.descargas_year_month.length-1].noviembre+=1    
                                    break;
                            case 12:
                                this.descargas_year_month[this.descargas_year_month.length-1].diciembre+=1
                                break;                             
                            default:
                                break;
                        }   
                    }
                });
                this.total_descargas=parseInt(respuesta.data.downloads)
                this.llenar_years()
            })
            .catch((error) => {
                console.log(error)
            })
            return this.total_descargas
        }
    },
    created () {
       this.mostrar_modulos_years();
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
    padding-bottom: 2rem !important;
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
    margin-top:6px !important;
}
.autocomplete{
    margin-top:0;
    padding-top:0;
}
.rango_modulo_btn{
    margin:0px  !important;
}

</style>