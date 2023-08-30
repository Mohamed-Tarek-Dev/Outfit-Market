<template>
  <div class="flash-sale">
    <h2 class="h_2 title text-center">Deals of the Day</h2>
    <div class="time_to_end">
      <h3>Flash Sale</h3>
      <div class="end">
        <template v-if="!over">
          <span class="endsIn">Ends In:</span>
          <div class="time">
            <span>{{ time.d }}</span
            >: <span>{{ time.h }}</span
            >: <span>{{ time.m }}</span>
          </div>
          <Icon name="zondicons:cheveron-right" />
        </template>

        <template v-else>
          <h4>Ended :(</h4>
        </template>
      </div>
    </div>
    <v-row>
      <v-col
        cols="6"
        sm="6"
        md="4"
        lg="3"
        v-for="product in products"
        :key="product.id"
        ><ProductItem :product="product"
      /></v-col>
    </v-row>
  </div>
</template>

<script setup>
const API = useApis();
const { data: products } = await API.GetProducts("flash");

const sale_day_finish = "2023-11-12";

const over = ref(false);
const time = ref({
  d: 0,
  h: 0,
  m: 0,
  // s: 0,
});

const startCounter = (targetDate) => {
  const targetTime = new Date(targetDate).getTime();

  const intervalId = ref(null);

  const mainLogic = () => {
    const currentTime = new Date().getTime();
    const timeDifference = targetTime - currentTime;

    if (timeDifference <= 0) {
      over.value = true;
      clearInterval(intervalId.value);
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    time.value = {
      d: days,
      h: hours,
      m: minutes,
      // s: seconds,
    };
  };

  // IIfe
  (function () {
    mainLogic();
  })();
  intervalId.value = setInterval(mainLogic, 5000);
};

onMounted(() => {
  startCounter(sale_day_finish);
});
</script>

<style lang="scss" scoped>
.time_to_end {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    flex-direction: column;

    h3 {
      align-self: flex-start;
    }
    .end {
      align-self: flex-end;
    }
  }

  .end {
    display: flex;
    align-items: center;
    font-weight: bold;
    .endsIn {
      font-weight: normal;
    }

    .time {
      display: flex;
      margin-inline-start: 15px;

      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        margin-inline: 5px;
      }
    }
  }
}

body.rtl {
  .time_to_end {
    svg.icon {
      transform: rotate(180deg) !important;
    }
  }
}
</style>
