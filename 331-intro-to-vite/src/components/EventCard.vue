<script setup lang="ts">
import { ref } from "vue";
import { type Event } from '@/type'
const props = defineProps<{
  event: Event
}>()

</script>

<template>
  <RouterLink class="text-[#2c3e50] no-underline" :to="{ name: 'event-detail-view', params: { id: event.id } }">
  <div class="event-class">
    <div 
    class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px] hover:scale-101 hover:shadow-sp"
    >
      <h2>{{ props.event.title }}</h2>
      <span>{{ event.category }} @ {{ event.location }}</span>
    </div>
  </div>
</RouterLink>
</template>

<style scoped>

</style>