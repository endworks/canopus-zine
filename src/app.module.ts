import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { CinemaController } from './controllers/cinema.controller';
import { CinemaService } from './services/cinema.service';
import { TheMovieDBService } from './services/themoviedb.service';

@Module({
  imports: [HttpModule, CacheModule.register()],
  controllers: [CinemaController],
  providers: [CinemaService, TheMovieDBService],
})
export class AppModule {}
