const BOT_TOKEN = "";

const Discord = require("discord.js");
const fetch = require('node-fetch');
const ytdl = require("discord-ytdl-core");

const client = new Discord.Client();
client.login(BOT_TOKEN);

client.on("ready", () => {
    client.user.setActivity("exclure les gens chiants", { type: "PLAYING"})
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function channelAudio(channel,msg,vid,vol,end = null){
  var voicechannel = null;
  if(channel == 'default'){
    voicechannel = msg.member.voice.channel;
  }else{
    voicechannel = channel;
  }

  let stream = ytdl("https://www.youtube.com/watch?v="+vid, {
      filter: "audioonly",
      opusEncoded: true,
      encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
    });
    const connection = await voicechannel.join();
    const dispatcher = connection.play(stream, {
      type: "opus",
      volume: vol
  });

  if(end != null){

    dispatcher.on('start', async () => {
      await sleep(end*1000)
      voicechannel.leave();
    });

  }else{

    dispatcher.on("finish", () => {
      voicechannel.leave();
    }).on("error", () => { msg.channel.send('Impossible d\'effectuer la commande, error: '+error);});
    
  }
}

function audio(msg,vid,vol,end = null){
  channelAudio('default',msg,vid,vol,end)
}

function audioConnect(side,oldMember,newMember,nameID,vid,vol,end = null){
  if(newMember.id == nameID || (nameID == 'all' && newMember.id != '828708436492419083')){

    if(oldMember.selfDeaf == newMember.selfDeaf && oldMember.selfMute == newMember.selfMute && oldMember.selfVideo == newMember.selfVideo && oldMember.streaming == newMember.streaming){

      if(side == 'onjoin'){
        var channel = client.channels.cache.get(newMember.channelID);
        if(newMember.channelID != null){
          channelAudio(channel,null,vid,vol,end);
        }
      }
    
      if(side == 'onleave'){
        var channel = client.channels.cache.get(oldMember.channelID);
        if(newMember.channelID == null){
          channelAudio(channel,null,vid,vol,end);
        }
      }

    }

  }
}


const song = [
  {
    yt:"JUBz5xhRJZs",
    vol:8,
    declencheur:{
      type:"unique",
      words:"ok"
    }
  },
  {
    yt:"IEdz05-Glw4",
    end:12,
    vol:1,
    declencheur:{
      type:"unique",
      words:"6 pieds"
    }
  },
  {
    yt:"46yDE2i33sg",
    vol:1,
    declencheur:{
      type:"unique",
      words:"issou"
    }
  },
  {
    yt:"JFiFVVL_ULA",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'lilou',
        1:'781243877428297752'
      }
    }
  },
  {
    yt:"9M2Ce50Hle8",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'cheh',
        1:'sheh'
      }
    }
  },
  {
    yt:"y90yaLFoYoA",
    vol:0.5,
    declencheur:{
      type:"multiple",
      words:{
        0:'vodka',
        1:'VODKA'
      }
    }
  },
  {
    yt:"4ouzE6IkcHY",
    vol:1,
    declencheur:{
      type:"unique",
      words:"bite"
    }
  },
  {
    yt:"gysNIIW06Y8",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'bruh',
        1:'bruah'
      }
    }
  },
  {
    yt:"X4SBYo4_Us0",
    vol:1,
    declencheur:{
      type:"unique",
      words:"quoi"
    }
  },
  {
    yt:"ogdkJ7fITNc",
    vol:1,
    declencheur:{
      type:"unique",
      words:"queue"
    }
  },
  {
    yt:"qwc0s6rJKPc",
    vol:1,
    declencheur:{
      type:"unique",
      words:"sucer"
    }
  },
  {
    yt:"BY3fN4Hh8EQ",
    vol:1,
    declencheur:{
      type:"unique",
      words:"con"
    }
  },
  {
    yt:"rIc7GQ8WeAU",
    vol:1,
    declencheur:{
      type:"unique",
      words:"aled"
    }
  },
  {
    yt:"LBw_dvzD0LU",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'il est où',
        1:'il est ou'
      }
    }
  },
  {
    yt:"5v1kqMBglSg",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'ct sur',
        1:'ct sure',
        2:'ct sûre',
        3:'c\'était sur',
        4:'c\'était sure',
        5:'c\'était sûre',
        6:'c\'étais sur',
        7:'c\'étais sure',
        8:'c\'étais sûre'
      }
    }
  },
  {
    yt:"wctKJqV_0p4",
    vol:1,
    declencheur:{
      type:"unique",
      words:"noir"
    }
  },
  {
    yt:"ntHQrur0Q2M",
    vol:1,
    declencheur:{
      type:"unique",
      words:"tac"
    }
  },
  {
    yt:"MelClnwbdaA",
    vol:1,
    declencheur:{
      type:"unique",
      words:"abordable"
    }
  },
  {
    yt:"eb7z6up4s3w",
    end:15,
    vol:1,
    declencheur:{
      type:"unique",
      words:"arrete"
    }
  },
  {
    yt:"vsgNJYrO6sU",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'peppa',
        1:'pig'
      }
    }
  },
  {
    yt:"v1mxMtr8Mws",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'au secour',
        1:'au secours',
        2:'jeanne',
        3:'Jeanne'
      }
    }
  },
  {
    yt:"-mMhKYJFOnQ",
    vol:1,
    declencheur:{
      type:"unique",
      words:"nice"
    }
  },
  {
    yt:"5Jc2I41Vk7E",
    vol:1,
    declencheur:{
      type:"unique",
      words:"français"
    }
  },
  {
    yt:"T2K1JHOf8H8",
    vol:1.5,
    declencheur:{
      type:"unique",
      words:"chance"
    }
  },
  {
    yt:"FP6F4lCRl7M",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'coup dur',
        1:'299978971087372288'
      }
    }
  },
  {
    yt:"jwGxAEd7CK4",
    vol:2,
    declencheur:{
      type:"unique",
      words:"migrants"
    }
  },
  {
    yt:"6vlY1vdkPf4",
    vol:1,
    declencheur:{
      type:"unique",
      words:"oui oui"
    }
  },
  {
    yt:"_KHsRWEhL7E",
    vol:1,
    declencheur:{
      type:"unique",
      words:"ours"
    }
  },
  {
    yt:"w9c77AAFP3Y",
    vol:1,
    declencheur:{
      type:"unique",
      words:"ratz"
    }
  },
  {
    yt:"QuRymOit1c8",
    end:10,
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'ilana',
        1:'401508814752317442'
      }
    }
  },
  {
    yt:"PIC9eFvKpfA",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'fuck',
        1:'wtf'
      }
    }
  },
  {
    yt:"IdK6_SAycS4",
    vol:1,
    declencheur:{
      type:"unique",
      words:"non"
    }
  },
  {
    yt:"C4gFwCXEVMM",
    end:3,
    vol:1,
    declencheur:{
      type:"unique",
      words:"loup"
    }
  },
  {
    yt:"H11yvsdfrTk",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'ouai',
        1:'décide',
        2:'decide'
      }
    }
  },
  {
    yt:"Qswb7E_FKTI",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'lubullule',
        1:'lubulule',
        2:'8 mort'
      }
    }
  },
  {
    yt:"73XmokXAtxs",
    vol:1.5,
    declencheur:{
      type:"unique",
      words:"j\'aime bien"
    }
  },
  {
    yt:"wEzZ_ZFB3pY",
    end:11,
    vol:1.5,
    declencheur:{
      type:"unique",
      words:"descend"
    }
  },
  {
    yt:"EtCulrPSb3k",
    vol:2,
    declencheur:{
      type:"multiple",
      words:{
        0:'hehe boi',
        1:'hehe boy'
      }
    }
  },
  {
    yt:"rm8073qYY8k",
    vol:0.7,
    declencheur:{
      type:"multiple",
      words:{
        0:'train',
        1:'thomas'
      }
    }
  },
  {
    yt:"5KBo4dGAF8c",
    end:4,
    vol:3,
    declencheur:{
      type:"unique",
      words:"au revoir"
    }
  },
  {
    yt:"MuiZJRi-6pA",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'woaw',
        1:'wow',
        2:'whouah'
      }
    }
  },
  {
    yt:"OEo_UMSLvgA",
    vol:1,
    declencheur:{
      type:"unique",
      words:"ce truc la"
    }
  },
  {
    yt:"XE6YaLtctcI",
    vol:1.2,
    declencheur:{
      type:"multiple",
      words:{
        0:'ah',
        1:'Ah',
        2:'AH'
      }
    }
  },
  {
    yt:"6LvGbna4meA",
    vol:1.4,
    declencheur:{
      type:"unique",
      words:"kebab"
    }
  },
  {
    yt:"vSX713CJb3Y",
    vol:1,
    declencheur:{
      type:"unique",
      words:"why are you running"
    }
  },
  {
    yt:"Q_9VMaX61nI",
    vol:3,
    declencheur:{
      type:"unique",
      words:"pet"
    }
  },
  {
    yt:"7ODcC5z6Ca0",
    vol:1,
    declencheur:{
      type:"unique",
      words:"sad"
    }
  },
  {
    yt:"sahAbxq8WPw",
    vol:1,
    declencheur:{
      type:"unique",
      words:"illuminati"
    }
  },
  {
    yt:"FAd2_gdkg-8",
    vol:1,
    declencheur:{
      type:"unique",
      words:"hu"
    }
  },
  {
    yt:"QEjxSLTe5_M",
    end:1,
    vol:5,
    declencheur:{
      type:"unique",
      words:"suspense"
    }
  },
  {
    yt:"QEjxSLTe5_M",
    end:1,
    vol:100,
    declencheur:{
      type:"unique",
      words:"suspense sat"
    }
  },
  {
    yt:"vFrNxJoB768",
    vol:1.5,
    declencheur:{
      type:"unique",
      words:"hot"
    }
  },
  {
    yt:"_Z3ra0CxCE0",
    vol:1,
    declencheur:{
      type:"unique",
      words:"yeh"
    }
  },
  {
    yt:"A8wK-vhuWog",
    vol:1,
    declencheur:{
      type:"unique",
      words:"cessé"
    }
  },
  {
    yt:"FgxoZ1qi4JM",
    vol:1,
    declencheur:{
      type:"unique",
      words:"aaaa"
    }
  },
  {
    yt:"ZzpWT7A40Jg",
    vol:1,
    declencheur:{
      type:"unique",
      words:"ratatouille"
    }
  },
  {
    yt:"05D6i-nrbLk",
    vol:1,
    declencheur:{
      type:"unique",
      words:"baka"
    }
  },
  {
    yt:"ID7G_0uQFFg",
    vol:1,
    declencheur:{
      type:"unique",
      words:"bakamonoga"
    }
  },
  {
    yt:"pTpYjHOD9kM",
    vol:3,
    declencheur:{
      type:"multiple",
      words:{
        0:'perlimpinpin',
        1:'poudre'
      }
    }
  },
  {
    yt:"lfDZL8ABef8",
    vol:1,
    declencheur:{
      type:"multiple",
      words:{
        0:'ça fait beaucoup',
        1:'ca fait beaucoup',
      }
    }
  },
  {
    yt:"YfwPPAGyaHA",
    vol:1,
    declencheur:{
      type:"unique",
      words:"tu veux du pain"
    }
  },
  {
    yt:"hfvkASVCqTQ",
    vol:1,
    declencheur:{
      type:"unique",
      words:"pas"
    }
  },
]



client.on('message', async function(msg){
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
  if (msg.content === 'mais') {
    msg.channel.send('zon');
  }
  if (msg.content === 'quoi') {
    msg.channel.send('feur');
  }
  if (msg.content === 'un') {
    msg.channel.send('deux');
  }
  if (msg.content === 'trois') {
    msg.channel.send('quatre');
  }
  if (msg.content === 'cinq') {
    msg.channel.send('bon on va peut-être arreter la');
  }
  if (msg.content === 'ta' || msg.content === 'tas'|| msg.content === 't\'as') {
    msg.channel.send('gueule');
  }
  if(msg.content.includes('@everyone')){
      console.log(msg)
      msg.member.send('Please arrete d\'utiliser @everyone c\'est pour le bien de tous. Tu peux revenir grâce à ce lien : https://discord.gg/Jqp3DDJ');
      await sleep(500);
      msg.member.kick('@everyone')
      .then(() => {
        msg.channel.send(`On vire <@${msg.author.id}> car il casse les couilles avec @everyone`);
      })
      .catch(err => {
        msg.channel.send('Impossible de kick');
        console.error(err);
      });
  }
  if(msg.content.includes('!bot-cmd')){
    var returncmd = '';
    for (const [key, value] of Object.entries(song)) {
      if(value.declencheur.type == "multiple"){
        var multiplewords = '';
        for (const [key, value1] of Object.entries(value.declencheur.words)) {
          multiplewords = multiplewords+'"'+value1+'" ';
        }
        returncmd = returncmd+' - '+multiplewords+'\n';
      }else if(value.declencheur.type == "unique"){
        returncmd = returncmd+' - "'+value.declencheur.words+'"\n';
      }
    }
    var info = new Discord.MessageEmbed()
      .setTitle("Info Sur les commandes du bot :")
      .setDescription(returncmd)
      .setFooter("Pour plus d'informations, contactez le staff")
      .setColor("#14f40c")
    msg.channel.send(info)
  }

  if(msg.content.includes('!bot-role')){
    var message = msg.content.split(' ');
    if(message[1] == 'info'){
      var returntext = '**__Commande__** \n'
          +'```!bot-role [action] [nom] [couleur/personne]``` \n'
          +'\n**__Actions :__** \n'
          +'`info` : montrer les options du bot \n\n'
          +'`new` : créer un nouveau rôle \n'
          +'_   exemple: ```!bot-role new lenomdurole GREEN```_\n\n'
          +'`add` : ajouter un rôle à quelqu\'un\n'
          +'_   exemple: ```!bot-role add lenomdurole @Jo```_\n'
          +'\n**__Couleurs :__** \n'
          +`DEFAULT
          * WHITE
          * AQUA
          * GREEN
          * BLUE
          * YELLOW
          * PURPLE
          * LUMINOUS_VIVID_PINK
          * GOLD
          * ORANGE
          * RED
          * GREY
          * DARKER_GREY
          * NAVY
          * DARK_AQUA
          *  DARK_GREEN
          * DARK_BLUE
          *  DARK_PURPLE
          * DARK_VIVID_PINK
          * DARK_GOLD
          *  DARK_ORANGE
          * DARK_RED
          * DARK_GREY
          *  LIGHT_GREY
          *  DARK_NAVY
          * BLURPLE
          * GREYPLE
          * DARK_BUT_NOT_BLACK
          * NOT_QUITE_BLACK
          * RANDOM\n`
      var info = new Discord.MessageEmbed()
        .setTitle("Info pour créer un nouveau role :")
        .setDescription(returntext)
        .setFooter("Pour plus d'informations, contactez le staff")
        .setColor("#14f40c")
      msg.channel.send(info)
    }
    if(message[1] == 'new'){
      msg.guild.roles.create({
        data: {
            name: message[2],
            color: message[3],
            hoist: true,        //afficher le role séparement
            mentionable: true   //permettre a tout le monde de mentionner
        }
      }).catch(console.error)
    }
    if(message[1] == 'add'){
      var id = message[3].replace(/\D/g, "");
      let rolemsg = message[2];
      let role = msg.guild.roles.cache.find(r => r.name === rolemsg);
      if(role != undefined){
        if(msg.member._roles.includes(role.id)){
          var info = new Discord.MessageEmbed()
            .setTitle("Erreur role :")
            .setDescription("Impossible d'ajouter le role car tu l'as déjà")
            .setColor("#FF2121")
          msg.channel.send(info)
        }else{
          let member = msg.mentions.members.first();
          member.roles.add(role)
          var info = new Discord.MessageEmbed()
            .setTitle("Bot role :")
            .setDescription("Le rôle a été ajouté")
            .setColor("#14f40c")
          msg.channel.send(info)
        }
      }else{
        var info = new Discord.MessageEmbed()
          .setTitle("Erreur role :")
          .setDescription("Le rôle n'existe pas")
          .setColor("#FF2121")
        msg.channel.send(info)
      }
    }
  }

  for (const [key, value] of Object.entries(song)) {
    if(value.declencheur.type == "multiple"){
      for (const [key, value1] of Object.entries(value.declencheur.words)) {
        if(msg.content.includes(value1)){
          if(value.end){
            audio(msg,value.yt,value.vol,value.end)
          }else{
            audio(msg,value.yt,value.vol)
          }
        }
      }
    }else if(value.declencheur.type == "unique"){
      if(msg.content.includes(value.declencheur.words)){
        if(value.end){
          audio(msg,value.yt,value.vol,value.end)
        }else{
          audio(msg,value.yt,value.vol)
        }
      }
    }
  }
})

client.on('voiceStateUpdate', async (oldMember,newMember) => {
  //audioConnect('onjoin',oldMember,newMember,'292751213836107780',"9Otwm8E0h4M",1);
  audioConnect('onleave',oldMember,newMember,'all',"5KBo4dGAF8c",3,3);
})