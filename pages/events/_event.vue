<template>
    <div>
        <LoadData />
        <Nav />
        <Event />
        <Events />
    </div>
</template>

<script>
import Nav from '~/components/global/Nav.vue';
import LoadData from '~/components/global/LoadData.vue';
import Events from '~/components/lists/Events.vue';
import Event from '~/components/global/contents/Event.vue';

export default {
    components: { Nav, LoadData, Events, Event },
    computed: {
        eventsStoresss: function () {
            return this.$store.state.events;
        },
        /*
        eventsStore: function () {
            const list = this.$store.state.events.data.list.content;
            const activeEventId = this.$route.path.split('-')[this.$route.path.split('-').length - 1];
            return list.find(x => x.id === activeEventId);
        },
        */
        eventsStores: function () {
            //this.$store.commit('events/setActiveEvent', 'hi...');

            return this.$store.state.events;

            if (this.$store.state.events != undefined && this.$store.state.events.data != undefined && this.$store.state.events.data.list != undefined) {
                const list = this.$store.state.events.data.list.content;
                const activeEventId = this.$route.path.split('-')[this.$route.path.split('-').length - 1];
                return list.find(x => x.FlexbilletID === activeEventId);
            } else {
                return this.$route.path.split('-')[this.$route.path.split('-').length - 1]
            }
            /*
            return  ?
                {
                    activeEventId: this.$route.path.split('-')[this.$route.path.split('-').length - 1],
                    data: this.$store.state.events
                } :
                null;
                */
        }

    }
}
</script>