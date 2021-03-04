const adult = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}randomhentai*
   ┃ *Desc* : enviar imagem hentai aleatoria.
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* : Enviando imagem aleatória de trap NSFW (nsfw necessário)
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Enviando imagem NSFW Neko aleatória (nsfw necessário)
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.adult = adult
