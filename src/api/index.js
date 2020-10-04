import axios from 'axios'

const baseUrl = 'https://restcountries.eu/rest/v2'

export const getAll = async () => {
    try {
        const { data } = await axios.get(`${baseUrl}/all`);
        // console.log(data);
        return data;


    } catch (error){
        console.log(error);
    }
}
