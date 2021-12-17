import { HttpModule } from '@nestjs/axios';
import { CacheModule, Module } from '@nestjs/common';
import { CinemaController } from './controllers/cinema.controller';
import { CinemaService } from './services/cinema.service';
import { TheMovieDBService } from './services/themoviedb.service';
import { cacheMaxSize, cacheTTL } from './utils';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: cacheTTL,
      max: cacheMaxSize,
    }),
  ],
  controllers: [CinemaController],
  providers: [CinemaService, TheMovieDBService],
})
export class AppModule {}
