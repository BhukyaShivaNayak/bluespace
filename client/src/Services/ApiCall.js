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
        const response = await axios(config);
        return response;
    } catch (error) {

        console.error(error);
        return { error: error.message };
    }
};

