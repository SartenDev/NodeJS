const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

// rl.question wypisuje co chcesz przed wpisaniem wartości
rl.question('Żołnierzu jak cie zwą?: ', (answer) => { 
  // w klamrach jest czynność wykonywana po wpisaniu
  console.log(`Odmaszerować majtku ${answer}`);
  // zamyka aplikacje
  rl.close();
});
