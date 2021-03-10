<template>
<div class="flex md:flex-shrink-0">
    <div class="grid md:grid-cols-2 w-full gap-10 p-16 buttons">
        <div class="flex">
            <square-button icon="videocam" color="#ff742e" title="New Meeting" description="Setup new meeting" />
        </div>
        <div class="flex">
            <square-button icon="add-circle" color="#0e78f9" title="Join Meeting" description="Via invitation link" />
        </div>
        <div class="flex">
            <square-button icon="calendar-outline" color="#0e78f9" title="Schedule" description="Plan your meetings" />
        </div>
        <div class="flex">
            <square-button icon="desktop-outline" color="#0e78f9" title="Share  Screen" description="Show your work" />
        </div>
    </div>
</div>
<div class="flex flex-grow p-16">
    <div class="flex flex-col w-full">
      <div>
        <widget-date-time />
      </div>
      <div>
        <meeting-list />
      </div>
    </div>
</div>
</template>

<script>
import SquareButton from '@/components/cards/SquareButton.vue';
import WidgetDateTime from '@/components/widgets/WidgetDateTime.vue';
export default {
    components: {
        SquareButton,
        WidgetDateTime
    }
}
</script>

<style scoped>
.buttons {
    height: min-content;
}
</style>
