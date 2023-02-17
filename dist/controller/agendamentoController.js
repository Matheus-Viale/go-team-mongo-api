"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Agendamento_1 = require("../database/schemas/Agendamento");
class AgendamentoController {
    find(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const agendamentos = yield Agendamento_1.default.find();
                return response.json(agendamentos);
            }
            catch (error) {
                return response.status(500).send({
                    error: "Query failed",
                    message: error
                });
            }
        });
    }
    findOne(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const diaAgendamento = request.query['diaAgendamento'];
            if (!diaAgendamento) {
                return response.status(404).send({
                    error: "Parameter not informed",
                    message: "This Query need the 'diaAgendamento' parameter"
                });
            }
            try {
                const agendamento = yield Agendamento_1.default.findOne({
                    diaAgendamento
                });
                if (agendamento) {
                    return response.json(agendamento);
                }
                else {
                    return response.status(404).send({
                        error: "Agendamento not found",
                        message: "None Agendamento was found to this date."
                    });
                }
            }
            catch (error) {
                return response.status(500).send({
                    error: "Query failed",
                    message: error
                });
            }
        });
    }
}
exports.default = new AgendamentoController();
