import { Injectable } from "@nestjs/common";

@Injectable()


export class UsersService {
    users: { id: number, name: string, email: string, password: string, isMarid: boolean }[] = [
        {
            id: 1,
            name: "MIA",
            email: 'mia@gmail.com',
            password: "12345678",
            isMarid: false
        },
        {
            id: 2,
            name: "MIA",
            email: 'mia@gmail.com',
            password: "12345678",
            isMarid: false
        }
    ]
    getAllUsers() {
        return this.users
    }

    getUserById(id: number) {
        return this.users.find((user) => user.id === id)
    }

    createUser(user: { id: number, name: string, email: string, password: string, isMarid: boolean }) {
        this.users.push(user)
    }
}