import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];
  private idCounter: number = 1;

  create(name: string, email: string): User {
    const user: User = { id: this.idCounter++, name, email };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);

    if (!user) {
      throw new Error(`User with id ${id} not found`);
    }
    return user;
  }
}
