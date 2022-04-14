require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();
// const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", msg => {
  if (msg.author.bot) return false;

  if (msg.content.includes("@here") || msg.content.includes("@everyone") || msg.type == "REPLY") return false;

  if (msg.content === "ping") {
    msg.reply("pong");
  }

  if (msg.mentions.has(client.user.id)) {
    msg.channel.send("Hello there!");
  }
});

client.login(process.env.CLIENT_TOKEN)