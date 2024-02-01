import { Controller, Post, Body, Headers } from '@nestjs/common';
import { ReportService } from './report.service';
import { CreateReportDto } from './dto/create-report.dto';
import { ReportDto } from './dto/report.dto';
import { ApiCreatedResponse, ApiHeader, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('report')
@ApiHeader({ name: 'Api-Key', required: true })
@ApiUnauthorizedResponse({ description: 'Error: Unauthorized'})
@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) { }

  @ApiCreatedResponse({ description: 'Success response', type: ReportDto })
  @Post('transactions')
  transactions(@Body() createReportDto: CreateReportDto, @Headers() headers: Record<string, string>) {
    const apiKey = headers['api-key']

    return this.reportService.transactions(apiKey, createReportDto);
  }
}
