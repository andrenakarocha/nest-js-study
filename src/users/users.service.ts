import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id" : 1,
            "name" : "Alice Silva",
            "email" : "alice.silva@email.com",
            "role" : "ADMIN"
        },
        {
            "id" : 2,
            "name": "Bruno Costa", 
            "email" : "bruno.costa@email.com", 
            "role" : "INTERN" 
        },
        { 
            "id" : 3, 
            "name" : "Carlos Oliveira", 
            "email" : "carlos.oliveira@email.com", 
            "role" : "INTERN" 
        },
        { 
            "id" : 4, 
            "name" : "Diana Santos", 
            "email" : "diana.santos@email.com", 
            "role" : "ENGINEER" 
        },
        { 
            "id" : 5, 
            "name" : "Eduardo Lima", 
            "email" : "eduardo.lima@email.com", 
            "role" : "ENGINEER" 
        }
    ]

    findAll(role ?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            return this.users.filter(user => user.role === role)
        }

        return this.users
    }

    findOne(id : number) {
        const user = this.users.find(user => user.id === id)

        return user
    }

    create(user : {name : string, email : string, role : 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id = a.id)

        const newUser = {
            id : usersByHighestId[0].id + 1,
            ...user
        }

        this.users.push(newUser)

        return newUser
    }
    
    update(id : number, updatedUser: {name ?: string, email ?: string, role ?: 'INTERN' | 'ENGINEER' | 'ADMIN'}) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return {...user, ...updatedUser}
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)

        return removedUser
    }
}
