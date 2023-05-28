"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const schedule_1 = require("./schedule/schedule");
const users_1 = require("./users/users");
const services = (app) => {
    app.configure(schedule_1.schedule);
    app.configure(users_1.users);
    // All services will be registered here
};
exports.services = services;
