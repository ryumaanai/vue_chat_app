<template>
  <div>
    Wrapperです
    <Sidebar></Sidebar>
    <MainContainer></MainContainer>
  </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar.vue';
import MainContainer from './maincontainer/MainContainer.vue';

export default {
  components: {
    Sidebar,
    MainContainer,
  }
}
</script>

<style>

</style>