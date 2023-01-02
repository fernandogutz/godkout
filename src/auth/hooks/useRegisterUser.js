
export const useRegisterUser = async (email, username, password, getAds) => {

    let fetchData = {}
    const urlApi = 'http://localhost:1337/api/users';

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
            "Authorization": "bearer 75205b7aea651ba25f9b97fe5a9b524b9c8f281ee3fd0e4df90069bdcdec9de758498b7301e837dd23e0fade54eeca3c58fe7fa2c879671a279cd776d7bd0fd1f7272e37640cb32e36a4d428631dc022ae470cf9d920981acd21d08afe9fb58c48e76b8a1fb768bb11a52a8afb182d86abb6395779dd3601ef130c644dfc9dfa"
        },
        body: JSON.stringify({
            "username": username,
            "password": password,
            "email": email,
            "role": 6,
            "confirmed": true,
            "getAds": getAds
            
        })

    });

    return response;
}
