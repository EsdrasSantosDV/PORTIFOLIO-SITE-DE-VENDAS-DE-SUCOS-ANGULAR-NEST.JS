import { Table,Model, Column, DataType} from "sequelize-typescript";


@Table
export class Transferencia extends Model <Transferencia>{
    
    @Column({
        primaryKey:true,
        type:DataType.INTEGER,
        autoIncrement:true
    })
    id:number;
    
  
    @Column({
        type:DataType.STRING(60),
        allowNull:false,
    })
    data:string;

    @Column({
        type:DataType.STRING(60),
        allowNull:false,
    })
    destino:string;
    @Column({
        type:DataType.FLOAT,
        allowNull:false,
    })
    valor:number;


   
}