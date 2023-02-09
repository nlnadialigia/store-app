import {Injectable} from "@nestjs/common";
import {UserEntity} from "./user.entity";

@Injectable()
export class UserRepository {
  private users: UserEntity[] = []

  private searchById(id: string) {
    const searchUser = this.users.find(
      user => user.id === id
    )

    if (! searchUser) {
      return "User does not exist"
    }

    return searchUser
  }

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
    const user = this.searchById(id)

    Object.entries(updateData).forEach(([key, value]) => {
      if (key === "id") {
        return
      }

      user[key] = value
    })

    return user
  }

  async remove(id: string) {
    const user = this.searchById(id)
    this.users = this.users.filter(
      savedUser => savedUser.id !== id
    )

    return user
  }
}