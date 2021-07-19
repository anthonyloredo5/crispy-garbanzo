import axios from 'axios';

const getEmails = () => {
    var response;
    axios.get('https://api.hunter.io/v2/domain-search?domain=stripe.com&api_key=70e5cc02afc8eb951522b63e51de10edfe5abe4f')
    .then(response => {
        console.log(response, "response");
        console.log(response.data.data, "response.data.data");
        console.log(response.data.data.emails, "response.data.data.emails");
        response = response.data.data.emails;
    })
    console.log(response, " should be response ");
    return response;
}

export default getEmails;