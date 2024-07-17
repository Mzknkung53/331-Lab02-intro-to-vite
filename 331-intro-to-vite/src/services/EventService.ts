import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/mzknkung53/652115008/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(): Promise<AxiosResponse<EventItem[]>> {
        return apiClient.get<EventItem[]>('/events')
    },
    getEventById(id: number): Promise<AxiosResponse<EventItem>>{
        return apiClient.get<EventItem>('events/' + id.toString())
    }
}