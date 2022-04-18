import dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export async function getAnswer (question) {
    try {
        const completion = await openai.createCompletion("text-davinci-002", {
            prompt: question,
            temperature: 0.6,
            max_tokens: 600,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            best_of: 1,
        });
    
        if(completion.status != 200) {
            return "Sorry, I don't understand that.";
        }

        return completion.data.choices.map((choice) => choice.text).join("</br>");
    } catch (error) {
        console.log(error);
        return "Sorry, I can't answer that yet. \n" + error;
    }
}
