import {Body, Controller, Get, Param, Post, Put} from "@nestjs/common";
import {randomUUID} from "crypto";
import {CreateUserDTO} from "./dto/CreateUser.dto";
import {ListUserDTO} from "./dto/ListUser.dto";
import {UpdateUserDTO} from "./dto/UpdateUser.dto";
import {UserEntity} from "./user.entity";
import {UserRepository} from "./user.repository";

@Controller("/users")
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity()
    userEntity.email = userData.email
    userEntity.name = userData.name
    userEntity.password = userData.password
    userEntity.id = randomUUID()

    this.userRepository.save(userEntity)

    return {
      user: new ListUserDTO(userEntity.id, userEntity.name),
      message: "User successfully registered"
    };
  }

  @Get()
  async listUsers() {
    
    const savedUsers = await this.userRepository.list();
    const usersList = savedUsers.map(
      user => new ListUserDTO(
        user.id,
        user.name
      )
    )

    return usersList
  }

  @Put("/:id")
  async updateUser(@Param("id") id:string, @Body() newData: UpdateUserDTO) {
    const updatedUser = await this.userRepository.update(id, newData)

    return {
      user: updatedUser,
      message: "User successfully updated"
    }
  }
}
