import { getAnswer } from "./api/openaiApi.js";

export async function openaiAnswer(message, client) {
    var question = message.content.replace(client.user.id, "").replace("<@> ", "").trim();
    getAnswer(question).then(result => {
        if (result && result.trim() !== '') {
            //message.channel.send(result);
            message.reply(result);
        }
    });
}