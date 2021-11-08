import { TypegooseModule } from 'nestjs-typegoose';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AuthModule,
        schemaOptions: {
          collection: 'Auth',
        },
      },
    ]),
  ],
})
export class AuthModule {}
