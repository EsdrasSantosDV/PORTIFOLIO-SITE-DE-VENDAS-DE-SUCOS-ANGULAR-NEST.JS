import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Vendedor } from "../models/vendedores.models";
@Injectable()
export class VendedorService{
    constructor(

        @InjectModel(Vendedor)
        private vendedorModel:typeof Vendedor
    ){

    }

   //PROMESSA DE PRODUTO
    async obterTodos():Promise <Vendedor[]>{
        return this.vendedorModel.findAll();
    }

    async obterUm(MATRICULA:string):Promise<Vendedor>{
        return this.vendedorModel.findByPk(MATRICULA);
    }

    async criar(vendedor:Vendedor)
    {
        this.vendedorModel.create(vendedor);
    }

    async alterar(vendedor: Vendedor):Promise<[number,Vendedor[]]>{
        return  this.vendedorModel.update(vendedor,{
            where:{
                MATRICULA:vendedor.MATRICULA
            }
        });
    }


    async apagar(MATRICULA:string)
    {
        const vendedor: Vendedor = await this.obterUm(MATRICULA);
        vendedor.destroy();
    }

}