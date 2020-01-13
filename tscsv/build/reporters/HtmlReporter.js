"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var HtmlReporter = /** @class */ (function () {
    function HtmlReporter() {
    }
    HtmlReporter.prototype.print = function (report) {
        var html = "\n      <div>\n        <h1>Analysis Reporter</h1>\n        <div>" + report + "</div>\n      </div>\n    ";
        fs_1.default.writeFileSync('report.html', html);
    };
    return HtmlReporter;
}());
exports.HtmlReporter = HtmlReporter;
