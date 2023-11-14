print()
seasons=int(input('Seasons: '))
season=[0]
episodes=0
episode=['0']
k=1
for i in range(1,seasons+1):
    print('Season',i,': ',end='')
    season.append(int(input()))
    episodes=episodes+season[i]
for i in range(1,episodes+1):
    print('Episode',i,': ',end='')
    episode.append(input())
def firstUpper(episode):
    str = episode.title()
    str = str.replace('And ','and ')
    str = str.replace('The ','the ')
    str = str.replace('Of ','of ')
    str = str.replace('In ','in ')
    str = str.replace('At ','at ')
    str = str.replace('By ','by ')
    str = str[0].upper() + str[slice(1,len(str))]
    return str
print()
print()
print('<div id="seasonList">')
for i in range(1,seasons+1):
    if i==1:
        print('    <div class="seasonInfo">\n        <span class="seasonTit">SEASON ',i,'</span>\n        <span class="seasonArr"><</span>\n    </div>',sep='')
        print('    <div class="episodeList" id=episodeList1>',sep='')
    else:
        print('    <div class="seasonInfo">\n        <span class="seasonTit">SEASON ',i,'</span>\n        <span class="seasonArr">></span>\n    </div>',sep='')
        print('    <div class="episodeList">',sep='')
    for j in range(1,season[i]+1):
        print('        <a href="#" class="episodeEle">',sep='')
        print('            <div class="episodeOvr">#',k,'</div>',sep='')
        if i<10 and j<10:
            print('            <div class="episodeSea">S0',i,'E0',j,'</div>',sep='')
        elif i<10 and j>=10:
            print('            <div class="episodeSea">S0',i,'E',j,'</div>',sep='')
        elif i>=10 and j<10:
            print('            <div class="episodeSea">S',i,'E0',j,'</div>',sep='')
        elif i>=10 and j>=10:
            print('            <div class="episodeSea">S',i,'E',j,'</div>',sep='')
        print('            <div class="episodeTit">',firstUpper(episode[k]).lstrip().rstrip(),'</div>',sep='')
        k=k+1
        print('        </a>')
    print('    </div>')
print('</div>')
print()
print()