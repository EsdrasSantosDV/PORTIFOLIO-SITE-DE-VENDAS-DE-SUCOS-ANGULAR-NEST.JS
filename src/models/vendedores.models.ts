import { Table,Model, Column, DataType} from "sequelize-typescript";


@Table
export class Vendedor extends Model <Vendedor>{
    
    @Column({
        primaryKey:true,
        type:DataType.STRING(5),
        allowNull:false,
    })
    MATRICULA:string;
    
  
    @Column({
        type:DataType.STRING(100),
        allowNull:false,
    })
    NOME:string;

    @Column({
        type:DataType.FLOAT,
        allowNull:false,
    })
    PERCENTUAL_COMISSAO:number;

    @Column({
        type:DataType.DATE,
        allowNull:false,
    })
    DATA_ADMISSAO:Date;

    @Column({
        type:DataType.BOOLEAN,
        allowNull:false,
    })
    DE_FERIAS:boolean;


    @Column({
        type:DataType.STRING(50),
        allowNull:false,
    })
    BAIRRO:string;
  
   
}