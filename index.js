// 1º importando o Express.
const express = require('express');

// 2º Criando um servidor.
const server = express();

// 12º Avisando o express para ler json do corpo da requesição
// o use faz um ligação entre a estancia server com o modulo express.json().
server.use(express.json());

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
// });

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
// });

// 8º consumindo Route params
// server.get('/users/:id', (req, res) => {
//   // const id = req.params.id;
//     // dá para simplificar com desestruturação do ECMA6 assim:
//   const { id } = req.params;
 
//   return res.json({ message: `Buscando o usuário ${id}!` })
//   // usando template strings.
// });

// 9º Criando um tipo de armazenamento e esse, uma variável no mesmo arquivo
// const users = ['Breno', 'Micaela', 'Margarete', 'Bruno'];

// server.get('/users/:index', (req, res) => {
//   // dá para simplificar com desestruturação do ECMA6 assim:
//   const { index } = req.params;
 
//   return res.json(users[index]);
// });

// 10º CRUD - Create, Read, Update, Delete

const users = ['Breno', 'Micaela', 'Margarete', 'Bruno'];

// mostra todos os usuários
server.get('/users', (req, res) => {
  return res.json(users);
});

// mostra um usuário
server.get('/users/:index', (req, res) => {
  // dá para simplificar com desestruturação do ECMA6 assim:
  const { index } = req.params;
 
  return res.json(users[index]);
});

// 11º cria um novo usuário
server.post('/users', (req, res) => {
  const { name } = req.body;

  users.push(name);

  return res.json(users);
});

// 13º alterando um usuário
server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  users[index] = name;

  return res.json(users);
});

// 14º deletando um usuário
server.delete('/users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1);

  return res.send();
});

// 3º Definindo uma porta que ouve o servidor node dessa aplicação.
server.listen(3000);