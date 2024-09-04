/*import axios from 'axios';

export const commonrequest = async (methods, url, body, header) => {
    const config = {
        method: methods,
        url,
        headers: header || {
            "Content-Type": "application/json"
        },
        data: body
    };

    try {
        const response = await axios(config);
        return response;
    } catch (error) {

        console.error(error);
        return { error: error.message };
    }
};
*/

import axios from 'axios';

export const commonrequest = async (methods, url, body, header) => {
    const config = {
        method: methods,
        url,
        headers: header || {
            "Content-Type": "application/json"
        },
        data: body
    };

    try {
        console.log('Request Config:', config); // Log request configuration
        const response = await axios(config);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Response Error:', {
                status: error.response.status,
                statusText: error.response.statusText,
                data: error.response.data,
                headers: error.response.headers
            });
        } else if (error.request) {
            console.error('Request Error:', {
                request: error.request
            });
        } else {
            console.error('Error Message:', error.message);
        }
        return { error: error.message };
    }
};
