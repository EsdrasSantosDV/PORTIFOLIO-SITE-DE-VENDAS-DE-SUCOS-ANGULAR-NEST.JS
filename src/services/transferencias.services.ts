import { Transferencia } from './../models/transferencias.models';
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

@Injectable()
export class TransferenciasService{
    constructor(

        @InjectModel(Transferencia)
        private transferenciaModel:typeof Transferencia
    ){

    }
    //PROMESSA DE PRODUTO
    async obterTodos():Promise <Transferencia[]>{
        return this.transferenciaModel.findAll();
    }

    async obterUm(id:number):Promise<Transferencia>{
        return this.transferenciaModel.findByPk(id);
    }

    async criar(transferencia:Transferencia)
    {
        this.transferenciaModel.create(transferencia);
    }

    async alterar(transferencia: Transferencia):Promise<[number,Transferencia[]]>{
        return  this.transferenciaModel.update(transferencia,{
            where:{
                NUMERO:transferencia.id
            }
        });
    }
    
    async apagar(id:number)
    {
        const transferencia: Transferencia = await this.obterUm(id);
        transferencia.destroy();
    }

}