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
                'Authorization': 'Bearer d495ac444c97705426de225b8662ee59f513591c0331f96e4dbc02b9c864d7de4eb074c4f235084e4f76b8e95ccd29add566b64127441338aab77dca26c9fca06673a4c318799fae177c7c4b9db3ac7e20f2c09486fae02abeceb501fdbd412296f15c05f5706fbbb61e2afc3ecf868077bd5b48d0770054c220d76082fe1314'
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
                'Authorization': 'Bearer d495ac444c97705426de225b8662ee59f513591c0331f96e4dbc02b9c864d7de4eb074c4f235084e4f76b8e95ccd29add566b64127441338aab77dca26c9fca06673a4c318799fae177c7c4b9db3ac7e20f2c09486fae02abeceb501fdbd412296f15c05f5706fbbb61e2afc3ecf868077bd5b48d0770054c220d76082fe1314'
            }
        }).then(response => {
            dispatch(setMarks(response.data.data))
            //console.log(response.data.data);

        }).catch(error => {

        });

    }

}


