<template>
    <div>
        <LoadData />
        <h1>{{ eventsStore.Navn }}</h1>
        <p>{{ eventsStore.TekstKort }}</p>
    </div>
</template>

<script>
import LoadData from '~/components/global/LoadData.vue';

export default {
    components: { LoadData },
    computed: {
        eventsStore: function () {
            const list = this.$store.state.events.data.list.content;
            const activeEventId = this.$route.path.split('-')[this.$route.path.split('-').length - 1];
            return list.find(x => x.id === activeEventId);
        }
    }
}
</script>