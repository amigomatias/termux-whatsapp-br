exports.noregis = () => {
        return `*「 AINDA NÃO REGISTRADO 」*\n\n*Como registrar ${prefix}register nome|idade* \n*Exemplo: ${prefix}register matias|19*`
}

exports.rediregis = () => {
        return `*「 JÁ SE REGISTROU! 」*\n\n*você se registrou no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*Formato incorreto, tente novamente*`
}

exports.clears = () => {
        return`*Tudo apagado com sucesso*`
}

exports.pc = () => {
        return`*「 CADASTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei\n\nNOTA:\n*se você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTRAR DADOS 」*\n\nvocê se registrou com os dados \n\n◪ *DADOS* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Hora : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ Nota: \n NÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE:v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.limitend = (pushname) => {
        return`*maaf ${pushname} O limite de hoje aumentou*\n*O limite é zerado a cada 24:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
seu limite : ${limitCounts}

NOTA: para obter o limite. pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
        return`*Adicionar parâmetro 1 / ativar ou 0 / desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nome* : ${pushname}\n  ❏ *Número* : ${sender.split("@")[0]}\n  ❏ *Dinheiro* : ${uangkau}`
}
