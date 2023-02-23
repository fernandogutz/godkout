// COPIAR LÓGICA IMPLEMENTADA EN AUTH, HACER EL DISPATCH DE 

import axios from "axios";
import { setActiveElement, setElements, setLatestQueryElement, setMarks, setSuffix } from "./rankingSlice";

// Change Area
export const getElementsByAreaAndGender = (area) => {

    return (dispatch) => {

        // QUERY
        const API_ELEMENTS = `https://young-falls-69772.herokuapp.com/api/elements?filters[area][name][$eq]=${area}`;
        axios.get(API_ELEMENTS, {
            headers: {
                'Authorization': 'Bearer d97ba25bbf8bf9387c12f89d7c61a834431ae96d8e3ac72056037fdfdf337c79a6085566fbd68aa1e0b3b368e5488afd1e3672ea196d5a2b7cb33342a3b39421e2f9d1923ad479cae56ea1cb188dde89ec41f30b0508ef82904cd908e6c4a6db501fdc7ace3a8848d4023420b7c36a72175583081d49ccfb0b6bd329afc7f8c8'
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
        const API = `https://young-falls-69772.herokuapp.com/api/marks?populate=*&filters[element][name][$eq]=${element}&filters[users_permissions_user][gender][$eq]=${gender}&sort=reps:desc`;
        axios.get(API, {
            headers: {
                'Authorization': 'Bearer d97ba25bbf8bf9387c12f89d7c61a834431ae96d8e3ac72056037fdfdf337c79a6085566fbd68aa1e0b3b368e5488afd1e3672ea196d5a2b7cb33342a3b39421e2f9d1923ad479cae56ea1cb188dde89ec41f30b0508ef82904cd908e6c4a6db501fdc7ace3a8848d4023420b7c36a72175583081d49ccfb0b6bd329afc7f8c8'
            }
        }).then(response => {
            dispatch(setMarks(response.data.data))
            //console.log(response.data.data);

        }).catch(error => {

        });

    }

}


