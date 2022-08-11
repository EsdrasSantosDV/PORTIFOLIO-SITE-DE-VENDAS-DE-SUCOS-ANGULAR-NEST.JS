import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Vendedor } from "../models/vendedores.models";
import {VendedorService } from "../services/vendedores.services";
@Controller('vendedores')
export class VendedorController{
    constructor(private vendedoresService:VendedorService){

    }
   

    //DECORETORS
    //QUANDO TIVER UMA REQUISIÇÃO DO TIPO GET
    @Get()
    async obterTodos():Promise<Vendedor[]>{
        return this.vendedoresService.obterTodos();
    }

    //PARAMETRO
    @Get(':MATRICULA')
    async obterUm(@Param()params):Promise<Vendedor>
    {
        return this.vendedoresService.obterUm(params.MATRICULA);
    }

    @Post()
    async criarvendedor(@Body() vendedor:Vendedor){
        
        this.vendedoresService.criar(vendedor);
    }

    @Put()
     async alterarvendedor(@Body() vendedor:Vendedor):Promise<[number,Vendedor[]]>{
       
        return this.vendedoresService.alterar(vendedor);
   }

    @Delete(':MATRICULA')
    async apagar(@Param()params){
        this.vendedoresService.apagar(params.MATRICULA)
    }
}