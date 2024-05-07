import axios from 'axios';

const BASE_URL = 'http://fhirserver.hl7fundamentals.org/fhir';

export const fhirApiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getMetadata = async () => {
    try {
        const response = await fhirApiClient.get('/metadata');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const getPatients = async () => {
    try {
        const response = await fhirApiClient.get('/Patient');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const postSomeData = async (data: any) => {
    try {
        const response = await fhirApiClient.post('/some-endpoint', data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};
