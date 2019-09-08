<template>
  <div class="chat-body">
    <div class="chat-body__header">
      <div class="chat-body__left-col">
          <p>Помледние отзывы</p>
          <p><a href="#">Все отзывы</a></p>
      </div>
      <div class="chat-body__right-col">
        <div class="chat-body__quantity-likes"><p><span><img src="assets/img/heart-icon.png" alt=""></span>131</p></div>
        <div class="chat-body__quantity-messages"><p><span><img src="assets/img/message-icon.png" alt=""></span>{{ allMessages.length }}</p></div>
      </div>
    </div>

    <div class="chat-body__message-wrapper" v-for="(message, index) in allMessages">
      <div class="chat-body__message-header">
        <p><span class="chat-body__user-name">{{ message.userName }}</span> <span class="chat-body__message-date">{{ message.date }}</span></p>
      </div>
      <div class="chat-body__message">
        <p>{{ message.message }}</p>
      </div>
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
        heartIcon: 'assets/img/heart-icon.png',
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
  .chat-body {

  }
  .chat-body__header {
    display: flex;
    justify-content: space-between;
    margin: 0px 20px 10px 20px;
    .chat-body__left-col {
      display: flex;
      p:first-child {
        font-size: 16px;
        font-weight: bold;
        margin-right: 5px;
      }
      p a {
        font-size: 14px;
        color: #005da1;
      }
    }
    .chat-body__right-col {
      display: flex;
      .chat-body__quantity-likes {
        margin-right: 18px;
      }
      .chat-body__quantity-messages {
        margin-right: 2px;
      }
    }
  }

 .chat-body__quantity-likes,
 .chat-body__quantity-messages {
   p {
     font-size: 12px;
     line-height: 20px;
   }
 }
  .chat-body__quantity-likes span,
  .chat-body__quantity-messages span {
    margin-right: 5px;
  }
  .chat-body__quantity-likes img,
 .chat-body__quantity-messages img {
   float: left;
   position: relative;
   top: 4px;
 }
  .chat-body__message-wrapper {
    margin: 0px 20px;
  }
  .chat-body__message-wrapper:last-child {
    margin-bottom: 24px;
  }
  .chat-body__message-header {
   margin-bottom: 11px;
 }
  .chat-body__user-name {
    font-size: 14px;
    font-weight: bold;
  }
  .chat-body__message-date {
    font-size: 11px;
    color: #808080;
  }
  .chat-body__message {
    border: 1px solid #d1d2d2;
    background-color: #f2fbff;
    padding: 15px 15px 10px 15px;
    margin-bottom: 17px;

    p {
      font-size: 14px;
      line-height: 19px;
    }
  }
  .chat-body__message::before,
  .chat-body__message::after {
    content: "";
    width: 10px;
    display: block;
    position: absolute;

  }
  .chat-body__message::before {
    background-color: #f2fbff;
    border-left: 1px solid #d1d2d2;
    border-top: 1px solid #d1d2d2;
    height: 10px;
    transform: rotate(45deg);
    top: -6px;
  }
  .chat-body__message::after {
    background-color: white;
    border-right: 1px solid #d1d2d2;
    border-bottom: 1px solid #d1d2d2;
    height: 7px;
    top: -8px;
    left: 10px;
  }
  @media screen and (max-width: 380px) {
    .chat-body__header {
      display: block;
    }
  }
</style>