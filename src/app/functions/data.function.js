"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataFunction = void 0;
class DataFunction {
    constructor() {
        this.locations = [];
        DataFunction.Data = DataFunction.Data ? DataFunction.Data : this;
        return DataFunction.Data;
    }
}
exports.DataFunction = DataFunction;
