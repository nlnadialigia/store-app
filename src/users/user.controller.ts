import {Body, Controller, Get, Post} from "@nestjs/common";
import {IUser} from "./user.model";
import {UserRepository} from "./user.repository";

@Controller("/users")
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: IUser) {
    this.userRepository.save(userData)
    return userData;
  }

  @Get()
  async listUsers() {
    
    return this.userRepository.list();
  }
}
