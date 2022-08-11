import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "../models/produtos.models";
import { ProdutosService } from "../services/produtos.services";
@Controller('produtos')
export class ProdutosController{
    constructor(private produtosService:ProdutosService){

    }
   

    //DECORETORS
    //QUANDO TIVER UMA REQUISIÇÃO DO TIPO GET
    @Get()
    async obterTodos():Promise<Produto[]>{
        return this.produtosService.obterTodos();
    }

    //PARAMETRO
    @Get(':CODIGO_DO_PRODUTO')
    async obterUm(@Param()params):Promise<Produto>
    {
        return this.produtosService.obterUm(params.CODIGO_DO_PRODUTO);
    }

    @Post()
    async criarproduto(@Body() produto:Produto){
        
        this.produtosService.criar(produto);
    }

    @Put()
     async alterarproduto(@Body() produto:Produto):Promise<[number,Produto[]]>{
       
        return this.produtosService.alterar(produto);
   }

    @Delete(':CODIGO_DO_PRODUTO')
    async apagar(@Param()params){
        this.produtosService.apagar(params.CODIGO_DO_PRODUTO)
    }
}