"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
/**
 * define first route
 */
app.get('/', (req, res) => {
    //send hello world
    res.send('APP Express +nodemon +TS + Swagger');
});
app.get('/hello', (req, res) => {
    //send hello world
    res.send('Hello World');
});
//Execute APp
app.listen(port, () => console.log(`Express Server Running at http://localhost:${8000}`));
//# sourceMappingURL=index.js.map