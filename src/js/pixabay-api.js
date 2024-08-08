export function fetchImages(query, page) {
const API_KEY = '45342411-abd0b05e060740fccafff2238';
const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&page=${page}&per_page=12`;
        return fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();  
        })
        .then(data => {
            return data; 
        })
        .catch(error => {
            console.error('Error fetching images:', error);
            throw error;  
                });
}
