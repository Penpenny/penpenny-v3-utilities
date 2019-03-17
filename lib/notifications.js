const axios = require('axios');

const config = require('../../../config/config');
const notificationService = config.notificationService.url;

async function email(data) {
    const result = await axios.post(`${notificationService}/email`, data);
    return result.data.data;
}

async function pushnotification(data) {
    const result = await axios.post(`${notificationService}/pushnotification`, data);
    return result.data.data;
}

module.exports = {
    email,
    pushnotification,
};
