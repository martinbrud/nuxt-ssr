<template>
    <div>
        <p v-if="$fetchState.pending">Fetching mountain...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p>
        <h1>{{ mountain.title }}</h1>
        <p>{{ mountain.description }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mountain: []
        }
    },
    async fetch() {
        const slug = this.$route.path.split('/')[this.$route.path.split('/').length - 1];
        this.mountain = await fetch(
            'https://customers.ryesgade52.dk/misc/nuxt-ssr/' + slug
        ).then(res => res.json())
    }
}
</script>