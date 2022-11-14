/*import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import AccessLog from 'App/Models/AccessLog'

export default class AccessLogsController {

    public async store({request, params, response}: HttpContextContract) {

        const body = request.body()
        const userId = params.id_user

        await User.findOrFail(userId)

        body.userId = userId

        const accessLog = await AccessLog.create(body)

        response.status(201)

        return log
    }
}*/
