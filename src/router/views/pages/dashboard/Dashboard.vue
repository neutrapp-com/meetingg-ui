<template>
<div class="flex md:flex-shrink-0">
    <div class="grid md:grid-cols-2 sm:grid-cols-2 w-full gap-10 p-16 buttons ">
        <square-button icon="videocam" color="#ff742e" title="New Meeting" description="Setup new meeting" />
        <square-button icon="add-circle" color="#0e78f9" title="Join Meeting" description="Via invitation link" />
        <square-button icon="calendar-outline" color="#0e78f9" title="Schedule" description="Plan your meetings" />
        <square-button icon="desktop-outline" color="#0e78f9" title="Share  Screen" description="Show your work" />
    </div>
</div>
<div class="flex flex-grow p-16">
    <div class="flex flex-col w-full widgets">
      <div class="widget-item">
        <widget-date-time />
      </div>
      <div class="widget-item">
        <meeting-list />
      </div>
    </div>
</div>
</template>

<script>
import SquareButton from '@/components/cards/SquareButton.vue';
import WidgetDateTime from '@/components/widgets/WidgetDateTime.vue';
import MeetingList from '../../../../components/widgets/meeting/List.vue';
export default {
    components: {
        SquareButton,
        WidgetDateTime,
        MeetingList
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
