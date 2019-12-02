// 1º importando o Express.
const express = require('express');

// 2º Criando um servidor.
const server = express();

/**
 * 4º Criamos uma primeira rota.
 * Criamos o método get por ser possível visualizar no navegador, pois, esse é o
 * método que o navegador usa para mostrar as informações de um endereço ou um
 * site.
*/

// server.get('/users', (req, res) => {
  /**
   * 5º
   * req são todos os dados da nossa requisição.
   * res são as repostas para o front end.
  */
 
  // return res.json({ message: 'Hello World!' })
  // res.json para retornar uma estrutura de dados em um json.
// })

/**
 * 6º - Route params
 * Query params = ?users=1
 * Route params = /users/1
 * Request body = { "name": "Fulbar", "email": "fulbar@fulbar.com" }
 */

// 7º consumindo Query params
// server.get('/users', (req, res) => {
//   const name = req.query.name;
 
//   return res.json({ message: `Hello ${name}!` })
//   // usando template strings.
// })

// 8º consumindo Route params
server.get('/users/:id', (req, res) => {
  // const id = req.params.id;
    // dá para simplificar com desestruturação do ECMA6 assim:
  const { id } = req.params;
 
  return res.json({ message: `Buscando o usuário ${id}!` })
  // usando template strings.
})

// 3º Definindo uma porta que ouve o servidor node dessa aplicação.
server.listen(3000);