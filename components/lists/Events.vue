<template>
  <div>
    <h1>Events</h1>
    <ul>
      <li v-for="event of eventsStore.data.list.content">
        <NuxtLink
          :to="'/events/' + event.Navn.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase() + '-' + event.id">
          {{ event.Navn }}</NuxtLink>
      </li>
    </ul>
    <h2>eventsStore fra Events.vue (komponent)</h2>
    <pre>{{ eventsStore }}</pre>
  </div>
</template>

<script>
export default {
  computed: {
    eventsStore: function () {
      return this.$store.state.events;
    }
  }
}
</script>