class Client {
    getDataTrip = function() {
        return fetch('./response.json', {
            method: 'GET'
        });
    }
}

export default new Client();