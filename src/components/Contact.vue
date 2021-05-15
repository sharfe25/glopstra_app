<template>
    <v-app class="main">
        <div class="contain">
            <h1>PQRS</h1>
            <div class="contain_dashboard" > 
                <v-simple-table>
                    <template v-slot:default>
                    <thead>
                        <tr>
                        <th class="text-center">
                            Nombre
                        </th>
                        <th class="text-center">
                            Email
                        </th>
                        <th class="text-center">
                            Tipo
                        </th>
                        <th class="text-center">
                            Celular
                        </th>
                        <th class="text-center">
                            Detalles
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="pqr in pqrs" :key="pqr._id"
                        >
                        <td class="text-center">{{pqr.name}}</td>
                        <td class="text-center">{{pqr.email}}</td>
                        <td class="text-center">{{pqr.pqrs}}</td>
                        <td class="text-center">{{pqr.phone}}</td>
                        <td class="text-center">
                            <v-btn outlined color="orange" @click="dialog=true; see_details(pqr.name,pqr.email,pqr.pqrs,pqr.phone,pqr.details,pqr.createdAt);">Ver Detalles</v-btn></td>
                        </tr>
                    </tbody>
                    </template>
                </v-simple-table>
                    
            </div>
        </div>
        <v-dialog
            transition="dialog-top-transition"
            max-width="600"
            v-model="dialog"
        >
            <template >
                <v-card>
                    <v-toolbar
                    color="rgba(209,68,62,1)"
                    dark
                    >Detalles PQR</v-toolbar>
                    <v-card-text class="mt-3">
                        Nombre: {{details.name}} <br>
                        Email: {{details.email}} <br>
                        Celular: {{details.phone}} <br>
                        Fecha: {{details.createdAt}}
                        <v-divider class="mt-2"></v-divider>
                    </v-card-text>
                    <v-card-text class="">
                        Tipo de PQR: {{details.pqrs}} <br>
                        Detalles: {{details.details}}
                    </v-card-text>
                    <v-card-actions class="justify-end">
                    <v-btn
                        text
                        @click="dialog=false"
                    >Close</v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-app>
</template>

<script>
// @ is an alias to /src
import axios from "axios";


export default {
    name: 'Contact',
    components: {

    },
    data:()=>({
        dialog:false,
        details:{
            name:'',
            email:'',
            pqrs:'',
            phone:'',
            details:'',
            createdAt:''
        },
        info_pqrs:[],
    }),
    computed:{
        pqrs:function(){ 
            const path = 'http://160.153.253.91:3200/contacts';
            axios.get(path).then((respuesta) => {
                this.info_pqrs=respuesta.data.contacts
            })
            .catch((error) => {
                console.log(error)
            })
            return this.info_pqrs
        }
    },
    methods:{
        see_details(name,email,pqrs,phone,details,createdAt){
            this.details.name=name;
            this.details.email=email;
            this.details.pqrs=pqrs;
            this.details.phone=phone;
            this.details.createdAt=createdAt.substr(0, 10);
            this.details.details=details;
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
.icon{
    height: .7rem;
}
@media (max-width: 768px) {
    .contain{
        margin:0rem 1rem;
    }
}

</style>