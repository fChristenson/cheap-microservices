// this is a generated file

// Interfaces
export interface IListUsersResponse {
 users: IUser[];
}

export interface ICreateUserRequest {
 name: string;
}

export interface IUser {
 id: number;
 name: string;
}



// models
export const ListUsersResponse = (users: IUser[]) => {
 return {users};
}

export const CreateUserRequest = (name: string) => {
 return {name};
}

export const User = (id: number, name: string) => {
 return {id, name};
}


  