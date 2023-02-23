import axios from "axios";


const useGetMarks = async(API) => {

    const marks = [];

    await axios.get(API, {
        headers: {
            'Authorization': 'Bearer d495ac444c97705426de225b8662ee59f513591c0331f96e4dbc02b9c864d7de4eb074c4f235084e4f76b8e95ccd29add566b64127441338aab77dca26c9fca06673a4c318799fae177c7c4b9db3ac7e20f2c09486fae02abeceb501fdbd412296f15c05f5706fbbb61e2afc3ecf868077bd5b48d0770054c220d76082fe1314'
        }
    }).then(response => {
        marks = response.data.data;
    }).catch(error => {
        // Aquí puedes manejar cualquier error que ocurra durante la solicitud
    });

    return marks;
}

export default useGetMarks;
