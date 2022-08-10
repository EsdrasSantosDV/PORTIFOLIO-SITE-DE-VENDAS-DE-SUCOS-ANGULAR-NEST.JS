import { Table,Model, Column, DataType} from "sequelize-typescript";


@Table
export class Produto extends Model <Produto>{
    
    @Column({
        primaryKey:true,
        type:DataType.STRING(10),
        allowNull:false,
    })
    id:string;
    
  
    @Column({
        type:DataType.STRING(150),
        allowNull:false,
    })
    nome:string;
    @Column({
        type:DataType.STRING(50),
        allowNull:false,
    })
    embalagem:string;

    @Column({
        type:DataType.STRING(50),
        allowNull:false,
    })
    tamanho:string;

    @Column({
        type:DataType.STRING(50),
        allowNull:false,
    })
    sabor:string;


    @Column({
        type:DataType.FLOAT,
        allowNull:false,
    })
    preco_lista:number;
  
   
}