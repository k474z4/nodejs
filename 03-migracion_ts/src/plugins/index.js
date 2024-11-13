const { getUUID } = require('../plugins/uuid.plugin');
const { getAge } = require('../plugins/get-age.plugin');
const { http } = require('./http-client.plugin')

module.exports = {
    getAge,
    getUUID,
    http,
}