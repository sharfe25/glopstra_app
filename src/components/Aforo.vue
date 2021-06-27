<template>
    <v-app class="main">
        <div class="contain">
            <h1>Registro de aforo</h1>
            <div class="contain_dashboard" >
                <v-data-table
                    dense
                    :headers="headers"
                    :items="aforo"
                    item-key="id"
                    class="elevation-1 mt-7"
                >
                
                    <template v-slot:[`item.clasificacion`]="{}">       
                            <img class="img" src="../assets/img_covid/c1.png" alt="">
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
    name: 'Reportes',
    components: {

    },
    data:()=>({
        aforo:[
            {clasificacion:'',name:'Sharon Rueda',cel:313176584,temperatura:'37°C',entrada:'17:00',salida:'18:00',tiempo:'1h'}
        ],
        headers: [
        { text: 'Clasificacion', value: 'clasificacion',align: 'center', sortable: false },
        {
          text: 'Usuario',
          align: 'center',
          value: 'name',
        },
        { text: 'Cel', value: 'cel',align: 'center' },
        { text: 'Temperatura', value: 'temperatura',align: 'center' },
        { text: 'Hora entrada', value: 'entrada',align: 'center'},
        { text: 'Hora salida', value: 'salida',align: 'center'},
        { text: 'Tiempo en el establecimiento', value: 'tiempo',align: 'center'},
      ],
    }),
    computed:{

    },
    methods:{
        
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
.img{
    height: 3rem;
}
@media (max-width: 768px) {
    .contain{
        margin:0rem 1rem;
    }
}

</style>