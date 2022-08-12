import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Transferencia} from "../models/transferencias.models";
import {TransferenciasService } from "../services/transferencias.services";
@Controller('transferencias')
export class TransferenciasController{
    constructor(private transferenciasService:TransferenciasService){

    }
    //DECORETORS
    //QUANDO TIVER UMA REQUISIÇÃO DO TIPO GET
    @Get()
    async obterTodos():Promise<Transferencia[]>{
        return this.transferenciasService.obterTodos();
    }

    //PARAMETRO
    @Get(':id')
    async obterUm(@Param()params):Promise<Transferencia>
    {
        return this.transferenciasService.obterUm(params.NUMERO);
    }

    @Post()
    async criartransferencia(@Body() transferencia:Transferencia){
        this.transferenciasService.criar(transferencia);
    }

    @Put()
     async alterartransferencia(@Body() vendedor:Transferencia):Promise<[number,Transferencia[]]>{
       
        return this.transferenciasService.alterar(vendedor);
   }

    @Delete(':id')
    async apagar(@Param()params){
        this.transferenciasService.apagar(params.id)
    }
}
