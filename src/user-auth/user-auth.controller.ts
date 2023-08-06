import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserAuthService } from './user-auth.service';

@Controller('user-auth')
export class UserAuthController {
  constructor(private usersService: UserAuthService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }
}
