import {Injectable} from "@nestjs/common";
import {CreateUserDTO} from "./dto/CreateUser.dto";

@Injectable()
export class UserRepository {
  private users = []

  async save(user: CreateUserDTO) {
    this.users.push(user)
  }

  async list() {
    return this.users
  }
}