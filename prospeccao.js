const venom = require('venom-bot');

venom
  .create({
    session: 'session-prospeccao', 
  })
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });

function start(client) {  const contatos = [
  '553284460572',
 
];
  const mensagem = `ola,tudo bem?`;

  contatos.forEach((numero) => {
    client
      .sendText(`${numero}@c.us`, mensagem)
      .then((result) => {
        console.log(`Mensagem enviada para ${numero}`);
      })
      .catch((erro) => {
        console.error(`Erro ao enviar para ${numero}:`, erro);
      });
  });
}
