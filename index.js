import dotenv from "dotenv";
import { getAnswer } from "./api/generate.js";
import Discord from "discord.js";

dotenv.config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", msg => {
  if (msg.author.bot) return false;

  if (msg.content.includes("@here") || msg.content.includes("@everyone") || msg.type == "REPLY") return false;

  if (msg.content === "ping") {
    msg.reply("pong");
  }

  if (msg.mentions.has(client.user.id) || msg.content.toString().includes(process.env.ROBOT_USER_ID)) {

    //msg.channel.send("I'm thinking...");
    var question = msg.content.replace(client.user.id, "").replace("<@> ", "").trim();

    getAnswer(question).then(result => {
      if (result && result.trim() !== '') {
        //msg.channel.send(result);
        msg.reply(result);
      }
    });
  } else {
    console.log("No mention");
  }

});

client.login(process.env.CLIENT_TOKEN);