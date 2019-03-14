const axios = require('axios');

const config = require('../../../config/config');
const keyManagerServer = config.jwtTokenMangaerService.url;
const errors = require('../utility/errors');

async function create(user) {
    try {
        const result = await axios.post(`${keyManagerServer}/create`, {
            user: user
        });
        return result.data.data;
    } catch (e) {
        throw new errors.InvalidData(errors.ErrorFilter(e));
    }
}

async function read(user) {
    try {
        const result = await axios.post(`${keyManagerServer}/read`, {
            user: user
        });
        return result.data.data;
    } catch (e) {
        throw new errors.InvalidData(errors.ErrorFilter(e));
    }
}

async function update(user) {
    try {
        const result = await axios.put(`${keyManagerServer}/update`, {
            user: user
        });
        return result.data.data;
    } catch (e) {
        throw new errors.InvalidData(errors.ErrorFilter(e));
    }
}

async function remove(user) {
    try {
        const result = await axios.delete(`${keyManagerServer}/remove`, {
            user: user
        });
        return result.data.data;
    } catch (e) {
        throw new errors.InvalidData(errors.ErrorFilter(e));
    }
}

module.exports = {
    create,
    read,
    update,
    remove,
};
