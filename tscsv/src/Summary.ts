import { MatchData } from "./MatchData";
import { ConsoleReporter } from "./reporters/ConsoleReporter";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface Reporter {
  print(report: string): void;
}

export class Summary {
  constructor(
    public analyzer: Analyzer,
    public reporter: Reporter,
  ) {}

  static winsAnalysisWithConsoleReporter(teamName: string): Summary {
    return new Summary(
      new WinsAnalyzer(teamName),
      new ConsoleReporter(),
    );
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.reporter.print(report);
  }
}