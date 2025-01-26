"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const db = new pg_1.default.Client({
    user: "postgres",
    host: "localhost",
    database: "nextweb",
    password: "020784",
    port: 5432
});
exports.default = db;
