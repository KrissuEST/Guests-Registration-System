import axios from 'axios';

const EVENT_API_BASE_URL = "http://localhost:8080/api/events";

export const getEvents = () => axios.get(EVENT_API_BASE_URL);

export const createEvent = (event) => axios.post(EVENT_API_BASE_URL, event);