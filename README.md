# OpenAI Discord Bot

It is a Discord bot that answers questions using the OpenAI API developed with the GPT-3 artificial intelligence algorithm.

# Getting Started

1) Clone repository

```
mkdir openai-discord-bot
cd openai-discord-bot
git clone https://github.com/osman-koc/openai-discord-bot.git
```

2) Copy env file

```
cp .env.example .env
```

3) Create discord bot and OpenAI account

https://discord.com/developers
https://openai.com/api

4) Add discord bot to your server

'[How to build a discord bot with Node JS?](https://www.digitalocean.com/community/tutorials/how-to-build-a-discord-bot-with-node-js)'

5) Fil keys in env

```
CLIENT_TOKEN='{discord bot token}'
OPENAI_API_KEY='{openai.com api key}'
ROBOT_USER_ID='{discord bot user id}'
```

6) Run

```
npm install
npm run dev
```