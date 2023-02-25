import axios from "axios";
import { setActiveElement, setElements, setSuccessMsg } from "./markSlice";

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
                'Authorization': 'Bearer d495ac444c97705426de225b8662ee59f513591c0331f96e4dbc02b9c864d7de4eb074c4f235084e4f76b8e95ccd29add566b64127441338aab77dca26c9fca06673a4c318799fae177c7c4b9db3ac7e20f2c09486fae02abeceb501fdbd412296f15c05f5706fbbb61e2afc3ecf868077bd5b48d0770054c220d76082fe1314'
            }
        }).then(response => {
            //console.log(response.data.data);
            //console.log(response.data.data[0].attributes.name);
            dispatch(setElements(response.data.data));
            dispatch(setActiveElement(response.data.data[0].id));
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