const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index (require, response) {  
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, reponse) {
        const {name, email, whatsapp, citty, uf } = request.body;

        const id = generateUniqueId();
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            citty,
            uf,
    
        })
    
        return response.json({ id });
    }

};