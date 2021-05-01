<template>
    <v-app class="main">
        <div class="contain">
            <h1>Reportes actuales</h1>
            <div class="contain_dashboard" >
                
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-left">
                            Solicitud
                        </th>
                        <th class="text-left">
                            Tipo
                        </th>
                        <th class="text-left">
                            Fecha
                        </th>
                        <th class="text-left">
                            Hora
                        </th>
                        <th class="text-left">
                            Nombre
                        </th>
                        <th class="text-left">
                            Dirección
                        </th>
                        <th class="text-left">
                            Latitud
                        </th>
                        <th class="text-left">
                            Longitud
                        </th>
                        <th class="text-left">
                            NIC
                        </th>
                        <th class="text-left">
                            Estado
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                        v-for="item in desserts"
                        :key="item.name"
                        >
                        <td>{{ item.name }}</td>
                        <td>{{ item.calories }}</td>
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
    name: 'Account',
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