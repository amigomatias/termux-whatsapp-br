const stickermaker = (prefix, botName, ownerName) => {
	return `
  *〈 ${botName} 〉*
 *〈 STICKER MAKER 〉*
   ╽
   ┠≽ *${prefix}sticker*
   ┃ *Desc* : Para fazer figurinha de imagem
   ┠──────────────╼
   ┠≽ *${prefix}stickergif*
   ┃ *Desc* : Para fazer figurinhas de Gif/Video
   ┠──────────────╼
   ╿ *${ownerName}*,
   ╰╼≽ *Amigo matias © ${botName}`
}
exports.stickermaker = stickermaker
