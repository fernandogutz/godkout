import { useState, useEffect } from "react"; //Se importa desde react
import axios from "axios"; //Con axios vamos a realizar las peticiones


const useFetch = (endpoint) => {
    const [data, setData] = useState([]); //Array vacío

    async function fetchData(){
        const response = await axios.get(endpoint); //Llamado
        setData(response.data);
    }
    //useEffect permite ejecutar el llamado cuando se necesite
    useEffect(() => {
        try {
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }, []); //El array debe estar vacío cuando no se usa Pagination

    return data;
};

export default useFetch;