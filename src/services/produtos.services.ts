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

    async obterUm(id:number):Promise<Produto>{
        return this.produtoModel.findByPk(id);
    }

    async criar(produto:Produto)
    {
        this.produtoModel.create(produto);
    }

    async alterar(produto: Produto):Promise<[number,Produto[]]>{
        return  this.produtoModel.update(produto,{
            where:{
                id:produto.id
            }
        });
    }

    async apagar(id:number)
    {
        const produto: Produto = await this.obterUm(id);
        produto.destroy();
    }

}