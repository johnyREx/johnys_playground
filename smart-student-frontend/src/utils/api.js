import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com';

export const getTasks = () => axios.get(`${API_BASE_URL}/tasks`);
export const saveTask = (task) => axios.post(`${API_BASE_URL}/tasks`, task);

export const getReminders = () => axios.get(`${API_BASE_URL}/reminders`);
export const saveReminder = (reminder) => axios.post(`${API_BASE_URL}/reminders`, reminder);
