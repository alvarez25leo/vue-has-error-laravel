# vue-has-error-laravel
#### Actualización: esta directiva es para vue 2.x. [here](https://github.com/alvarez25leo/vue-has-error-laravel).  
 

### instalación

NPM:  
```bash
npm i vue-has-error-laravel
```
Requerirlo en su archivo de componente vue.js:

```javascript
// ES5
var vueHasErrorLaravel = require('vue-has-error-laravel');
// ES6
import 'vue-has-error-laravel';
```

### instrucciones de uso 

```javascript
<template>
<form method="post" @submit.prevent="updateProfile" enctype="multipart/form-data">
   <div class="row">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6">
          <div class="form-group">
              <label>Apellidos</label>
              <input type="text" name="lastname" v-has-error="errors.lastname" v-model="user.lastname"  class="form-control" >
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
    data(){
        return{
            buttonText:'Guardar cambios',
            buttonDisable:false,
            user: {
                lastname: ''
            },
            errors:[],
        }
    },
    methods:{
        updateProfile(event){
            this.buttonDisable=true;
            this.buttonText = 'Guardando cambios...';
            const formData = new FormData(event.target)
            axios.post(`${this.apiwebUrl}user/data/update`, formData)
            .then((resp)=> {
                this.errors = []
                this.buttonDisable=false;
                this.buttonText = 'Guardar cambios';
            })
            .catch((error)=> {
                if (error.response.status == 422) {
                    this.errors = error.response.data.errors;
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
         <input type="text" name="lastname" v-has-error="errors.lastname" v-model="user.lastname"  class="form-control" >
       </div>
 </div>
```

### license

MIT
