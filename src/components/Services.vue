<template>
  <div class="services">
    <p class="services__title">Услуг</p>
    <div class="services__schedule">
     <div class="services__schedule-left-col">
       <div class="services__item">
         <p>Ручное бронирование</p>
       </div>
       <div class="services__item">
         <p>Пакетные туры</p>
       </div>
       <div class="services__item">
         <p>Отели</p>
       </div>
     </div>
      <div class="services__schedule-right-col">
        <div class="services__item">
          <p>11</p>
        </div>
        <div class="services__item">
          <p>3</p>
        </div>
        <div class="services__item">
          <p>1</p>
        </div>
      </div>
    </div>

    <div class="services__total">
      <div class="services__total-left-col">
        <p>Всего</p>
      </div>
      <div class="services__total-right-col">
        <p>15</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Services"
  }
</script>

<style lang="scss" scoped>
  .services {
    width: 320px;
    margin-left: auto;
    margin-bottom: 22px;
  }
  .services__title {
    text-align: right;
    font-size: 13px;
    padding-right: 35px;
    padding-bottom: 12px;
    line-height: 5px;
  }
  .services__schedule {
    border-bottom: 1px solid #cccccc;
    border-top: 1px solid #cccccc;
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 12px;

    .services__schedule-right-col {
      width: 32%;
      .services__item, { p {text-align: center;} }
    }
    .services__schedule-left-col {
      width: 68%;
      margin-left: -1px;
    }
    .services__schedule-left-col::before {
      background-color: rgba(83,83,83,0.4);
      content: '';
      width: 1px;
      height: 76px;
      position: absolute;

    }
  }
  .services__item:nth-child(1),
  .services__item:nth-child(2) {
    margin-bottom: 2px;
  }
  .services__item {
    height: 24px;
    position: relative;
    p {
      font-size: 13px;
      padding-left: 6px;
      line-height: 24px;
    }
  }

  .services__schedule-left-col .services__item::before {
    content: "";
    border-radius: 0px 3px 3px 0px;
    position: absolute;
    height: 24px;
    background-color: #ace2f8;
    z-index: -10;
  }
  .services__schedule-left-col .services__item:nth-child(1)::before {
    width: 218px;
    background-color: #b1e19b;
  }
  .services__schedule-left-col .services__item:nth-child(2)::before {
    width: 53px;
  }
  .services__schedule-left-col .services__item:nth-child(3)::before {
    width: 35px;
  }

.services__total {
  display: flex;
  justify-content: space-between;

  .services__total-left-col {
    width: 68%;
    margin-left: -1px;
  }
  .services__total-right-col {
    width: 32%;
  }

  .services__total-left-col,
  .services__total-right-col {
    p {
      font-size: 16px;
      font-weight: bold;
      line-height: 20px;
    }
  }
  .services__total-right-col {
    p {
      text-align: center;
    }
  }

}

</style>