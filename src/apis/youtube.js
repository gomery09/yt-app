import axios from 'axios'
const KEY = 'AIzaSyDPo5AfB5kzuPTsI66fdCBgxH2lKrUTYSU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});


