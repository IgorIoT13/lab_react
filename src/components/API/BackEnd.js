import axios from 'axios';

const RESOURCE_URL = 'http://localhost:8080/Element';

const baseRequest = async ({ urlPath = '', method = 'GET', data = null }) => {
    try {
        const config = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (data) {
            config.data = data;
        }

        const response = await axios(`${RESOURCE_URL}${urlPath}`, config);
        return response.data;
    } catch (error) {
        console.error('HTTP ERROR: ', error);
    }
};

// public functionality

export const getAlllight = async () => {
    return await baseRequest({ urlPath: '/all' });
};

export const findElementById = async (id) => {
    return await baseRequest({ urlPath: `?id=${id}`, method: 'GET' });
};

export const findElementByTitle = async (title) => {
    return await baseRequest({ urlPath: `/find?title=${title}`, method: 'GET' });
};

export const filter = async (type,title, max) => {
    return await baseRequest({
        urlPath: `/filter?type=${type}&title=${title}&max=${max}`,
        method: 'GET'
    });
};