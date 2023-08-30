<template>
  <div class="notification" @click.stop="show = !show">
    <v-tooltip
      theme="light"
      text="Notifications"
      location="bottom"
      aria-label="Notifications Icon"
    >
      <template v-slot:activator="{ props }">
        <Icon v-bind="props" name="ion:md-notifications-outline" />
      </template>
    </v-tooltip>

    <NavDropdown :show="show" @close="show = false">
      <template v-slot>
        <div class="notification_drop_down">
          <ul class="items" v-if="notifications.length > 0">
            <li
              class="item"
              v-for="item in notifications"
              :key="item.id"
              @click.stop="show = false"
            >
              <div class="image">
                <nuxt-img
                  preset="default"
                  :src="item.image"
                  alt="Notification's Owner"
                />
              </div>

              <div class="content">
                <h6>{{ item.title }}</h6>
                <p class="desc">{{ item.body.slice(0, 50) }}</p>
              </div>
            </li>
          </ul>
          <div class="noData" v-else>
            <nuxt-img
              preset="default"
              height="300"
              width="300"
              src="/images/bg/noNotifications.svg"
              alt="Notifications Empty Image"
            />
          </div>
        </div>
      </template>
    </NavDropdown>
  </div>
</template>

<script setup>
const props = defineProps(["url"]);

const show = ref(false);
const notifications = ref([]);

const getData = async () => {
  const res = await useFetch("notifications").then((res) => {});
};
// getData();
</script>

<style lang="scss" scoped>
.notification {
  position: relative;

  @media (max-width: 800px) {
    position: unset;
  }

  .notification_drop_down {
    .items {
      width: 300px;
      height: auto;
      overflow-y: scroll;

      .item {
        padding: 20px 10px 10px;
        border-bottom: 1px solid #eee;
        display: flex;
        cursor: pointer;
        transition: all 0.2s linear;

        &:hover {
          background: #eee;
        }

        .image {
          margin-inline-end: 10px;
          img {
            height: 50px;
          }
        }

        .content {
          h6 {
            color: gray;
            font-size: 15px;
          }
          p.desc {
            font-size: 14px;
          }
        }
      }
    }

    .noData {
      overflow: hidden;
      height: 20vw;
      width: 20vw;

      @media (max-width: 800px) {
        width: 100%;
        height: 40vw;
      }

      img {
        object-fit: contain;
        height: 100%;
        width: 100%;
        border-radius: 15px;
      }
    }
  }
}
</style>
