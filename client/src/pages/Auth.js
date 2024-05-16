import axios from "axios";

async function getAccesstoken(){
    return axios.get('https://26.59.203.33:8080/token')
    .then((response) => {
        return response.data;
    })
    .catch((err) => {
        console.log(err);
    })
};

const Client = {getAccesstoken};
export default Client;