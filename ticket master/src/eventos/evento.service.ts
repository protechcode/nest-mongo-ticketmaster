import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Eventos } from "./interfaces/event.interface";
import { CreateEventosDTO } from "./dto/eventos.dto";

@Injectable()
export class EventoService {

    constructor(@InjectModel('Evento') private readonly eventoModel: Model<Eventos>) {}

    // Get all Eventos
    async getEventos(): Promise<Eventos[]> {
        const eventos = await this.eventoModel.find();
        return eventos;
    }
    
    // Get a single Evento
    async getEvento(eventoID: string): Promise<Eventos> {
        const evento = await this.eventoModel.findById(eventoID); 
        return evento;
    }

    // Post a single evento
    async createEvento(createEventosDTO: CreateEventosDTO): Promise<Eventos> {
        const newEvento = new this.eventoModel(createEventosDTO);
        return newEvento.save();
    }

    // Delete Evento
    async deleteEvento(eventoID: string): Promise<Eventos> {
        const deletedEventos = await this.eventoModel.findOneAndDelete(eventoID);
        return deletedEventos;
    }

    // Put a single event
    async updateEvento(eventoID: string, createEventosDTO: CreateEventosDTO): Promise<Eventos> {
        const updatedEvento = await this.eventoModel
                            .findByIdAndUpdate(eventoID, createEventosDTO, {new: true});
        return updatedEvento;
    }

}
