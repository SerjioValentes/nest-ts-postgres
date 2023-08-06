import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserAuth } from './user-auth.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserAuthService {
  constructor(@InjectModel(UserAuth) private userRepository: typeof UserAuth) {}

  async createUser(dto: CreateUserDto) {
    const user = await this.userRepository.create(dto);
    // const role = await this.roleService.getRoleByValue('ADMIN');
    // await user.$set('roles', [role.id]);
    // user.roles = [role];
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }
}
