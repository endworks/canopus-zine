import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { CinemaController } from './controllers/cinema.controller';
import { CinemaService } from './services/cinema.service';
import { TheMovieDBService } from './services/themoviedb.service';
import { ttlCache } from './utils';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: ttlCache,
      max: 128,
    }),
  ],
  controllers: [CinemaController],
  providers: [CinemaService, TheMovieDBService],
})
export class AppModule {}
