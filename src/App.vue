<template>
<router-view name="main"/>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
  }),
  methods:{
    beforeWindowUnload(){
      let conect= localStorage.getItem('conect')
      if (conect=='false') {
          localStorage.removeItem('email')
          localStorage.removeItem('token')
          localStorage.removeItem('conect')
      }
    },
  },
  created() {
    window.addEventListener('beforeunload', this.beforeWindowUnload)
  },
  beforeDestroy() { 
    window.removeEventListener('beforeunload', this.beforeWindowUnload)
  },
};
</script>
