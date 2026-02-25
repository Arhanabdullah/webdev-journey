import axios from "axios";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_ACCESS_KEY = import.meta.env.VITE_PEXELS_KEY;

export async function getPhotos(query, page, per_page = 20) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page },
        headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
        }
    })
    return response.data.results

}
export async function getVideos(query, page, per_page = 20) {
    const response = await axios.get('https://api.pexels.com/videos/search', {
        params: { query, page, per_page },
        headers: {
            Authorization: PEXELS_ACCESS_KEY
        }
    })
    return response.data;
        
}