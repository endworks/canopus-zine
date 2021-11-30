import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CinemaController } from './controllers/cinema.controller';
import { CinemaService } from './services/cinema.service';

@Module({
  imports: [HttpModule],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class AppModule {}
