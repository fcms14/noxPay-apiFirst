import { Controller, Post, Body, Headers } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';

@ApiTags('report')
@ApiHeader({ name: 'Api-Key', required: true })
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) { }

  @Post('transactions')
  transactions(@Body() createReportDto: CreateReportDto, @Headers() headers: Record<string, string>) {
    const apiKey = headers['api-key']

    return this.reportService.transactions(apiKey, createReportDto);
  }
}
