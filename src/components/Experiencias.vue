<template>
    <v-app class="main">
        <div class="contain">
            <h1>Experiencias</h1>
            <div class="contain_dashboard" >
                
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                            <th class="text-center">
                                Tipo de experiencia
                            </th>
                            <th class="text-center">
                                Calificación
                            </th>
                            <th class="text-center">
                                Detalles
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            
                        >
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                    
            </div>
        </div>
    </v-app>
</template>

<script>
// @ is an alias to /src
import axios from "axios";


export default {
    name: 'Denuncias',
    components: {

    },
    data:()=>({
        info_denuncias:'',
        
    }),
    methods:{
        
        
    },
    computed:{
        denuncias:function(){ 
            const path = 'http://160.153.253.91:3200/complaint';
            axios.get(path).then((respuesta) => {
                console.log(respuesta)
                this.info_denuncias=respuesta
            })
            .catch((error) => {
                console.log(error)
            })
            return this.info_denuncias
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