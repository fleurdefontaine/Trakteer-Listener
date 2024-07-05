const { ActivityType } = require('discord.js');
const config = require('../config.json');

module.exports = (client) => {
    let currentIndex = 0;

    const botPresence = async () => {
        try {
            const presenceText = config.RichPresenceText[currentIndex];
            client.user.setPresence({
                activities: [{
                    name: presenceText,
                    type: ActivityType.Listening, // Ganti dengan tipe aktivitas yang diinginkan
                }],
                status: 'idle' // online, idle, dnd, invisible
            });

            currentIndex = (currentIndex + 1) % config.RichPresenceText.length;
        } catch (error) {
            console.error(error);
        }

        setTimeout(botPresence, 120000);
    };

    botPresence();

    console.log(`Logged in as ${client.user.tag}!`);
};
