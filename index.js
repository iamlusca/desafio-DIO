let nomeHeroi = "Gyomei Himejima"
let xpHeroi = 10000
let nivel = ""

switch(true){
    case xpHeroi <= 1000:
    nivel = "Ferro"
    break
    case xpHeroi  >= 1001 && xpHeroi <= 2000:
    nivel = "Bronze"
    break
    case xpHeroi >= 2001 && xpHeroi <= 5000:
    nivel = "Prata"
    break
    case xpHeroi >= 5001 && xpHeroi <= 7000:
    nivel = "Ouro" 
    break
    case xpHeroi >= 7001 && xpHeroi <= 8000:
    nivel = "Platina"
    break
    case xpHeroi >= 8001 && xpHeroi <=9000:
    nivel = "Ascendente"
    break
    case xpHeroi >= 9001 && xpHeroi <= 10000:
    nivel = "Imortal"
    case xpHeroi >= 10001:
    nivel = "Radiante"
}
        console.log("O Hashira " + nomeHeroi + " tem " + xpHeroi + " de XP e está no nível " + nivel + " por isso ele é o Hashira mais forte")

