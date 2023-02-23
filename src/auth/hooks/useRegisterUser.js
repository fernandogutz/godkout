
export const useRegisterUser = async (email, username, password, getAds) => {

    let fetchData = {}
    const urlApi = 'https://young-falls-69772.herokuapp.com/api/users';

        await postData(urlApi, email, username, password, getAds )
            .then(response => response.json())
            .then( (response) => {
                if (response.error) {
                    const {message} = response.error;
                    fetchData = {
                        email: false,
                        error: message
                    }
                } else if(response.email) {
                    fetchData = {
                        email: response.email,
                        error: null
                    }

                }

            })
            
    return fetchData;
}

const postData = (urlApi, email, username, password, getAds) => {
    const response = fetch(urlApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer d97ba25bbf8bf9387c12f89d7c61a834431ae96d8e3ac72056037fdfdf337c79a6085566fbd68aa1e0b3b368e5488afd1e3672ea196d5a2b7cb33342a3b39421e2f9d1923ad479cae56ea1cb188dde89ec41f30b0508ef82904cd908e6c4a6db501fdc7ace3a8848d4023420b7c36a72175583081d49ccfb0b6bd329afc7f8c8"
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "role": 3,
            "confirmed": true,
            "getAds": getAds
            
        })

    });

    return response;
}
