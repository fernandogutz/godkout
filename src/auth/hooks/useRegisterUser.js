
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
            "Authorization": "bearer d495ac444c97705426de225b8662ee59f513591c0331f96e4dbc02b9c864d7de4eb074c4f235084e4f76b8e95ccd29add566b64127441338aab77dca26c9fca06673a4c318799fae177c7c4b9db3ac7e20f2c09486fae02abeceb501fdbd412296f15c05f5706fbbb61e2afc3ecf868077bd5b48d0770054c220d76082fe1314"
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
