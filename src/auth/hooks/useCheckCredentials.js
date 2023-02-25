

export const useCheckCredentials = async (identifier, password) => {

    let fetchData = {}
    const urlApi = 'https://young-falls-69772.herokuapp.com/api/auth/local/';

        await postData(urlApi, identifier, password )
            .then(response => response.json())
            .then( (response) => {
                if (response.error) {
                    const {message} = response.error;
                    fetchData = {
                        jwt: false,
                        error: message
                    }
                } else if(response.jwt) {
                    fetchData = {
                        jwt: response.jwt,
                        id: response.user.id,
                        email: response.user.email,
                        displayName: response.user.displayName,
                        username: response.user.username,
                        error: null,
                        profileImg: response.user.profileImg
                    }

                    console.log(fetchData);

                }

            })
    return fetchData;
}

const postData = (urlApi, identifier, password) => {
    const response = fetch(urlApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "identifier": identifier,
            "password": password
        })

    });

    return response;
}
