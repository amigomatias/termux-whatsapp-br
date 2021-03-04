const music = (prefix, botName, ownerName) => {
        return `
   *〈 ${botName} 〉*

┷┯ *〈 MUSIC 〉*
   ╽
   ┠≽ *${prefix}play* <music_name>
   ┃ *Desc* : Para tocar o audio de uma musica.
   ┠──────────────╼
   ┠≽ *${prefix}lirik* <music_name>
   ┃ *Desc* : Para pesquisar a letra de uma musica.
   ┠──────────────╼
   ┠≽ *${prefix}chord* <music_name>
   ┃ *Desc* : Pesquisar em Chord Music Lyrics
   ╿ *${ownerName}*,
   ╰╼≽ *Amigo Matias © ${botName}`
}
exports.music = music
