<template>
  <div class="login">
    <v-container>
      <form class="auth" @submit.prevent="logIn">
        <div class="inputs">
          <base-input
            type="email"
            v-model="data.email"
            :label="$t('labels.email')"
            placeholder="email or phone"
            required
          ></base-input>

          <base-input
            type="password"
            v-model="data.password"
            :label="$t('labels.password')"
            placeholder="*******"
            required
          ></base-input>
        </div>

        <div class="inputsFooter">
          <div class="side rememberMe">
            <v-checkbox
              v-model="data.rememberMe"
              :label="$t('auth.remember_me')"
              color="primary"
            ></v-checkbox>
          </div>
          <div class="side">
            <button class="underline">
              <router-link to="/authentication/forget-password">
                {{ $t("auth.forget_password") }}</router-link
              >
            </button>
          </div>
        </div>

        <footer class="authFooter">
          <base-button :loading="btn_loading" type="submit" class="lg">{{
            $t("form.login")
          }}</base-button>
          <p>
            {{ $t("auth.login.footer") }}
            <button class="coloredSpan">
              <router-link to="/authentication/register">{{
                $t("form.register")
              }}</router-link>
            </button>
          </p>
        </footer>
      </form>
    </v-container>
  </div>
</template>

<script setup>
useHead({
  title: "Login",
});
definePageMeta({
  layout: "auth",
});

import { useAuthStore } from "@/stores/auth";

const data = ref({
  email: null,
  password: null,
  rememberMe: null,
});

const logIn = () => {
  const user = {
    id: 5,
    name: "omar",
    phone: "01009867150",
    email: "tugrp@example.com",
    token: "asdwascascsadfggf fgh fghgfh fgh fgh hfghd cascsacascasasc",
  };
  useAuthStore().logIn(user);
};
</script>

<style lang="scss" scoped></style>
