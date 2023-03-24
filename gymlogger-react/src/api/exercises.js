import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_API_URL}/exercises`;

export const getAll = async () => {
    const response = await axios.get(baseUrl);
    console.log(response);
};