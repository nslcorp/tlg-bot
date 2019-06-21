const  TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()


const bot = new TelegramBot(process.env.TOKEN, {
  // polling: true
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
});

bot.onText(/\/start (.+)/, (msg, [src, match]) => {
  bot.sendMessage(msg.chat.id, match)
})

// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(msg.chat.id, 'handle only Start')
// })

// bot.on('message', (msg) => {
//   console.log(msg)
//   const id = msg.chat.id
//   bot.sendMessage(id, 'I am alive')
// })
