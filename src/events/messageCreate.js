const fs = require('fs');
const path = require('path');
const logUtil = require('../logUtil');
const config = require('../config.json');

const dbPath = path.join(__dirname, '..', 'db.json');

module.exports = (client, message) => {

    // Handle messages based on prefix
    const prefix = config.prefix;
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        // Handle commands
        const command = client.commands.get(commandName);
        if (command) {
            command.execute(message, args);
            return;
        }
    }

    if (message.webhookId && message.channel.id === config.channelIdDeposit) {
        const embeds = message.embeds;
        if (embeds.length > 0) {
            const embed = embeds[0];
            if (embed.description && embed.description.length > 0) {
                const description = embed.description;

                const pattern = /(\w+) mentraktir (\d+) .+/;
                const matcher = description.match(pattern);

                if (matcher) {
                    const name = matcher[1];
                    const quantity = parseInt(matcher[2]);

                    console.log("Name: " + name);
                    console.log("Quantity: " + quantity);

                    fs.readFile(dbPath, 'utf8', (err, data) => {
                        if (err) {
                            logUtil.logError("Webhook", "Failed to read database file.");
                            return;
                        }
                        let db = JSON.parse(data);
                        let user = db.find(user => user.name === name);
                        if (user) {
                            // Update balance if user already exists
                            user.balance += quantity;
                        } else {
                            // Add new entry if user doesn't exist
                            db.push({ name: name, balance: quantity });
                        }
                        fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
                            if (err) {
                                logUtil.logError("Webhook", "Failed to write to database file.");
                            } else {
                                console.log("Database updated successfully.");
                            }
                        });
                    });

                } else {
                    logUtil.logError("Webhook", "Description does not match the expected pattern.");
                }
            } else {
                logUtil.logError("Webhook", "Embed message doesn't have description.");
            }
        } else {
            logUtil.logError("Webhook", "Webhook doesn't have embed message.");
        }
    }
};