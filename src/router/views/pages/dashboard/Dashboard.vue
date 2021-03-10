<template>
  <div class="flex">
    <div class="grid grid-cols-2 w-full gap-10 p-16 buttons">
      <div class="flex">
          <square-button  icon="videocam" color="#ff742e" title="New Meeting" description="Setup new meeting" />
      </div>      
      <div class="flex">
          <square-button  icon="add-circle" color="#0e78f9" title="Join Meeting" description="Via invitation link" />
      </div>      
      <div class="flex">
          <square-button  icon="calendar-outline" color="#0e78f9" title="Schedule" description="Plan your meetings" />
      </div>      
      <div class="flex">
          <square-button  icon="desktop-outline" color="#0e78f9" title="Share  Screen" description="Show your work" />
      </div>      
    </div>
  </div>  
  <div class="flex flex-grow">
    <h2>
    </h2>
  </div>
</template>

<script>
import SquareButton from '../../../../components/cards/SquareButton.vue';
export default {
  components: { SquareButton }
}
</script>

<style scoped>
.buttons{
  height: min-content;
}
</style>