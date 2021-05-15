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

                        <!-- <v-list-item-content class="py-1">
                            <v-list-item-title class="my-0 overline text-center">
                                Totales de Glopstra
                            </v-list-item-title>
                        </v-list-item-content> -->
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

                        <!-- <v-list-item-content class="py-1">
                            <v-list-item-title class="my-0 overline text-center">
                                En Glopstra
                            </v-list-item-title>
                        </v-list-item-content> -->
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
                            {{family}}
                        </v-card-text>

                        <!-- <v-list-item-content class="py-1">
                            <v-list-item-title class="my-0 overline text-center">
                                Unidos en  Glopstra
                            </v-list-item-title>
                        </v-list-item-content> -->
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
                            {{companies}}
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
                            {{branchs}}
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
                            {{employees}}
                        </v-card-text>

                        </v-card>
                    </v-col>
                    <!-- <v-col
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
                            Ciudadanos
                        </div>
                        
                        <v-card-text class="headline font-weight-bold text-center mt-0 mb-3">
                            {{citizens}}
                        </v-card-text>

                        </v-card>
                    </v-col> -->
                </v-row>
                <v-row justify="space-around">
                    <v-col 
                    cols="12"
                    sm="12"
                    md="7"
                    class="">
                        <v-card
                            elevation="2"
                            class="card_graf pa-3"
                        >
                        <v-row no-gutters class="mb-7">
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
                            </v-col>
                        </v-row>
                        
                        <div 
                        v-for="(i, index) in modulos_year"
                        :key="index">
                        <v-row  >
                            <v-col
                                cols="6"
                                md="3"
                                sm="2"
                                class="overline"
                            >
                                {{meses[i]}}
                            </v-col>
                            <v-col
                                cols="6"
                                md="9"
                                sm="10"
                                class="d-flex"
                            >
                               <v-progress-linear
                                color="rgba(240,191,55,1)"
                                height="25"
                                :value="descargas_year_month.length>0?descargas_mes[meses[i].toLowerCase()]:0"
                                class="mb-md-3"
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
                    md="4">
                        <v-card
                        elevation="0"
                        class="card_char_pie"
                        >
                        <v-list-item-title class="overline text-center">
                            Clasificación de usuarios
                        </v-list-item-title>
                            <GChart
                                class="pieChart"
                                type="PieChart"
                                :data="chartData"
                                :options="chartOptions"
                                :events="sliceSelected"
                                ref="gChart"
                            />
                            <v-container class="py-0">
                                <v-row
                                    align="center"
                                    justify="center"
                                >
                                    <v-col
                                    v-for="selection in selections"
                                    :key="selection"
                                    class="shrink"
                                    
                                    >
                                    <v-chip text-color="white" class="body-2" :color="color_select">
                                        {{ selection }}
                                    </v-chip>
                                    </v-col>
                                </v-row>
                                </v-container>
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
import { GChart } from 'vue-google-charts'

export default {
    name: 'Home',
    components: {
        GChart
    },
    data:()=>({
        color_select:'',
        selections:[],
        chartData: [],
        chartOptions: {
            legend: 'none',
            slices: {
                0: { color: 'rgb(126, 126, 126)' ,offset: 0},
                1: { color: 'rgb(255, 192, 0)' ,offset: 0},
                2: { color: 'rgb(94, 55, 146)' ,offset: 0},
                3: { color: 'rgb(133, 1, 63)' ,offset: 0},
                4: { color: 'rgb(220, 25, 44)' ,offset: 0},
                5: { color: 'rgb(255, 69, 28)' ,offset: 0},
                6: { color: 'rgb(134, 191, 0)' ,offset: 0},   
            },
            pieSliceText: 'percentage',
            pieSliceTextStyle:{color: 'white', fontName: 'Roboto', fontSize: 18},
            backgroundColor:'transparent',
            chartArea:{width:'80%',height:'75%'},
            height:300,  
            tooltip:{trigger:'focus'}
        },
        chartEvents: {},
        family:0,
        companies:0,
        branchs:0,
        citizens:0,
        employees:0,
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
        descargas_year_month:[],
        height:300,
    
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
        },
        mostrar_descargas_months(){
            this.descargas_year_month.forEach(element =>{
                if (this.year_select==element.year) {
                    this.descargas_mes=element
                    
                }
            })
            
        },
        
      
    },
    computed:{
        sliceSelected(){
            this.chartEvents={
                select: () => {           
                    const pieChart = this.$refs.gChart.chartObject;
                    const selection = pieChart.getSelection(); 
                    
                    if (selection.length>0) {
                        this.selections=[]
                        const slice= selection[0].row;
                        for (const slice in this.chartOptions.slices) {
                            this.chartOptions.slices[slice].offset=0;
                        }
                        this.chartOptions.slices[slice].offset=0.2;
                        this.color_select=this.chartOptions.slices[slice].color;
                        this.selections.push(`Tipo: ${this.chartData[slice+1][0]}`)
                        this.selections.push(`Total: ${this.chartData[slice+1][1]}`)
                    }
                }
            }
            return this.chartEvents;
        },
        descargas:function(){ 
            this.chartData=[];
            const path = 'http://160.153.253.91:3200/information';
            axios.get(path).then((respuesta) => {
                this.family=respuesta.data.family;
                this.companies=respuesta.data.company;
                this.users=respuesta.data.users;
                this.employees=respuesta.data.employees;
                this.branchs=respuesta.data.branch;
                this.citizens=respuesta.data.citizen;
                this.chartData.push(['Clasificacion', 'Cantidad']);
                this.chartData.push(['Nunca Covid', respuesta.data.prevcov[0].c1]);
                this.chartData.push(['Desconoce Covid', respuesta.data.prevcov[0].c2]);
                this.chartData.push(['Tuvo Covid', respuesta.data.prevcov[0].c3]);
                this.chartData.push(['Sintomas Covid', respuesta.data.prevcov[0].c4]);
                this.chartData.push(['Positivo Covid', respuesta.data.prevcov[0].c5]);
                this.chartData.push(['Contacto Covid', respuesta.data.prevcov[0].c6]);
                this.chartData.push(['Vacunado Covid', respuesta.data.prevcov[0].c7]);
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
                this.mostrar_descargas_months()
            })
            .catch((error) => {
                console.log(error)
            })
            return this.total_descargas
        },
        
    },
    mounted () {

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
.headline{
    font-size:2.5rem !important;
    margin-bottom: 1rem !important;
}
.card_char_pie{
    background-color:transparent;
}
@media (max-width: 768px) {
    .contain{
        margin:0rem 2.5rem;
        padding-bottom: 2rem !important;
    }
    .card_datos{
        margin-bottom:1rem !important;
    }
    .rango_modulo_btn{
        font-size: .7rem !important;
    }

}

</style>