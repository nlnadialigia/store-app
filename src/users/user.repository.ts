import {Injectable} from "@nestjs/common";
import {User} from "./user.model";

@Injectable()
export class UsersRepository {
  private users = []

  async save(user: User) {
    this.users.push(user)
  }

  async list() {
    return this.users
  }
}