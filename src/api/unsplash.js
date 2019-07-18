import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 70bf7226ca96b5934ac7ee49a1a71d171b56992a5f192c0d8c8d4fc999e6695d' 
    }
});