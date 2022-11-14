import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User  from 'App/Models/User'

export default class UsersController {

    //adiciona usuario
    
    public async store({request, response}:HttpContextContract) {
        
        const body = request.body()

        const user = await User.create(body)

        response.status(201)

        return {
            message: "Usuario Criado com sucesso!",
            data: user,
        }

    }

    //retorna todos os usuarios 

    public async index() {
        
        const users = await User.all()

        return {
            data: users,
        }
    }

    //retorna apenas 1 usuario por id

    public async show({ params }: HttpContextContract) { 
        
        const user = await User.findOrFail(params.id)

        return {
            message:"Usuario encontrado com sucesso!",
            data: user,
        }
    }

    //Deleta um usuario

    public async destroy ({ params }: HttpContextContract) { 
        
        const user = await User.findOrFail(params.id)
        await user.delete()

        return {
            message:"Usuario excluido com sucesso!",
            data: user,
        }
    }

    //atualiza um usuario 

    public async update({ params, request}: HttpContextContract) { 

        const body = request.body()
        
        const user = await User.findOrFail(params.id)

        user.full_name = body.full_name
        user.cpf = body.cpf

        await user.save()

        return {
            message:"Usuario atualizado com sucesso!",
            data: user,
        }
    }
}
