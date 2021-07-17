import axios from 'axios';

const getEmails = () => {
    axios.get('https://api.hunter.io/v2/domain-search?domain=stripe.com&api_key=70e5cc02afc8eb951522b63e51de10edfe5abe4f')
    .then(response => {
        console.log(response);
        return response;
    })
}

export default getEmails;