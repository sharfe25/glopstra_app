<template>
    <v-app class="main">
        <div class="contain">
            <h1>Perfiles de usuario</h1>
            <div class="contain_dashboard" >
                
                    <v-row no-gutters>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-text-field
                                v-model="nombre_rol"
                                label="Nombre del rol"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                            <v-btn
                            rounded
                            class="ma-2"
                            outlined
                            color="rgb(204, 49, 44)"
                            @click="nombre_rol!=''?dialog=true:dialog=false"
                            >
                            Crear rol
                            </v-btn>
                        </v-col>
                    </v-row>
                
               <v-data-table
                    dense
                    :headers="headers"
                    :items="usuarios"
                    item-key="id"
                    class="elevation-1 mt-7"
                >
                
                    <template v-slot:[`item.actions`]="{ item }">
                    <v-btn
                        color=" white--text"
                        icon text
                        @click="dialog_edit=true;nombre_rol_edit=item.rol; see_details(item.rol);"
                    ><v-icon color="rgb(204, 49, 44)" class="">mdi-pen-plus</v-icon></v-btn>
                    
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
                        class="overline"
                        >Nuevo rol - {{nombre_rol}}</v-toolbar>
                        <v-card-text class="mt-3">
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                    v-model="ex4"
                                    label="Estado"
                                   color="red darken-3"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                    v-model="ex4"
                                    label="Web"
                                   color="red darken-3"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                    v-model="ex4"
                                    label="App"
                                    color="red darken-3"
                                    value="red darken-3"
                                    hide-details
                                    ></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-divider class="mt-2"></v-divider>
                        </v-card-text>
                        <h1 class="ml-4 overline">Permisos</h1>
                         <v-data-table
                            dense
                            :headers="headers_permisos"
                            :items="permisos"
                            item-key="id"
                            class="elevation-1 mt-7"
                        >
                        
                            <template v-slot:[`item.web`]="{  }">
                                <v-checkbox
                                color="orange darken-3"
                                
                                ></v-checkbox>
                            
                            </template>

                            <template v-slot:[`item.app`]="{ }">
                                <v-checkbox
                                    color="orange darken-3"
                                    
                                ></v-checkbox>
                            
                            </template>
                            
                        </v-data-table>
                        
                        <v-card-actions class="justify-end">
                        <v-btn
                            text
                            @click="dialog=false; nombre_rol=''"
                        >Cerrar</v-btn>
                        <v-btn
                            text
                            @click="dialog=false"
                        >Agregar</v-btn>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-dialog>
            <v-dialog
            transition="dialog-top-transition"
            max-width="600"
            v-model="dialog_edit"
            >
                <template >
                    <v-card>
                        <v-toolbar
                        color="rgba(209,68,62,1)"
                        dark
                        class="overline"
                        >Editar rol - {{nombre_rol_edit}}</v-toolbar>
                        <v-card-text class="mt-3">
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                    v-model="ex4"
                                    label="Estado"
                                   color="red darken-3"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                    v-model="ex4"
                                    label="Web"
                                   color="red darken-3"
                                    value="red"
                                    hide-details
                                    ></v-checkbox>
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    md="4"
                                >
                                    <v-checkbox
                                    v-model="ex4"
                                    label="App"
                                    color="red darken-3"
                                    value="red darken-3"
                                    hide-details
                                    ></v-checkbox>
                                </v-col>
                            </v-row>
                            <v-divider class="mt-2"></v-divider>
                        </v-card-text>
                        <h1 class="ml-4 overline">Permisos</h1>
                         <v-data-table
                            dense
                            :headers="headers_permisos"
                            :items="permisos"
                            item-key="id"
                            class="elevation-1 mt-7"
                        >
                            <template v-slot:[`item.web`]="{  }">
                                <v-checkbox
                                color="orange darken-3"
                                ></v-checkbox>
                            </template>

                            <template v-slot:[`item.app`]="{ }">
                                <v-checkbox
                                    color="orange darken-3" 
                                ></v-checkbox>
                            </template>
                        </v-data-table>
                        
                        <v-card-actions class="justify-end">
                        <v-btn
                            text
                            @click="dialog_edit=false"
                        >Cerrar</v-btn>
                        <v-btn
                            text
                            @click="dialog_edit=false"
                        >Editar</v-btn>
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
    name: 'Usuarios',
    components: {

    },
    data:()=>({
        ex4:'',
        dialog_edit:false,
        usuarios:[
            { rol:'Admin', estado:'Si', web:'Si', app:'Si'},
            { rol:'Ciudadano', estado:'No', web:'Si', app:'Si'},
            { rol:'Empresa', estado:'Si', web:'Si', app:'Si'}
        ],
        permisos: [
            {modulo:'Datos de usuario', funcionalidad:'Actualizar'},
            {modulo:'Alertas y preveción', funcionalidad:'Alerta por distanciamiento'},
            {modulo:'Alertas y preveción', funcionalidad:'Visualizar denuncias'},
        ],
        nombre_rol:'',
        nombre_rol_edit:'',
        dialog:false,
        headers: [
        {
          text: 'Rol',
          align: 'center',
          value: 'rol',
        },
        { text: 'Estado', value: 'estado',align: 'center' },
        { text: 'Web', value: 'web',align: 'center' },
        { text: 'App', value: 'app',align: 'center' },
        { text: 'Permisos', value: 'actions',align: 'center', sortable: false}
      ],
      headers_permisos: [
        {
          text: 'Modulo',
          align: 'center',
          value: 'modulo',
        },
        { text: 'Funcionalidad', value: 'funcionalidad',align: 'center' },
        { text: 'Web', value: 'web',align: 'center' },
        { text: 'App', value: 'app',align: 'center' },
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
.icon{
    height: .7rem;
}
@media (max-width: 768px) {
    .contain{
        margin:0rem 1rem;
    }
}

</style>