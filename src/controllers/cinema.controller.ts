import { Controller } from '@nestjs/common';
import { MessagePattern, Payload, Transport } from '@nestjs/microservices';
import { IdPayload } from 'src/models/common.interface';
import { CinemaService } from 'src/services/cinema.service';

@Controller()
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @MessagePattern('cinemas', Transport.TCP)
  async cinemas() {
    return this.cinemaService.getCinemas();
  }

  @MessagePattern('cinema', Transport.TCP)
  async cinema(@Payload() data: IdPayload) {
    return this.cinemaService.getCinema(data.id);
  }

  @MessagePattern('cinema/pro', Transport.TCP)
  async cinemaPro(@Payload() data: IdPayload) {
    return this.cinemaService.getCinemaPro(data.id);
  }
}
