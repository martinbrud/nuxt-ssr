<template>

</template>

<script>
export default {
    data() {
        return {
            events: []
        }
    },
    async fetch() {
        if (process.server) {
            this.$store.commit('events/load',
                await fetch(
                    this.$store.state.settings.apiBaseUrl + '/airtable/Events/view/IntegrationUpcomming'
                ).then(res => res.json())
            );
        }
    }
}
</script>