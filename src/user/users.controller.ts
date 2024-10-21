import { Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";

//https:loaclhost:3000/users will be the route
@Controller("users")
export class UserController {
    @Get()
    getUsers() {
        const usersService = new UsersService()
        return usersService.getAllUsers()
    }

    @Post()
    postUsers() {
        const user = { id: 1, name: "MIA", email: "mia@gmail.com", password: "12345678", isMarid: false }
        const usersService = new UsersService()
        usersService.createUser(user)
        console.log(user)
        return "A new user created successfully!"
    }

    //https:localhost:3000/id(5467890)
    @Get(":id/")
    getusersBuId(@Param('id') id: any) {
        console.log(id)
        const usersService = new UsersService()
        return usersService.getUserById(+id)

    }
}