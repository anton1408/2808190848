<template>
  <div class="messages">
    <div v-for="message in allMessages">
      <p>{{ message.date}}</p>
      <p>{{ message.userName}}</p>
      <p>{{ message.message }}</p>
      <hr>
    </div>
    <send-message @adding-message="addMessage"></send-message>
  </div>

</template>

<script>
  export default {
    name: "Messages",
    props: {
    },
    data() {
      return {
        allMessages: [
          {message: "Привет, Верунь! ниче себе ты крутая. фотка класс!!!!",
            date: "13 октября 2011",
            userName: "Самуил"},
          {message: "Вероника, здравствуйте! Есть такой вопрос: " +
                    "Особый вид куниц жизненно стабилизирует кинетический момент, " +
                    "это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?",
            date: "14 октября 2011",
            userName: "Лилия Семёновна"},
          {message: "Вероника, здравствуйте! Есть такой вопрос: " +
                    "Особый вид куниц жизненно стабилизирует кинетический момент?",
            date: "14 октября 2011",
            userName: "Лилия Семёновна"}

        ]
      }
    },
    methods: {
      addMessage(newMessage) {
        this.allMessages.push(newMessage)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>