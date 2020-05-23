const express = require('express');
const {celebrate, Segments, Joi } = require('celebrate');

const OngController = require ('./controllers/OngController');
const IncidentsController = require ('../controllers/IncidentsController');
const ProfileController = require ('../controllers/ProfileController');
const SessionController = require ('../controllers/SessionController');
const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(15),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    }),
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object().keys({
        authorization: Joi.string().required(),
    }).unknown(),
}),  ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsController.index);



routes.post('/incidents', celebrate({
        [Segments]:  Joi.object().keys(),

}), IncidentsController.create);



routes.delete('incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().require(),

    })
}),IncidentsController.delete);

module.exports =  routes;
