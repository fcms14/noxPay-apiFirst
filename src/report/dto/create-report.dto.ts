import { ApiProperty } from "@nestjs/swagger";

export class CreateReportDto {
    @ApiProperty({ required: true })
    beginDate: Date;

    @ApiProperty({ required: true })
    endDate: Date;

    @ApiProperty({ required: true, enum: ['PIX', 'PIXOUT'] })
    method: string;

    @ApiProperty({ required: true, enum: ['WAITING_PAYMENT', 'PAID', 'SENDING', 'SENT', 'APROVED', 'NO_FUND', 'WRONG_PIXKEY', 'REJECTED', 'FAIL'] })
    status: string;
}
