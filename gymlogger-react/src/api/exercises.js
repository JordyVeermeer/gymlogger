import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/exercises`;

export const getAll = async () => {
    const { data } = await axios.get(baseUrl);
    console.log(data);
    return data;
};

export const getByName = async (name) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/exercise?name=${name}`);
    console.log('in api call: ' + data);
    return data;
}