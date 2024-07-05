const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '..', 'db.json');

module.exports = {
    name: 'check',
    description: 'Check balance',
    execute(message, args) {
        fs.readFile(dbPath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                return message.reply('Sorry, an error occurred while fetching the balance.');
            }
            try {
                const db = JSON.parse(data);
                const user = message.author.username;
                console.log("Username:", user);
                
                const userData = db.find(entry => entry.name === user);
                
                if (userData) {
                    const balance = userData.balance;
                    message.reply(`Your balance is ${balance}.`);
                } else {
                    message.reply('You don\'t have a balance yet.');
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
                message.reply('Sorry, there was an issue processing your request.');
            }
        });
    }
};
