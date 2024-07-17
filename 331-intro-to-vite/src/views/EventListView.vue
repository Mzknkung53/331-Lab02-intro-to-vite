<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventInfo from '@/components/Organize.vue'
import Event from '@/types/Event'
import { computed, ref,watchEffect } from 'vue';
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios';

const events = ref<Event[]>(null)
  const totalEvent = ref<number>(0)

  
  const props = defineProps({
    page: {
      type: Number,
      required: true
    }
  })

  const hasNextPage = computed(() => {
    const totalPages = Math.ceil(totalEvent.value / 2)
    return props.page.valueOf() < totalPages
  })

  watchEffect(() => {
  EventService.getEvents(2, props.page)
    .then((response: AxiosResponse<Event[]>) => {
      events.value = response.data
      totalEvent.value = response.headers['x-total-count']
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
  })

</script>

<template>
  <h1>Event for good</h1>
  <!--new element-->
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <!-- <EventInfo v-for="event in events" :key="event.id" :event="event"></EventInfo> -->
    <RouterLink :to="{ name: 'event-list-view', query: { page: page - 1} }" rel="prev" v-if="page!= 1">
    Prev Page</RouterLink>
    <RouterLink :to="{ name: 'event-list-view', query: { page: page + 1} }" rel="next" v-if="hasNextPage">
    Next Page</RouterLink>
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>