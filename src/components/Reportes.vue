<template>
    <v-app class="main">
        <div class="contain">
            <h1>Denuncias actuales</h1>
            <div class="contain_dashboard" >
                <v-data-table
                    dense
                    :headers="headers"
                    :items="denuncias"
                    item-key="id"
                    class="elevation-1 mt-7"
                >
                
                    <template v-slot:[`item.actions`]="{ item }">
                    <v-btn
                        color=" white--text"
                        icon text
                        @click="dialog=true; see_details(item.name,item.email,item.direction,item.country,item.state,item.city,item.typeOfComplaint,item.coments);"
                    ><v-icon color="rgb(204, 49, 44)" class="">mdi-file-document</v-icon></v-btn>
                    
                    </template>
                </v-data-table>
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
                                Tipo de denuncia
                            </th>
                            <th class="text-center">
                                Detalles
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="denuncia in denuncias" :key="denuncia._id"
                        >
                        <td class="text-center">{{denuncia.name}} {{denuncia.lastName}}</td>
                        <td class="text-center">{{denuncia.email}}</td>
                        <td class="text-center">{{denuncia.typeOfComplaint}}</td>
                        <!-- <td class="text-center">{{denuncia.direction}}</td>
                        <td class="text-center">{{denuncia.country}}</td>
                        <td class="text-center">{{denuncia.state}}</td>
                        <td class="text-center">{{denuncia.city}}</td>
                        <td class="text-center">{{denuncia.coments}}</td> -->
                        <td class="text-center">
                            <v-btn outlined color="orange" @click="dialog=true; see_details(denuncia.name,denuncia.email,denuncia.direction,denuncia.country,denuncia.state,denuncia.city,denuncia.typeOfComplaint,denuncia.coments);">Ver Detalles</v-btn>
                        </td>
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
                    >Detalles Denuncia</v-toolbar>
                    <v-card-text class="mt-3">
                        Nombre: {{details.name}} <br>
                        Email: {{details.email}} <br>
                        Dirección: {{details.direction}} <br>
                        Pais:{{details.country}} <br>
                        Estado:{{details.state}} <br>
                        Ciudad:{{details.city}} 
                        <v-divider class="mt-2"></v-divider>
                    </v-card-text>
                    <v-card-text class="">
                        Tipo de denuncia: {{details.type_complaint}} <br>
                        Comentarios: {{details.comments}}
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
    name: 'Reportes',
    components: {

    },
    data:()=>({
        dialog:false,
        details:{
            name:'',
            email:'',
            direction:'',
            country:'',
            state:'',
            city:'',
            type_complaint:'',
            comments:''
        },
        info_denuncias:[],
        headers: [
        {
          text: 'Nombre',
          align: 'center',
          value: 'name',
        },
        { text: 'Email', value: 'email',align: 'center' },
        { text: 'Tipo de denuncia', value: 'typeOfComplaint',align: 'center' },
        { text: 'Ver más', value: 'actions',align: 'center', sortable: false}
      ],
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
        see_details(name,email,direction,country,state,city,type_complaint,comments){
            this.details.name=name;
            this.details.email=email;
            this.details.direction=direction;
            this.details.country=country;
            this.details.state=state;
            this.details.city=city;
            this.details.type_complaint=type_complaint;
            this.details.comments=comments;
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