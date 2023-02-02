import {Body, Controller, Get, Post} from "@nestjs/common";
import {User} from "./user.model";
import {UsersRepository} from "./user.repository";

@Controller("/users")
export class UsersController {
  constructor(private userRepository: UsersRepository) {}

  @Post()
  async createUser(@Body() userData: User) {
    this.userRepository.save(userData)
    return userData;
  }

  @Get()
  async listUsers() {
    
    return this.userRepository.list();
  }
}
