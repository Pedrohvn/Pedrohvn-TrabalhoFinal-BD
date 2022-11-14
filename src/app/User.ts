export interface User {
  
    id_user: number,

    email: string,

    password: string,

    full_name: string,

    cpf: string,

    birth_date: Date,

    gender: string,

    type: string,

    createdAt?: string,

    updatedAt?: string,
}