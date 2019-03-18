const axios = require('axios');

const config = require('../../config/config');

const slackUrl = config.slack.contact_us_bot_webhook;

async function contact(data) {
    const result = await axios.post(`${slackUrl}`, data);
    return result;
}

module.exports = {
    contact,
};
