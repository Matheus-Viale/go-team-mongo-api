"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const agendamentoController_1 = require("./controller/agendamentoController");
const routes = (0, express_1.Router)();
routes.get('/agendamento', agendamentoController_1.default.findOne);
routes.get('/agendamentos', agendamentoController_1.default.find);
exports.default = routes;
