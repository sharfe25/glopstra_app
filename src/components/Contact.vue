<template>
    <v-app class="main">
        <div class="contain">
            <h1>PQRS</h1>
            <div class="contain_dashboard" > 
                <v-data-table
                    dense
                    :headers="headers"
                    :items="pqrs"
                    item-key="id"
                    class="elevation-1 mt-7"
                >
                
                    <template v-slot:[`item.actions`]="{ item }">
                    <v-btn
                        color=" white--text"
                        icon text
                        @click="dialog=true; see_details(item.name,item.email,item.pqrs,item.phone,item.details,item.createdAt);"
                    ><v-icon color="rgb(204, 49, 44)" class="">mdi-file-document</v-icon></v-btn>
                    
                    </template>
                </v-data-table>
                
                    
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
        headers: [
        {
          text: 'Nombre',
          align: 'center',
          value: 'name',
        },
        { text: 'Email', value: 'email',align: 'center' },
        { text: 'Tipo', value: 'pqrs',align: 'center' },
        { text: 'Celular', value: 'phone',align: 'center' },
        { text: 'Ver más', value: 'actions',align: 'center', sortable: false}
      ],
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