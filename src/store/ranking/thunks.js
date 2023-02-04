// COPIAR LÓGICA IMPLEMENTADA EN AUTH, HACER EL DISPATCH DE 

import axios from "axios";
import { setActiveElement, setElements, setLatestQueryElement, setMarks, setSuffix } from "./rankingSlice";

// Change Area
export const getElementsByAreaAndGender = (area) => {

    return (dispatch) => {

        // QUERY
        const API_ELEMENTS = `http://localhost:1337/api/elements?filters[area][name][$eq]=${area}`;
        axios.get(API_ELEMENTS, {
            headers: {
                'Authorization': 'Bearer 75205b7aea651ba25f9b97fe5a9b524b9c8f281ee3fd0e4df90069bdcdec9de758498b7301e837dd23e0fade54eeca3c58fe7fa2c879671a279cd776d7bd0fd1f7272e37640cb32e36a4d428631dc022ae470cf9d920981acd21d08afe9fb58c48e76b8a1fb768bb11a52a8afb182d86abb6395779dd3601ef130c644dfc9dfa'
            }
        }).then(response => {
            //console.log(response.data.data);
            //console.log(response.data.data[0].attributes.name);
            dispatch(setElements(response.data.data));
            dispatch(setActiveElement(response.data.data[0].attributes.name));

        }).catch(error => {

        });

    }

}

export const getMarksByElements = (element, gender, area) => {

    return (dispatch) => {

        //console.log('thunks.js: Element '+element)

        // Establecer el Active Element y poner estado de carga
        dispatch(setActiveElement(element));

        // Establecer el latestQueryElement (es el mismo que se setea arriba, recordar que esta función se ejecuta luego de hacer click en Apply Filter Btn) y poner estado de carga
        dispatch(setLatestQueryElement(element));

        // Definir sufijo (reps - kgs - seg)
        if(area === 'Reps BW') {
            dispatch(setSuffix('Reps'));
        } else if (area === 'Lifting') {
            dispatch(setSuffix('Kgs'));
        } else if (area === 'Statics') { 
            dispatch(setSuffix('Segundos'))
        }


        
        // QUERY
        const API = `http://localhost:1337/api/marks?populate=*&filters[element][name][$eq]=${element}&filters[users_permissions_user][gender][$eq]=${gender}&sort=reps:desc`;
        axios.get(API, {
            headers: {
                'Authorization': 'Bearer 75205b7aea651ba25f9b97fe5a9b524b9c8f281ee3fd0e4df90069bdcdec9de758498b7301e837dd23e0fade54eeca3c58fe7fa2c879671a279cd776d7bd0fd1f7272e37640cb32e36a4d428631dc022ae470cf9d920981acd21d08afe9fb58c48e76b8a1fb768bb11a52a8afb182d86abb6395779dd3601ef130c644dfc9dfa'
            }
        }).then(response => {
            dispatch(setMarks(response.data.data))
            //console.log(response.data.data);

        }).catch(error => {

        });

    }

}


