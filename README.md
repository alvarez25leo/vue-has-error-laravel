# vue-has-error-laravel

Este directiva de vue permite mostrar errores devueltos por laravel y es 100% configurable.

#### Actualización: esta directiva es para vue 2.x. [here](https://github.com/alvarez25leo/vue-has-error-laravel).


### instalación

NPM:
```bash
npm i vue-has-error-laravel
```

<center><img width="340" alt="Validacion" src="https://i.ibb.co/wRXSyrW/validar-formulario.png"></center>
<div><br><br></div>


Requerirlo en su archivo de componente vue.js:

```javascript
import VueHasErrorLaravel from 'vue-has-error-laravel'

Vue.use(VueHasErrorLaravel)
```
Configurando

```javascript
import VueHasErrorLaravel from 'vue-has-error-laravel'

Vue.use(VueHasErrorLaravel,{
    className:'is-invalid',
    tagName:'div',
    tagClassName:'invalid-feedback',
    showErrorMessage:true
})
```

Nuxt.js 
Crear el archivo /plugins/vue-has-error-laravel.js


```javascript
import Vue from 'vue'
import VueHasErrorLaravel from 'vue-has-error-laravel'

Vue.use(VueHasErrorLaravel)
``` 
Abrir el archivo nuxt.config.js

```javascript
 plugins: [
        { ssr: false, src: '~plugins/vue-has-error-laravel.js' },
    ],
``` 

### instrucciones de uso

```javascript
<template>
<form method="post" @submit.prevent="updateProfile" enctype="multipart/form-data">
   <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <div class="form-group">
              <label>Apellidos</label>
              <input type="text" name="lastname" v-has-error="'lastname'" v-model="user.lastname"  class="form-control" >
            </div>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-12">
           <div class="mt-2">
               <button type="submit" class="btn btn-primary" :disabled="buttonDisable">{{buttonText}}</button>
           </div>
        </div>
     </div>
 </form>
</template>

<script>
export default {
    data() {
        return {
            buttonText:'Guardar cambios',
            buttonDisable:false,
            user: {
                lastname: ''
            }
        }
    },
    methods:{
        updateProfile(event) {
            this.buttonDisable=true;
            this.buttonText = 'Guardando cambios...';
            const formData = new FormData(event.target)
            axios.post(`${this.apiwebUrl}user/data/update`, formData)
            .then((resp)=> {
                this.buttonDisable=false;
                this.buttonText = 'Guardar cambios';
            })
            .catch((error) => {
                if (error.response.status == 422) {
                    this.$setLaravelErrors(error.response.data.errors);
                }
                this.buttonDisable=false;
                this.buttonText = 'Guardar cambios';
            });
        }
    }
}
</script>

```

Agrega `v-has-error` el attribute a tu elemento:

```html
<div class="col-12 col-sm-12 col-md-6 col-lg-6">
     <div class="form-group">
         <label>Apellidos</label>
         <input type="text" name="lastname" v-has-error="'lastname'" v-model="user.lastname"  class="form-control" >
       </div>
 </div>
```

### Autor

Leonardo Manuel Alvarez
leonardomanuel.alv@gmail.com

### Contributors

**José Ignacio Menchaca Castro** - [IgnacioCastro0713](https://github.com/IgnacioCastro0713)

### license

MIT
