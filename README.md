# vue-has-error-laravel
#### update: this directive is for vue 1.x. a vue 2.0 compatible version is available by alvarez25leo [here](https://github.com/alvarez25leo/vue-has-error-laravel).  
 

### install  

NPM:  
note: vue-has-error-laravel requires vue 1.x; check your version by running `npm list vue`; a 2.0 compatible version is available [here](https://github.com/alvarez25leo/vue-has-error-laravel)  
```bash
npm i vue-has-error-laravel
```
Require it in your vue.js component file:

```javascript
// ES5
var vueHasErrorLaravel = require('vue-has-error-laravel');
// ES6
import 'vue-has-error-laravel';
```

### usage instructions  

```javascript
<template>

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

Add `v-has-error` as an attribute on the element:

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
