import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportService {
  transactions(
    apiKey: string,
    createReportDto: CreateReportDto,
  ): Promise<Report> {
    return Report.get(apiKey, createReportDto);
  }
}
