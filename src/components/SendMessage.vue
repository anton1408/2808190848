<template>
  <div class="send-message-wrapper">
    <form class="send-message" @submit.prevent="onSubmit">
      <textarea name="" id="" cols="30" rows="10"
                v-model="message">
      </textarea>

      <input type="submit" value="Написать консультанту">
    </form>
  </div>
</template>

<script>
  export default {
    name: "SendMessage",
    data() {
      return {
        message: null,
        date: null,
        userName: "Луганский Антон",
        errors: []
      }
    },
    methods: {
      onSubmit() {
        if(this.message) {
          let today = new Date()
          let date = today.getDate() + " " + today.getMonth() + " " + today.getFullYear()

          let newMessage = {
            message: this.message,
            date: date,
            userName: this.userName
          }
          this.$emit('adding-message', newMessage),
          this.message = null,
            this.date = null
        }
        else {
          if(!this.message) this.errors.push('Введите ваше сообщение')
        }
      }

    }
  }
</script>

<style scoped>

</style>