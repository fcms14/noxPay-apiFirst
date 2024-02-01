import { ApiProperty } from "@nestjs/swagger";

export class TestAuthDto {
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    perm: number;
}
