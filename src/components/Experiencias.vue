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
                            v-for="experiencia in experiencias" :key="experiencia._id"
                        >
                        <td class="text-center">{{experiencia.type}}</td>
                        <td class="text-center"> <img :src="experiencia.face==='BUENA'?exp_g:experiencia.face==='REGULAR'?exp_r:exp_b" height="30" > </td>
                        <td class="text-center">{{experiencia.exp}}</td>
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
        info_experiences:[],
        exp_g:require('../assets/experiences/bien.png'),
        exp_r:require('../assets/experiences/regular.png'),
        exp_b:require('../assets/experiences/mal.png'),
    }),
    methods:{
        
        
    },
    computed:{
        experiencias:function(){ 
            const email= {email:localStorage.getItem('email')};
            let config = {
                headers: {
                    auth:localStorage.getItem('token')
                }
            }
            const path = 'http://160.153.253.91:3200/searchexpe';
            axios.post(path, email, config).then((result) => {
                if (typeof result.data.resp != 'string'){
                    this.info_experiences=result.data.resp;
                }
                
            })
            .catch((error) => {
                console.log(error);
            });
            return this.info_experiences
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