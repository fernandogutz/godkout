import axios from "axios";
import { setElements, setSuccessMsg } from "./markSlice";

// Change Area
export const createMark = (reps, element, userId, dateCreated, videoLink, jwt) => {

    return (dispatch) => {

        // QUERY
        axios.post('http://localhost:1337/api/marks', {
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
        const API_ELEMENTS = `http://localhost:1337/api/elements?filters[area][name][$eq]=${area}`;
        axios.get(API_ELEMENTS, {
            headers: {
                'Authorization': 'Bearer 75205b7aea651ba25f9b97fe5a9b524b9c8f281ee3fd0e4df90069bdcdec9de758498b7301e837dd23e0fade54eeca3c58fe7fa2c879671a279cd776d7bd0fd1f7272e37640cb32e36a4d428631dc022ae470cf9d920981acd21d08afe9fb58c48e76b8a1fb768bb11a52a8afb182d86abb6395779dd3601ef130c644dfc9dfa'
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