import Vue from 'vue'
import VueRouter from 'vue-router'
import LogIn from '../views/LogIn.vue'
import Registro from '../views/Registro.vue'
import Codigo from '../views/Codigo.vue'
import Recuperar_contrasena from '../views/Recuperar_contrasena.vue'
import Cambio_contrasena from '../views/Cambio_contrasena.vue'
import Account from '../views/Account.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/LogIn'
  },
  {
    path: '/',
    redirect: '/LogIn'
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    components: {main: LogIn}
  },
  {
    path: '/Registro',
    name: 'Registro',
    components: {main: Registro}
  },
  {
    path: '/Codigo',
    name: 'Codigo',
    components: {main: Codigo}
  },
  {
    path: '/Recuperar_contrasena',
    name: 'Recuperar_contrasena',
    components: {main: Recuperar_contrasena}
  },
  {
    path: '/Cambio_contrasena',
    name: 'Cambio_contrasena',
    components: {main: Cambio_contrasena}
  },
  {
    path: '/Account',
    name: 'Account',
    components: {main: Account},
    meta: {requireAuth: true}
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

    if(rutaProtegida && !localStorage.getItem('token')){
        // ruta protegida es true
        // token es nulo true, por ende redirigimos al inicio
        next({name: 'LogIn'})
    }else if(!rutaProtegida && localStorage.getItem('token')){
      next({name: 'Account'})
    }else{
        // En caso contrario sigue...
        next()
    }

})

export default router
