"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleReporter_1 = require("./reporters/ConsoleReporter");
var WinsAnalyzer_1 = require("./analyzers/WinsAnalyzer");
var Summary = /** @class */ (function () {
    function Summary(analyzer, reporter) {
        this.analyzer = analyzer;
        this.reporter = reporter;
    }
    Summary.winsAnalysisWithConsoleReporter = function (teamName) {
        return new Summary(new WinsAnalyzer_1.WinsAnalyzer(teamName), new ConsoleReporter_1.ConsoleReporter());
    };
    Summary.prototype.buildAndPrintReport = function (matches) {
        var report = this.analyzer.run(matches);
        this.reporter.print(report);
    };
    return Summary;
}());
exports.Summary = Summary;
