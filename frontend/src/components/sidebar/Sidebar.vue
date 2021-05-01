<template>
  <div>
    サイドバーです
    <AddGroup></AddGroup>
    <Groups></Groups>
  </div>
</template>

<script>
import AddGroup from './AddGroup.vue';
import Groups from './Groups.vue';

export default {
  components:{
    AddGroup,
    Groups,
  }
}
</script>

<style>

</style>