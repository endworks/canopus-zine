import { Controller, Logger } from '@nestjs/common';
import { MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { IdPayload } from 'src/models/common.interface';
import { CinemaService } from 'src/services/cinema.service';

@Controller()
export class CinemaController {
  private readonly logger = new Logger('CinemaController');

  constructor(private readonly cinemaService: CinemaService) {}

  @MessagePattern('cinemas', Transport.TCP)
  async cinemas() {
    return this.cinemaService.getCinemas().catch((ex) => {
      this.logger.error(ex.message);
      return ex.response;
    });
  }

  @MessagePattern('cinema', Transport.TCP)
  async cinema(@Payload() data: IdPayload) {
    return this.cinemaService.getCinema(data.id).catch((ex) => {
      this.logger.error(ex.message);
      return ex.response;
    });
  }

  @MessagePattern('cinema/pro', Transport.TCP)
  async cinemaPro(@Payload() data: IdPayload) {
    return this.cinemaService.getCinemaPro(data.id).catch((ex) => {
      this.logger.error(ex.message);
      return ex.response;
    });
  }
}
