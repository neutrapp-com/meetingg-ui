<template>
<div class="flex md:flex-shrink-0">
    <div class="grid md:grid-cols-2 sm:grid-cols-2 w-full gap-10 sm:p-2 lg:p-16 buttons ">
        <square-button @click="$store.dispatch('meeting/unselectMeeting') && navigateTo('/meetings')" icon="videocam" color="#ff742e" title="New Meeting" description="Setup new meeting" />
        <square-button icon="add-circle" color="#0e78f9" title="Join Meeting" description="Via invitation link" />
        <square-button @click="navigateTo('/shedule')" icon="calendar-outline" color="#0e78f9" title="Schedule" description="Plan your meetings" />
        <square-button @click="navigateTo('/contact')" icon="person-circle" color="#0e78f9" title="Contact" description="See your contact" />
    </div>
</div>
<div class="flex flex-grow p-16 scroll">
    <div class="flex flex-col w-full widgets pr-16">
      <div class="widget-item">
        <widget-date-time />
      </div>
      <div class="widget-item pb-16">
        <meeting-list :meetingsList="getMeetings"/>
      </div>
    </div>
</div>
</template>

<script>
import SquareButton from '@/components/cards/SquareButton.vue';
import WidgetDateTime from '@/components/widgets/WidgetDateTime.vue';
import MeetingList from '@/components/widgets/meeting/List.vue';
import router from '@/router'

import {
    meetingComputed,
} from '@/state/helpers';

export default {
    components: {
        SquareButton,
        WidgetDateTime,
        MeetingList
    },
    computed:{
        ...meetingComputed
    },
    methods:{
        navigateTo(link){
            router.push(link)
        }
    }
}
</script>

<style scoped>
.buttons {
    height: min-content;
}

.widgets{
    @apply space-y-8;
}
</style>
