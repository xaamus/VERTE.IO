seasons=int(input('Seasons: '))
episodes=int(input('Episodes: '))

print()
for i in range(0,episodes):
    print("episodeEle[",i,"].addEventListener('click',function(){iframeId.src = ''});",sep='')
print()
for i in range(1,seasons+1):
    print("seasonInfo[",i,"].addEventListener('click',function(){",sep='')
    print("    seasonCol();")
    print("    episodeList[",i,"].style.display='unset';",sep='')
    print("    seasonArr[",i,"].innerHTML='<';",sep='')
    print("})",sep='')