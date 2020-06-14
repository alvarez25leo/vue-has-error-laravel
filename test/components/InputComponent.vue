<template>
  <section>
    <input type="text" v-has-error="'title'" name="title" v-model="form.title" @click="handleUpdate">
  </section>
</template>

<script>
  export default {
    name: "Input",
    data() {
      return {
        form: {
          title: ''
        }
      }
    },
    methods: {
      handleUpdate() {
          this.$setLaravelErrors({ title: ['title is required'] })
      }
    }
  }
</script>