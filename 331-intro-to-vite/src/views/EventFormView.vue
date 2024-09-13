<script setup lang="ts">
import type { Event } from "@type";
import { ref } from 'vue';
import EventService from "@/services/EventService";
import { useRouter } from 'vue-router';

const event = ref<Event>({
  id: 0,
  category: '',
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  petsAllowed: false,
  organizer: '',
});

const router = useRouter();

function saveEvent() {
  EventService.saveEvent(event.value)
    .then((response) => {
      // Navigate to event detail view after successful save
      router.push({ name: 'event-detail-view', params: { id: response.data.id } });
    })
    .catch(() => {
      // Navigate to an error view if there's a network failure
      router.push({ name: 'network-error-view' });
    });
}
</script>

<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="saveEvent">
      <label>Category</label>
      <input v-model="event.category" type="text" placeholder="Category" class="field"/>

      <h3>Name & describe your event</h3>
      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" class="field"/>

      <label>Description</label>
      <input v-model="event.description" type="text" placeholder="Description" class="field"/>

      <h3>Where is your event?</h3>
      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Location" class="field"/>

      <button class="button" type="submit">Submit</button>
    </form>
    <pre>{{ event }}</pre> <!-- For debugging, you can remove it later -->
  </div>
</template>

<style scoped>
/* Add any necessary styles here */
.field {
  display: block;
  margin-bottom: 10px;
}
.button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
