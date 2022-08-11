import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist/config.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Notas_FiscaisController } from './controllers/notas_fiscais.controller';
import { ProdutosController } from './controllers/produtos.controller';
import { VendedorController } from './controllers/vendedor.controller';
import { Notas_Fiscais } from './models/notas_fiscais.models';
import { Produto } from './models/produtos.models';
import { Vendedor } from './models/vendedores.models';
import { Notas_FiscaisService } from './services/notas_fiscais.services';
import { ProdutosService } from './services/produtos.services';
import { VendedorService } from './services/vendedores.services';


//PRECISA COLOCAR NO APP.MODULE AS CONTROLLERS E OS SERVICES
@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USUARIO_BANCO_DADOS,
      password: process.env.SENHA_BANCO_DADOS,
      database: 'produtos',
      autoLoadModels:true,
      synchronize:true,
    }),
    SequelizeModule.forFeature([Produto,Vendedor,Notas_Fiscais])
  ],
  controllers: [AppController,ProdutosController,VendedorController,Notas_FiscaisController],
  providers: [AppService,ProdutosService,VendedorService,Notas_FiscaisService],
})
export class AppModule {}
