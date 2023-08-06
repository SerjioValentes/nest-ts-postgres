import { Module } from '@nestjs/common';
import { UserAuthController } from './user-auth.controller';
import { UserAuthService } from './user-auth.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserAuth } from './user-auth.model';

@Module({
  controllers: [UserAuthController],
  providers: [UserAuthService],
  imports: [SequelizeModule.forFeature([UserAuth])],
})
export class UserAuthModule {}
