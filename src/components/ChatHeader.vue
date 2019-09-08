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
    margin-top: 20px;
    justify-content: center;
    padding: 0 20px;

  }
  .chat-title__left-column {
    margin-right: 10px;
  }
  .chat-title__right-column {}
  .chat-title__manager-avatar {
    border-radius: 100%;
    width: 120px;
    height: 120px;
    margin-top: -4px;
    position: relative;
    z-index: 10;
  }
  .chat-title__manager-info {
    margin-bottom: 7px;
  }
  .chat-title__manager-name {
    font-size: 16px;
    line-height: 23px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .chat-title__manager-position {
    font-size: 12px;
    margin-top: -2px;
  }
  .chat-title__manager-services {
    background-color: #fffbc8;
    border: 1px solid #cecabf;
    border-radius: 5px;
    padding-bottom: 7px;
    padding-right: 10px;
    padding-top: 9px;
    padding-left: 44px;
    margin-left: -45px;
    max-width: 365px;
    min-height: 56px;
    p {
      line-height: 19px;
      font-size: 14px;
    }
  }
@media screen and (max-width: 483px) {
  .chat-title {
    margin-bottom: 15px;
  }
}
</style>
