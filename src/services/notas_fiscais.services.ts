import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Notas_Fiscais } from "../models/notas_fiscais.models";
@Injectable()
export class Notas_FiscaisService{
    constructor(

        @InjectModel(Notas_Fiscais)
        private notas_fiscaisModel:typeof Notas_Fiscais
    ){

    }


    //PROMESSA DE PRODUTO
    async obterTodos():Promise <Notas_Fiscais[]>{
        return this.notas_fiscaisModel.findAll();
    }

    async obterUm(NUMERO:number):Promise<Notas_Fiscais>{
        return this.notas_fiscaisModel.findByPk(NUMERO);
    }

    async criar(notas_fiscais:Notas_Fiscais)
    {
        this.notas_fiscaisModel.create(notas_fiscais);
    }

    async alterar(notas_fiscais: Notas_Fiscais):Promise<[number,Notas_Fiscais[]]>{
        return  this.notas_fiscaisModel.update(notas_fiscais,{
            where:{
                NUMERO:notas_fiscais.NUMERO
            }
        });
    }

    async apagar(NUMERO:number)
    {
        const produto: Notas_Fiscais = await this.obterUm(NUMERO);
        produto.destroy();
    }

}