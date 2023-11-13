print()
k=0
title=['the guardians of the galaxy vol 3','secret invasion','ant man and the wasp quantumania','black panther wakanda forever','the guardians of the galaxy holiday special','werewolf by night','she hulk attorney at law','i am groot','thor love and thunder','ms marvel','doctor strange in the multiverse of madness','moon knight','spider man no way home','hawkeye','eternals','shang chi and the legend of the ten rings','what if','black widow','loki','the falcon and the winter soldier','wandavision','spider man far from home','avengers endgame','captain marvel','ant man and the wasp','avengers infinity war','black panther','thor ragnarok','spider man homecoming','the guardians of the galaxy vol 2','doctor strange','captain america civil war','ant man','avengers age of ultron','the guardians of the galaxy','captain america the winter soldier','thor the dark world','iron man 3','the avengers','captain america the first avenger','thor','iron man 2','the incredible hulk','iron man']
year=['23','23','23','22','22','22','22','22','22','22','22','22','21','21','21','21','21','21','21','21','21','19','19','19','18','18','18','17','17','17','16','16','15','15','14','14','13','13','12','11','11','10','08','08']

for i in range(0,len(title)):
    if int(year[i]) > 0 and int(year[i]) < 25:
        year[i] = '20' + year[i]
    elif (year[i]) == 0:
        year[i] = '2000'
    else:
        year[i] = '19' + year[i]
def firstUpper(title):
    str = title.title()
    str = str.replace('And ','and ')
    str = str.replace('The ','the ')
    str = str.replace('Of ','of ')
    str = str.replace('In ','in ')
    str = str.replace('At ','at ')
    str = str.replace('By ','by ')
    str = str[0].upper() + str[slice(1,len(str))]
    return str;
print('            <div id="mainCent">')
for i in range(0,int(len(title)/6)):
    print('                <div class="mediaRow">')
    for j in range(0,6):
        print('                    <div class="mediaEle">')
        print('                        <div class="mediaPicOut"><a href="/video/',title[k].replace(' ','-'),'-',year[k],'.html"><img class="mediaPic" src="/media/video/',title[k].replace(' ','-'),'-',year[k],'.webp"></img></a></div>',sep='')
        print('                        <a href="/video/',title[k].replace(' ','-'),'-',year[k],'.html" class="mediaTit">',firstUpper(title[k]),'</a>',sep='')
        print('                        <p class="mediaYear">( ',year[k],' )</p>',sep='')
        print('                    </div>')
        k=k+1
    print('                </div>')
if len(title)%6!=0:
    print('                <div class="mediaRow">')
    for j in range(0,len(title)%6):
        print('                    <div class="mediaEle">')
        print('                        <div class="mediaPicOut"><a href="/video/',title[k].replace(' ','-'),'-',year[k],'.html"><img class="mediaPic" src="/media/video/',title[k].replace(' ','-'),'-',year[k],'.webp"></img></a></div>',sep='')
        print('                        <a href="/video/',title[k].replace(' ','-'),'-',year[k],'.html" class="mediaTit">',firstUpper(title[k]),'</a>',sep='')
        print('                        <p class="mediaYear">( ',year[k],' )</p>',sep='')
        print('                    </div>')
        k=k+1
    for j in range(0,6-(len(title)%6)):
        print('                    <div class="mediaEleBlank"></div>')
    print('                </div>')
print('            </div>')
print()