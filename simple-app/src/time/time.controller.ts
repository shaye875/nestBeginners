import { Controller,Get } from '@nestjs/common';

@Controller('time')
export class TimeController {
    @Get()
    getTime():string{
        return String(new Date())
    }
}
