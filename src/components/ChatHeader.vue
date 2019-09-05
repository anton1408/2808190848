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
<!--
<style lang="scss" scoped>
  .chat-header {
    padding: 20px;
    position: relative;
  }
  .chat-title__manager-avatar {
    border-radius: 100%;
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .chat-title__manager-info {
    width: 170px;
    margin-left: auto;
  }
  .chat-title__manager-name {
    font-size: 16px;
  }
  .chat-title__manager-position {
    font-size: 12px;
  }
  .chat-title__manager-services {
    font-size: 14px;
  }
  .chat-title__manager-services {
    background-color: #fffbc8;
    border: 1px solid #cecabf;
  }
</style>
-->