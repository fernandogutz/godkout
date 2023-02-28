import axios from "axios";

export const fetchPost =  (endpoint, token, postData) => {
    
    axios.post(endpoint, {
        postData
    }, {
        headers: {
            "Authorization": `bearer ${token}`,
            "Content-Type": "application/json",
        }
    }).then(function (response) {
        console.log(response.data);

    }).catch(function (error) {
        console.log(error);
        
    });

}