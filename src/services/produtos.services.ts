import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Produto } from "../models/produtos.models";
@Injectable()
export class ProdutosService{
    constructor(

        @InjectModel(Produto)
        private produtoModel:typeof Produto
    ){

    }


    //PROMESSA DE PRODUTO
    async obterTodos():Promise <Produto[]>{
        return this.produtoModel.findAll();
    }

    async obterUm(CODIGO_DO_PRODUTO:string):Promise<Produto>{
        return this.produtoModel.findByPk(CODIGO_DO_PRODUTO);
    }

    async criar(produto:Produto)
    {
        this.produtoModel.create(produto);
    }

    async alterar(produto: Produto):Promise<[number,Produto[]]>{
        return  this.produtoModel.update(produto,{
            where:{
                CODIGO_DO_PRODUTO:produto.CODIGO_DO_PRODUTO
            }
        });
    }

    async apagar(CODIGO_DO_PRODUTO:string)
    {
        const produto: Produto = await this.obterUm(CODIGO_DO_PRODUTO);
        produto.destroy();
    }

}