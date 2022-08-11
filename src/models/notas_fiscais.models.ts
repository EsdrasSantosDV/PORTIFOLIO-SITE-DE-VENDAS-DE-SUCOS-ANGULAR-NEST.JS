import { Table,Model, Column, DataType} from "sequelize-typescript";


@Table
export class Notas_Fiscais extends Model <Notas_Fiscais>{
    
    @Column({
        primaryKey:true,
        type:DataType.INTEGER,
        allowNull:false,
        autoIncrement:true
    })
    NUMERO:number;
  
    @Column({
        type:DataType.STRING(11),
        allowNull:false,
    })
    CPF:string;

    @Column({
        type:DataType.STRING(5),
        allowNull:false,
    })
    MATRICULA:string;

    @Column({
        type:DataType.DATE,
        allowNull:false,
    })
    DATA_VENDA:Date;

    @Column({
        type:DataType.FLOAT,
        allowNull:false,
    })
    IMPOSTO:number;
    
}