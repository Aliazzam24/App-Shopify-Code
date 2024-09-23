import axios from 'axios';

export async function updateVisitor(url, data) {
    try {
        const response = await axios.post(url, data);
        return response;
    } catch (error) {
        console.error(error);
    }
}
