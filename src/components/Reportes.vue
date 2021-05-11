<template>
    <v-app class="main">
        <div class="contain">
            <h1>Denuncias actuales</h1>
            <div class="contain_dashboard" >
                
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Nombre
                        </th>
                        <th class="text-left">
                            Email
                        </th>
                        <th class="text-left">
                            Tipo de denuncia
                        </th>
                        <th class="text-left">
                            Dirección
                        </th>
                        <th class="text-left">
                            Pais
                        </th>
                        
                        <th class="text-left">
                            Estado
                        </th>
                        <th class="text-left">
                            ciudad
                        </th>
                        <th class="text-left">
                            Comentarios
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="denuncia in denuncias" :key="denuncia._id"
                        >
                        <td>{{denuncia.name}} {{denuncia.lastName}}</td>
                        <td>{{denuncia.email}}</td>
                        <td>{{denuncia.typeOfComplaint}}</td>
                        <td>{{denuncia.direction}}</td>
                        <td>{{denuncia.country}}</td>
                        <td>{{denuncia.state}}</td>
                        <td>{{denuncia.city}}</td>
                        <td>{{denuncia.coments}}</td>
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
    name: 'Reportes',
    components: {

    },
    data:()=>({
        info_denuncias:[],
    }),
    computed:{
        denuncias:function(){ 
            const path = 'http://160.153.253.91:3200/complaint';
            axios.get(path).then((respuesta) => {
                
                respuesta.data.forEach(d => {
                    if(d.anonymous===true){
                        d.name='Anonimo'
                        d.lastName=''
                        d.email='Anonimo'
                    }
                });
                
                this.info_denuncias=respuesta.data
            })
            .catch((error) => {
                console.log(error)
            })
            return this.info_denuncias
        }
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