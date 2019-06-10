import axios from 'axios';

const KEY = 'AIzaSyDw6cJnCQ5ZPVx7EufX1G40jkZ_K-Ad1So';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});

