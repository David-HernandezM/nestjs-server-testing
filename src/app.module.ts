import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { KeyringModule } from './keyring/keyring.module';
import { ConfigModule } from '@nestjs/config';
import { SailscallsService } from './sailscallsClientService/sailscallsClient.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    KeyringModule, 
  ],
  controllers: [AppController],
  providers: [SailscallsService],
})
export class AppModule {}
