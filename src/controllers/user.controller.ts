import {Body, Controller, Get, Post} from "@nestjs/common";
import {User} from "src/models/user.model";
import {UserRepository} from "../repositories/user.repository";

@Controller("/users")
export class UsersController {
  private userRepository = new UserRepository()

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
