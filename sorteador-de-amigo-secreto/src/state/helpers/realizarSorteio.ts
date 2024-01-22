import shuffle from "just-shuffle";

export function realizarSorteio (participantes: string[]) {
    const  totalDeParticipantes = participantes.length

    //jest-shuffle é uma biblioteca que ajudara a embaralhar
    const embaralhado = shuffle(participantes)
    const resultado = new Map<string, string>()

    for (let index = 0; index < totalDeParticipantes; index++) {   
        //retorna o primeiro se não retorna o indice +1
        const indiceDoAmigo = index === (totalDeParticipantes - 1) ? 0 : index + 1;
        resultado.set(embaralhado[index], embaralhado[indiceDoAmigo])
    }
    return resultado
}