<template>
  <div id="register">
    <form @submit.prevent="handleSubmit"></form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      newUser: {
        email: "",
        password: "",
        password2: ""
      },
      errors: {}
    };
  },
  methods: {
    handleSubmit() {
      this.$axios
        .post("/user.json", this.newUser)
        .then(res => {
          console.log(res.data);
          this.errors = {};
        })
        .catch(err => {
          if (err.response.data) {
            this.errors = err.response.data;
          }
        });
    }
  }
};
</script>

<style scoped>
</style>
