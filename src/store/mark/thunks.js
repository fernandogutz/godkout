import axios from "axios";
import { setElements, setSuccessMsg } from "./markSlice";

// Change Area
export const createMark = (reps, element, userId, dateCreated, videoLink, jwt) => {

    return (dispatch) => {

        // QUERY
        axios.post('https://young-falls-69772.herokuapp.com/api/marks', {
            data: {
                reps: reps,
                element: element,
                verificated: "process",
                videoLinkByUser: videoLink,
                dateCreatedMark: dateCreated,
                users_permissions_user: userId
            }
        }, {
            headers: {
                'Authorization': 'Bearer ' + jwt,
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log(response.data);
            dispatch(setSuccessMsg('Marca creada correctamente'))
            

        }).catch(function (error) {
            console.log(error);
            
        });


    }

}


// Change Area
export const getElementsByArea = (area) => {

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
        }).catch(error => {

        });

    }

}


/* 
export const updateMark = (mark) => {

    return (dispatch) => {

        // QUERY
        const API_ELEMENTS = ``;
        axios.get(API_ELEMENTS, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            },
            body: {

            }

        }).then(response => {
            console.log(response.data);

        }).catch(error => {

        });

    }

}

export const deleteMark = (mark) => {

    return (dispatch) => {

        // QUERY
        const API_ELEMENTS = ``;
        axios.get(API_ELEMENTS, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            },
            body: {

            }

        }).then(response => {
            console.log(response.data);

        }).catch(error => {

        });

    }

}

export const getMark = (mark) => {

    return (dispatch) => {

        // QUERY
        const API_ELEMENTS = ``;
        axios.get(API_ELEMENTS, {
            headers: {
                'Authorization': `Bearer ${jwt}`
            },
            body: {

            }

        }).then(response => {
            console.log(response.data);

        }).catch(error => {

        });

    }

}





 */