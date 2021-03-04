const group = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.4
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 GROUP 〉*
   ╽
   ┠≽ *${prefix}opengc*
   ┃ *Desc* : Abrir grupo
   ┠──────────────╼
   ┠≽ *${prefix}closegc*
   ┃ *Desc* : Fechar grupo.
   ┠──────────────╼
   ┠≽ *${prefix}promote* <@tag>
   ┃ *Desc* : Promover pessoas para admin do grupo.
   ┠──────────────╼
   ┠≽ *${prefix}demote* <@tag>
   ┃ *Desc* : Demote People to be Members Group
   ┠──────────────╼
   ┠≽ *${prefix}tagall*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall2*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall3*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall4*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall5*
   ┃ *Desc* : Mencionar todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : Add Members
   ┠──────────────╼
   ┠≽ *${prefix}kick* <@tag>
   ┃ *Desc* : Kick Member Group
   ┠──────────────╼
   ┠≽ *${prefix}listadmins*
   ┃ *Desc* : Show List Group Admins
   ┠──────────────╼
   ┠≽ *${prefix}linkgroup*
   ┃ *Desc* : Show Group Link
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Tell the Bot to Leave the Group
   ┠──────────────╼
   ┠≽ *${prefix}welcome* <1/0>
   ┃ *Desc* : Activating / Deactivating the Welcome Feature
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Activating / Deactivating the NSFW Feature
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Delete Bot Message
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Activating / Deactivating the Simih Feature
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : Mention You
   ┠──────────────╼
   ┠≽ *${prefix}ownergroup*
   ┃ *Desc* : Shows who the Group Owner is
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.group = group
