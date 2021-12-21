import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { EventoService } from  "./evento.service";

import { CreateEventosDTO } from "./dto/eventos.dto";

@Controller('evento')
export class EventoController {

    constructor(private eventoService: EventoService) { }

    // Add Evento: /evento/create
    @Post('/create')
    async createEvento(@Res() res, @Body() createEventosDTO: CreateEventosDTO) {
        const envento = await this.eventoService.createEvento(createEventosDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Event Successfully Created',
            evento: envento
        });
    }

    // Get Eventos /evento
    // @Get('/list')
    @Get('/')
    async getEventos(@Res() res) {
        const eventos = await this.eventoService.getEventos();
        return res.status(HttpStatus.OK).json(eventos);
    }

    // GET single evento: /evento/5c9d46100e2e5c44c444b2d1
    @Get('/:eventoID')
    async getEvento(@Res() res, @Param('eventoID') eventoID) {
        const evento = await this.eventoService.getEvento(eventoID);
        if (!evento) throw new NotFoundException('Event does not exist!');
        return res.status(HttpStatus.OK).json(evento);
    }

    // Delete Evento: /delete?eventoID=5c9d45e705ea4843c8d0e8f7
    @Delete('/delete')
    async deleteEvento(@Res() res, @Query('eventoID') eventoID) {
        const eventoDeleted = await this.eventoService.deleteEvento(eventoID);
        if (!eventoDeleted) throw new NotFoundException('Event does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Event Deleted Successfully',
            eventoDeleted
        });
    }

    // Update Evento: /update?eventoID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateEvento(@Res() res, @Body() createEventoDTO: CreateEventosDTO, @Query('eventoID') eventoID) {
        const updatedEvento = await this.eventoService.updateEvento(eventoID, createEventoDTO);
        if (!updatedEvento) throw new NotFoundException('Event does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'Event Updated Successfully',
            updatedEvento 
        });
    }

}
