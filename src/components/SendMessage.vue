<template>
  <div class="send-message-wrapper">
    <form class="send-message" @submit.prevent="onSubmit"
                              @keyup.ctrl.enter="onSubmit">
      <textarea name="" id=""
                v-model="message">
      </textarea>

     <div class="send-message__submit-wrp">
       <input class="send-message__submit-btn" type="submit" value="Написать консультанту">
     </div>
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
          let mounth = ['января', 'февраля', 'марта',
            'апреля','мая', 'июня',
            'июля', 'августа', 'сентября',
            'ноября', 'декабря',
          ];

          let date = today.getDate() + " " + mounth[today.getMonth()] + " " + today.getFullYear()

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

<style lang="scss" scoped>
  .send-message-wrapper {
    background-color: #F2F2F2;
    margin-top: 25px;
  }
  .send-message {
    padding: 27px 20px 35px;

    textarea {
      outline: none;
      box-sizing: border-box;
      border-radius: 3px;
      display: block;
      resize: none;
      width: 100%;
      margin-bottom: 25px;
      min-height: 65px;
    }
    .send-message__submit-wrp {
    }
    .send-message__submit-btn {
      background-color: #fdd639;
      border: none;
      border-radius: 25px;
      display: block;
      outline: none;
      margin: 0px auto;
    }
    .send-message__submit-btn[value] {
      font-size: 15px;
      font-weight: 700;
      padding: 11px 53px;
    }
  }

</style>