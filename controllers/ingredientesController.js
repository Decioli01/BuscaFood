const {json} = require("express");
const db = require("../database/connection");

module.exports = {
    async listarIngredientes (request, response){
        try{
            const sql = 'SELECT igtId, igtNome from ingredientes ORDER BY igtNome;';
            const ingredientes = await db.query(sql);
            
            return response.status(200).json({confirma: 'Sucesso', nResults: ingredientes[0].length, dados: ingredientes[0]});
        }
        catch (error){
            return response.status(500).json({confirma: 'Erro', message: error});
        }
    },

}