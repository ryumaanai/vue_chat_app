<template>
  <div>
    MainContainerです
    <GroupName></GroupName>
    <Messages></Messages>
    <SendMessage></SendMessage>
  </div>
</template>

<script>
import GroupName from './GroupName.vue';
import Messages from './Messages.vue';
import SendMessage from './SendMessage.vue';

export default {
  components: {
    GroupName,
    Messages,
    SendMessage,
  }
}
</script>

<style>

</style>