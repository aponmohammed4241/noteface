import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// প্রতি রিকোয়েস্টে টোকেন যোগ করা
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const signIn = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/signup', formData);
