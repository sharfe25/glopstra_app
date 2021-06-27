<template>
    <v-app class="main">
        <div class="contain">
            <h1>Visor de reportes de seguridad</h1>
            <v-form>
                <h5 class="mt-5">Especifique los filtros de busqueda</h5>
                <v-container>
                <v-row>
                   
                    <v-col
                    cols="12"
                    md="3"
                    >
                        <v-autocomplete
                                v-model="filtros.pais"
                                :items="['Colombia']"
                                label="País"
                        ></v-autocomplete>
                    </v-col>

                    <v-col
                    cols="12"
                    md="2"
                    >
                        <v-autocomplete
                            v-model="filtros.estado"
                            :items="['Atlantico']"
                            label="Estado"
                        ></v-autocomplete>
                    </v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                        <v-autocomplete
                                v-model="filtros.ciudad"
                                :items="['Barranquilla']"
                                label="Ciudad"
                        ></v-autocomplete>
                    </v-col>

                    <v-col
                    cols="12"
                    md="2"
                    >
                        <v-menu
                            v-model="menuDateInicio"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="filtros.dateInicio"
                                label="Fecha inicial"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="filtros.dateInicio"
                            @input="menuDateInicio = false"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>

                    <v-col
                    cols="12"
                    md="2"
                    >
                         <v-menu
                            v-model="menuDateFin"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="filtros.dateFin"
                                label="Fecha final"
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker
                            v-model="filtros.dateFin"
                            @input="menuDateFin = false"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <v-row> 
                    <v-col
                    cols="12"
                    md="3"
                    >
                   <v-autocomplete
                        v-model="filtros.reporte"
                        :items="['Vehiculos']"
                        label="Reporte"
                    ></v-autocomplete>
                    </v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                        <v-autocomplete
                                v-model="filtros.tipoAlerta"
                                :items="['Hurto']"
                                label="Tipo de alerta"
                        ></v-autocomplete>
                    </v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                        <v-autocomplete
                            v-model="filtros.fuente"
                            :items="['Anonimo']"
                            label="Fuente"
                        ></v-autocomplete>
                    </v-col>

                    <v-col
                    cols="12"
                    md="3"
                    >
                        <v-autocomplete
                                v-model="filtros.estadoReporte"
                                :items="['']"
                                label="Estado reporte"
                        ></v-autocomplete>
                    </v-col>
                    
                </v-row>
                 <v-btn
                    
                    class="ma-2"
                    outlined
                    color="rgb(204, 49, 44)"
                    @click="filter"
                >
                    Filtrar
                </v-btn>
                <v-btn
                    
                    class="ma-2"
                    outlined
                    color="rgb(204, 49, 44)"
                    @click="filtros=[];filter();"
                >
                    Limpiar
                </v-btn>
                </v-container>
            </v-form>
            <div class="contain_dashboard" >
                <v-data-table
                    dense
                    :headers="headers"
                    :items="reportes"
                    item-key="id"
                    class="elevation-1 mt-7"
                >
                
                    <template v-slot:[`item.detalles`]="{ }">
                        <v-btn
                            color=" white--text"
                            icon text
                            @click="dialog=true;"
                        ><v-icon color="rgb(204, 49, 44)" class="">mdi-file-document</v-icon></v-btn>
                    
                    </template>
                </v-data-table>
                    
            </div>
        </div>
    </v-app>
</template>

<script>
// @ is an alias to /src
import axios from "axios";


export default {
    name: 'ReportesSeg',
    components: {

    },
    data:()=>({
        menuDateInicio:false,
        menuDateFin:false,
        filtros:{},
        reportes:[
            {reporte:'Vehiculos',fecha:'2021-05-02',tipoAlerta:'Hurto',fuente:'Anonimo',pais:'Colombia',estado:'Atlantico',ciudad:'Barranquilla'},
            {reporte:'Llamada',fecha:'2021-02-02',tipoAlerta:'Estafa',fuente:'Anonimo',pais:'Alemania',estado:'Berlin',ciudad:'Berlim'}
        ],
        headers: [
        { text: 'Reporte', value: 'reporte',align: 'center', sortable: false },
        {
          text: 'Usuario',
          align: 'center',
          value: 'name',
        },
        { text: 'Fecha', value: 'fecha',align: 'center' },
        { text: 'Tipo alerta', value: 'tipoAlerta',align: 'center'},
        { text: 'Fuente', value: 'fuente',align: 'center'},
        { text: 'Pais', value: 'pais',align: 'center'},
        { text: 'Estado', value: 'estado',align: 'center'},
        { text: 'Ciudad', value: 'ciudad',align: 'center'},
        { text: 'Detalles', value: 'detalles',align: 'center'},
      ],
    }),
    computed:{

    },
    methods:{
        filter(){
            let filtros = Object.values(this.filtros);
            this.reportes=this.reportes.filter(reporte=>{
                let valoresReportes= Object.values(reporte);
                let reporteFiltrado=valoresReportes.filter(reporte=>filtros.includes(reporte))
                return filtros.length==reporteFiltrado.length
            })
        },
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
    padding-bottom:1rem;
}
.contain h1,.contain h5{
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
.img{
    height: 3rem;
}
@media (max-width: 768px) {
    .contain{
        margin:0rem 1rem;
    }
}

</style>