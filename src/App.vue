<script setup>
import { RouterView } from 'vue-router'

import Header from './components/Header.vue'
import Search from './components/Search.vue'
import Prefooter from './components/Prefooter.vue'
import Footer from './components/Footer.vue'
import Modal_login from './components/Modal_login.vue'
import Modal_signin from './components/Modal_signin.vue'
import Modal_reset from './components/Modal_reset.vue'
</script>

<template>
  <Header />
  <Search />
  <main>
    <RouterView />
  </main>
  <Prefooter />
  <Footer />

  <Modal_login />
  <Modal_signin />
  <Modal_reset />
</template>

<style scoped>

</style>
