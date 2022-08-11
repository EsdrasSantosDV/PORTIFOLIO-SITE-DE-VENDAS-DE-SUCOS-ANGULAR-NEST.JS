import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Notas_Fiscais } from "../models/notas_fiscais.models";
import {Notas_FiscaisService } from "../services/notas_fiscais.services";
@Controller('notas_fiscais')
export class Notas_FiscaisController{
    constructor(private notas_fiscaisService:Notas_FiscaisService){

    }
   

    //DECORETORS
    //QUANDO TIVER UMA REQUISIÇÃO DO TIPO GET
    @Get()
    async obterTodos():Promise<Notas_Fiscais[]>{
        return this.notas_fiscaisService.obterTodos();
    }

    //PARAMETRO
    @Get(':NUMERO')
    async obterUm(@Param()params):Promise<Notas_Fiscais>
    {
        return this.notas_fiscaisService.obterUm(params.NUMERO);
    }

    @Post()
    async criarvendedor(@Body() vendedor:Notas_Fiscais){
        
        this.notas_fiscaisService.criar(vendedor);
    }

    @Put()
     async alterarvendedor(@Body() vendedor:Notas_Fiscais):Promise<[number,Notas_Fiscais[]]>{
       
        return this.notas_fiscaisService.alterar(vendedor);
   }

    @Delete(':NUMERO')
    async apagar(@Param()params){
        this.notas_fiscaisService.apagar(params.NUMERO)
    }
}
