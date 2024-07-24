<script setup lang="ts">
import type { Event } from '@/type'
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
  event: Event
}>()

const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const edit = () => {

  store.updateMessage('Event ' + props.event.title + 'has been update.')
  setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
}
</script>

<template>
  <button @click="edit">Edit</button>
</template>