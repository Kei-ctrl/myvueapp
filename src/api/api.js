// src/api/posts.js
import axios from 'axios';

export const getPosts = () => axios.get('/api/posts/');
export const createPost = (post) => axios.post('/api/posts/', post);
