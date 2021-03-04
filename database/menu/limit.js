const limit = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 LIMIT 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Cheacar seu limite
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Checar seu dinheiro
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Commprar limite
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Nota: Você pode comprar limites recolhendo dinheiro primeiro. Verifique seu dinheiro digitando comandos*${prefix}bal*,1 preço limite = 1000 dinheiro.
Nota2: Você pode coletar dinheiro conversando com amigos do grupo ou subindo de nível.`
}
exports.limit = limit
