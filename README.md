# Discord Bot README

This README provides an overview of the code for a Discord bot and its functionality.

## Prerequisites

Before you can run this code, ensure that you have the following prerequisites in place:

1. **Node.js**: You need Node.js installed on your system. If you don't have it, you can download and install it from [Node.js](https://nodejs.org/).

2. **Discord.js**: This code utilizes the Discord.js library. You can install it using npm:

   ```bash
   npm install discord.js
   ```

3. **dotenv**: To handle environment variables, the `dotenv` library is used. You can install it using npm:

   ```bash
   npm install dotenv
   ```

## Setup

1. **Environment Variables**: Create a `.env` file in the project directory to store your environment variables. Populate it with the following variables:

   - `BOT_TOKEN`: Your Discord bot's token.
   - `FIRST_CHANNEL_ENTRANCE_A`, `FIRST_CHANNEL_ENTRANCE_B`, `FIRST_CHANNEL_ENTRANCE_BUBBA`: Channel IDs where the bot listens for messages.
   - `PASSWORD_CHANNEL_A`, `PASSWORD_CHANNEL_B`, `PASSWORD_CHANNEL_BUBBA`: Passwords required for specific actions.
   - `PENDING_VISITOR_A_ID`, `PENDING_VISITOR_B_ID`, `PENDING_VISITOR_BUBBA_ID`: Role IDs to assign to users.

   Example `.env`:

   ```env
   BOT_TOKEN=your-bot-token
   FIRST_CHANNEL_ENTRANCE_A=channel-id-a
   FIRST_CHANNEL_ENTRANCE_B=channel-id-b
   FIRST_CHANNEL_ENTRANCE_BUBBA=channel-id-bubba
   PASSWORD_CHANNEL_A=password-a
   PASSWORD_CHANNEL_B=password-b
   PASSWORD_CHANNEL_BUBBA=password-bubba
   PENDING_VISITOR_A_ID=role-id-a
   PENDING_VISITOR_B_ID=role-id-b
   PENDING_VISITOR_BUBBA_ID=role-id-bubba
   ```

2. **Bot Token**: Replace `your-bot-token` in the `.env` file with your actual bot token.

3. **Role IDs and Channel IDs**: Replace the placeholders with actual role and channel IDs in the `.env` file.

## Running the Bot

To run the Discord bot, execute the following command in your terminal:

```bash
node your-bot-filename.js
```

Make sure to replace `your-bot-filename.js` with the actual filename of your JavaScript file.

## Bot Functionality

The provided code is a Discord bot that performs the following functions:

1. **Deleting Messages**: The bot listens for messages in specific entrance channels (`FIRST_CHANNEL_ENTRANCE_A`, `FIRST_CHANNEL_ENTRANCE_B`, `FIRST_CHANNEL_ENTRANCE_BUBBA`) and deletes them if the author is not a bot.

2. **Assigning Roles**: If a user sends a message matching the specified password (`PASSWORD_CHANNEL_A`, `PASSWORD_CHANNEL_B`, `PASSWORD_CHANNEL_BUBBA`) in the respective entrance channel, the bot assigns them a role (`PENDING_VISITOR_A_ID`, `PENDING_VISITOR_B_ID`, `PENDING_VISITOR_BUBBA_ID`) and deletes the message.

3. **Responding to Messages**: The bot responds with "λ ε λ" when it receives the message "λελ."

4. **(Commented Out) Anti-Spam Feature**: There is commented-out code that triggers a response when the message "pip" is received, resulting in a ban. This code can be enabled if needed.

Please note that this README provides an overview of the code and setup. Further customization and deployment are possible according to your specific Discord server's requirements.
