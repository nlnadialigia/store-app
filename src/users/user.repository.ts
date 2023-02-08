import {Injectable} from "@nestjs/common";
import {UserEntity} from "./user.entity";

@Injectable()
export class UserRepository {
  private users: UserEntity[] = []

  async save(user: UserEntity) {
    this.users.push(user)
  }

  async list() {
    return this.users
  }

  async emailExist(email: string) {
    const searchUser = this.users.find(
      user => user.email === email
    )

    return searchUser !== undefined
  }

  async update(id: string, updateData: Partial<UserEntity>) {
    const searchUser = this.users.find(
      user => user.id === id
    )

    if (! searchUser) {
      return "User does not exist"
    }

    Object.entries(updateData).forEach(([key, value]) => {
      if (key === "id") {
        return
      }

      searchUser[key] = value
    })

    return searchUser
  }
}