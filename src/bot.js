require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => console.log(`${client.user.tag} has logged in.`));

client.on('message', async message =>{ // public group-a
    if(message.author.bot) return;
    if(message.channel.id === ( process.env.FIRST_CHANNEL_ENTRANCE_A ) ){
        await message.delete();
    }
    if(message.content.toLowerCase() === ( process.env.PASSWORD_CHANNEL_A ) && message.channel.id === ( process.env.FIRST_CHANNEL_ENTRANCE_A ) ){

        await message.delete().catch(err => console.log(err));
        const role = message.guild.roles.cache.get(process.env.PENDING_VISITOR_A_ID);
        if(role){
            try{
                await message.member.roles.set([]).then(member => member.roles.add(role)).catch(console.error);
                console.log("Role added!");
            }
            catch(err){
                console.log(err);
            }
        }
    }
});

client.on('message', async message =>{ // public group-b
    if(message.author.bot) return;
    if(message.channel.id === ( process.env.FIRST_CHANNEL_ENTRANCE_B ) ){
        await message.delete();
    }
    if(message.content.toLowerCase() === ( process.env.PASSWORD_CHANNEL_B ) && message.channel.id === ( process.env.FIRST_CHANNEL_ENTRANCE_B ) ){

        await message.delete().catch(err => console.log(err));
        const role = message.guild.roles.cache.get(process.env.PENDING_VISITOR_B_ID);
        if(role){
            try{
                await message.member.roles.set([]).then(member => member.roles.add(role)).catch(console.error);
                console.log("Role added!");
            }
            catch(err){
                console.log(err);
            }
        }
    }
});

client.on('message', async message =>{ // public bubba
    if(message.author.bot) return;
    if(message.channel.id === ( process.env.FIRST_CHANNEL_ENTRANCE_BUBBA ) ){
        await message.delete();
    }
    if(message.content.toLowerCase() === ( process.env.PASSWORD_CHANNEL_BUBBA ) && message.channel.id === ( process.env.FIRST_CHANNEL_ENTRANCE_BUBBA ) ){

        await message.delete().catch(err => console.log(err));
        const role = message.guild.roles.cache.get( process.env.PENDING_VISITOR_BUBBA_ID );
        if(role){
            try{
                await message.member.roles.set([]).then(member => member.roles.add(role)).catch(console.error);
                console.log("Role added!");
            }
            catch(err){
                console.log(err);
            }
        }
    }
});

client.on('message', async message =>{
    // console.log(msg.content);
    if(message.content === 'λελ'){
        //msg.reply('l e l');
        message.channel.send('λ ε λ');
    }
    
});

// client.on('message', async message =>{
//     // console.log(msg.content);
//     if(message.content === 'pip'){
//         message.channel.send('***ΤΟ SPAM ΕΧΕΙ ΩΣ ΑΠΟΤΕΛΕΣΜΑ BAN***');

//     }
// });

