<template>
  <div>
    <LoadData />
    <Nav />
    <Events />
  </div>
</template>

<script>
import Nav from '~/components/global/Nav.vue';
import LoadData from '~/components/global/LoadData.vue';
import Events from '~/components/lists/Events.vue';
export default {
  components: { Nav, LoadData, Events }
}
</script>