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
}
</script>