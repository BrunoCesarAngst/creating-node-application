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
server.get('/teste', (req, res) => {
  /**
   * 5º
   * req são todos os dados da nossa requisição.
   * res são as repostas para o front end.
  */
  return res.json({ message: 'Hello World!' })
  // res.json para retornar uma estrutura de dados em um json.
})

// 3º Definindo uma porta que ouve o servidor node dessa aplicação.
server.listen(3000);