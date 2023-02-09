import Axios from "axios";

 const api = Axios.create({
    baseURL: "https://www.thecocktaildb.com"
})
 

export const getApi = async () => {
    try {
        const response = await api.get('/api/json/v1/1/filter.php?a=Alcoholic');
        return response.data.drinks;
    } catch (error) {
        console.log(error);
    }
}

