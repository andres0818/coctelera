import axios from "axios";

const api = axios.create({
    baseURL: "www.thecocktaildb.com/api/json/v1/1/filter.php?"
})


export const getApi = async () => {
    try {
        const response = await api.get('a=Alcoholic');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}