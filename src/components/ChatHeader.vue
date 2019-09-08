<template>

    <div class="chat-title">
      <div class="chat-title__left-column">
        <img class="chat-title__manager-avatar" :src="managerAvatar" alt="фото менеджера">
      </div>

      <div class="chat-title__right-column">
        <div class="chat-title__manager-info">
          <p class="chat-title__manager-name">{{ managerName }}</p>
          <p class="chat-title__manager-position">{{ managerPosition }}</p>
        </div>

        <div class="chat-title__manager-services">
          <p>{{ managerServices }}</p>
        </div>
      </div>

    </div>

</template>

<script>
export default {
  name: "ChatHeader",
  props: {

  },
  data() {
    return {
      managerAvatar: 'assets/img/manager-avatar.jpg',
      managerName: 'Вероника Ростова',
      managerPosition: 'Менеджер по продажам',
      managerServices: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны'
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
  .chat-title {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding: 0 20px;

  }
  .chat-title__left-column {
    margin-right: 10px;
  }
  .chat-title__right-column {}
  .chat-title__manager-avatar {
    border-radius: 100%;
    height: 120px;
    margin-top: -4px;
    position: relative;
    width: 120px;
    z-index: 10;
  }
  .chat-title__manager-info {
    margin-bottom: 7px;
  }
  .chat-title__manager-name {
    font-size: 16px;
    font-weight: bold;
    line-height: 23px;
    margin-bottom: 5px;
  }
  .chat-title__manager-position {
    font-size: 12px;
    margin-top: -2px;
  }
  .chat-title__manager-services {
    background-color: #fffbc8;
    border-radius: 5px;
    border: 1px solid #cecabf;
    margin-left: -45px;
    max-width: 365px;
    min-height: 56px;
    padding: 9px 10px 7px 44px;
    p {
      font-size: 14px;
      line-height: 19px;
    }
  }
@media screen and (max-width: 483px) {
  .chat-title {
    margin-bottom: 15px;
  }
}
</style>
