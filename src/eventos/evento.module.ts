import { Module } from '@nestjs/common';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
// Mongoose
import { MongooseModule } from '@nestjs/mongoose';
import { EventosSchema } from './schemas/eventos.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Evento', schema: EventosSchema}])],
  providers: [EventoService],
  controllers: [EventoController]
})
export class EventoModule {}
