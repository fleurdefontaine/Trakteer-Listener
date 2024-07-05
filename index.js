const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
const config = require('./src/config.json');
const logUtil = require('./src/logUtil');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Dynamically load events
const eventsPath = path.join(__dirname, 'src', 'events');
fs.readdir(eventsPath, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(path.join(eventsPath, file));
        const eventName = file.split('.')[0];
        client.on(eventName, event.bind(null, client));
    });
});

// Dynamically load commands
client.commands = new Map();
const commandsPath = path.join(__dirname, 'src', 'prefix');
fs.readdir(commandsPath, (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const command = require(path.join(commandsPath, file));
        const commandName = file.split('.')[0];
        client.commands.set(commandName, command);
    });
});

client.login(config.token);