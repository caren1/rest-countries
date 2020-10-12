import axios from 'axios'

const baseUrl = 'https://restcountries.eu/rest/v2'

export const fetchAll = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/all`);
        // console.log(data);
        return data;
        
    } catch (error){
        console.log(error);
    }
}


export const fetchOne = async (country) => {
    try {
        const { data } = await axios.get(`${baseUrl}/alpha/${country}`)
        return data;
    }catch (error) {
        console.log(error);
    }
}
