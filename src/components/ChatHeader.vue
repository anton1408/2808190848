<template>
  <div class="chat-header">

    <div class="chat-title">
      <img class="chat-title__manager-avatar" :src="managerAvatar" alt="фото менеджера">
      <div class="chat-title__manager-info">
        <p class="chat-title__manager-name">{{ managerName }}</p>
        <p class="chat-title__manager-position">{{ managerPosition }}</p>
      </div>

      <div class="chat-title__manager-services">
        <p>{{ managerServices }}</p>
      </div>

    </div>

    <hr>
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
</style>
