import fs from 'fs';
import { Reporter } from "../Summary";

export class HtmlReporter implements Reporter {
  print(report: string): void {
    const html = `
      <div>
        <h1>Analysis Reporter</h1>
        <div>${report}</div>
      </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}