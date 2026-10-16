
print("*************************************")
print("Seja bem vindo ao jogo de adivinhação")
print("*************************************")

numero_secreto = 30
total_tentativas = 3

for rodada in range(1, total_tentativas + 1):
    print(f'Tentativa {rodada} de {total_tentativas}')
    chute = int(input("digite um numero entre 1 e 100: "))
    
    if(chute < 1 or chute > 100):
        print("Você deve digitar um numero entre 1 e 100!!")
        continue
    
    acertou = numero_secreto == chute
    maior   = numero_secreto > chute
    menor   = numero_secreto < chute
    
    if(acertou):
        print("parabens você ganhou!!")
        break
    else:
        if(maior):
            print("Você errou, o numero secreto é maior!")
        elif(menor):
            print("Você errou, o numero secreto é menor!")  

print("Fim de jogo!!")
    