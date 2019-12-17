
    export default function initAdmin(mock) {

        mock.onGet('/api/admin').reply(function(config) {
        
            const admin = { 'admin': true };

            console.log('Got `GET /api/admin` request with data: ', config.data);
            console.log('Will respond with data: ', admin);

            return [200, admin];
        });
    };