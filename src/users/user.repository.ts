import {User} from "./user.model";

export class UserRepository {
  private users = []

  async save(user: User) {
    this.users.push(user)
  }

  async list() {
    return this.users
  }
}