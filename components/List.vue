<template>
  <div>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <h1>Mountains</h1>
      <ul>
        <li v-for="mountain of mountains">
          <NuxtLink :to="'/mountains/' + mountain.slug">{{ mountain.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mountains: []
    }
  },
  async fetch() {
    this.mountains = await fetch(
      'https://customers.ryesgade52.dk/misc/nuxt-ssr/moutains'
    ).then(res => res.json())
  }
}
</script>