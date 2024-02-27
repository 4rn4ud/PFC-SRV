const pfc = require('./pfc.js')

const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/',(req, res) => {
    let render = `<form action="./res" method="get">
    <p>Veuillez choisir entre pierre, feuille et ciseaux :</p>
    <div>
      <input type="radio" id="choice1" name="choice" value="pierre" />
      <label for="choice1">Pierre</label>
  
      <input type="radio" id="choice2" name="choice" value="feuille" />
      <label for="choice2">Feuille</label>
  
      <input type="radio" id="choice3" name="choice" value="ciseaux" />
      <label for="choice3">Ciseaux</label>
    </div>
    <div>
      <button type="submit">Envoyer</button>
    </div>
  </form>`;
  res.send(render);
});

app.get('/res',(req, res) => {
    // res.send(req.query.prenom);
    let render = `<body id="pfc"></body>`;
    pfc.robot.run(req.query.choice)
  res.send(render);
});