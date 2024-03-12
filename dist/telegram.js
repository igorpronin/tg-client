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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telegram = void 0;
const axios_1 = __importDefault(require("axios"));
class Telegram {
    constructor(params) {
        const { token, admin_id, env } = params;
        this.api_url = `https://api.telegram.org/bot${token}`;
        this.token = token;
        this.admin_id = admin_id;
        this.env = env;
    }
    send_message(chat_id, msg, is_env_msg) {
        return __awaiter(this, void 0, void 0, function* () {
            let text = msg;
            if (is_env_msg) {
                text += `\n===\nEnvironment: ${this.env}`;
            }
            return axios_1.default.post(`${this.api_url}/sendMessage`, {
                chat_id,
                text
            });
        });
    }
    send_message_to_admin(msg, is_env_msg) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.send_message(this.admin_id, msg, is_env_msg);
        });
    }
}
exports.Telegram = Telegram;
