import {Injectable} from "@nestjs/common";
import {IUser} from "./user.model";

@Injectable()
export class UserRepository {
  private users = []

  async save(user: IUser) {
    this.users.push(user)
  }

  async list() {
    return this.users
  }
}