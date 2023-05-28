"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleClient = exports.scheduleMethods = exports.schedulePath = void 0;
exports.schedulePath = 'schedule';
exports.scheduleMethods = ['find', 'get', 'create', 'patch', 'remove'];
const scheduleClient = (client) => {
    const connection = client.get('connection');
    client.use(exports.schedulePath, connection.service(exports.schedulePath), {
        methods: exports.scheduleMethods
    });
};
exports.scheduleClient = scheduleClient;
