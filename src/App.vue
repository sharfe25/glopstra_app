<template>
<router-view name="main"/>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
  methods:{
    limpiar_storage(){
      
      let conect= localStorage.getItem('conect')
      console.log(conect)
      if (conect=='false') {
        
          localStorage.removeItem('email')
          localStorage.removeItem('token')
          localStorage.removeItem('conect')
      }
    }
  },
  beforeDestroy() {
    console.log('hola')
    this.limpiar_storage()
  }
};
</script>
