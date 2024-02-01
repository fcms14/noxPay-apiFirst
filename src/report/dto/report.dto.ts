import { ApiProperty } from "@nestjs/swagger";

export class ReportDto {
    @ApiProperty()
    hash: string
}