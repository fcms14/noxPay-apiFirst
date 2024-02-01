import { Injectable } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';

@Injectable()
export class ReportService {
  transactions(apiKey: string, createReportDto: CreateReportDto) {
    return Report.get(apiKey, createReportDto);
  }
}
