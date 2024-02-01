import { HttpService } from 'src/services/http.service';
import { CreateReportDto } from '../dto/create-report.dto';

export class Report {
  constructor(public hash: string) {}

  static async get(
    apiKey: string,
    createReportDto: CreateReportDto,
  ): Promise<Report> {
    const response = await HttpService.post<Report>(
      apiKey,
      'report/transactions',
      createReportDto,
    );

    return new Report(response.toString());
  }
}
