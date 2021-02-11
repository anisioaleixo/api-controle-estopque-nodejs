const connection = require('../database/index')
module.exports = {
    async addUser(req, res, next) {
        try {
            const { usr_nome, usr_login, usr_senha } = req.body
            await connection('usuario')
                .insert({ usr_nome, usr_login, usr_senha }, active = false)
            return res.sendStatus(201)
        } catch (error) {
            next(error)
        }
    },
    async listUser(req, res, next) {
        try {
            const usuario = await connection('usuario')
                .select()
            return res.json(usuario)
        } catch (error) {
            next(error)
        }
    },
    async ativarUsuario(req, res, next) {
        try {
            const { usr_cod } = req.params

            const usuario = await connection('usuario')
                .where({ usr_cod })
                .update('ativo', true)
            return res.sendStatus(200)
        } catch (error) {
            next(error)
        }
    },
    async desativarUsuario(req, res, next) {
        try {
            const { usr_cod } = req.params

            const usuario = await connection('usuario')
                .update('ativo', false)
                .where({ usr_cod })
            return res.sendStatus(200)
        } catch (error) {
            next(error)
        }
    }
}