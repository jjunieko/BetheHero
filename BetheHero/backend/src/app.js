const express = require('express');
const cors = require('cors');
const {error} = require('celebrate');
const routes = require('./routes');

const app = express();


app.use(cors()); /** origin: http:/ meuapp.com */
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

/**
 * Rotas / RECURSO
*/


/* metodo HTTP:

*GET: buscar uma informação no backend;
*POST: criar uma informação no back-end
*PUT: alterar uma informaçõa no back-end
*DELETE: Deletar uma informação no back -end
*/

/*tipos de parâmetros

 * Query params :paramentros nomeados enviados na rota após "?" (filtros, paginação)
 * localhost:3333/users/?page&nome=joao&idade=29
 * 
 * ROUTES PARAMS: paramentros utilizados para identificar recursos 
 * Request body: corpo da requisiçao, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB...
  * 
  */

  /**
   * Driver : SELECT * FROM users
   * Query Builder: table('useres').select(*).where()
   * 
   */

