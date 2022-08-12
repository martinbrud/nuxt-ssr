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
        this.$store.commit('events/load',
            await fetch(
                this.$store.state.settings.apiBaseUrl + '/airtable/Events/view/IntegrationUpcomming'
            ).then(res => res.json())
        );
    }
}
</script>