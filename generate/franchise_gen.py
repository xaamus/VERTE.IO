print()
k=0
title=['obi wan kenobi','the book of boba fett','star wars visions','star wars the bad batch','star wars the rise of skywalker','the mandalorian','solo a star wars story','star wars the last jedi','rogue one a star wars story','star wars the force awakens','star wars rebels','star wars the clone wars','star wars revenge of the sith','star wars attack of the clones','star wars the phantom menace','star wars return of the jedi','star wars the empire strikes back','star wars a new hope']
year=['22','21','21','21','19','19','18','17','16','15','14','08','05','02','99','83','80','77']

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
    return str
print('            <div id="mediaEleCont">')
for i in range(0,int(len(title))):
    print('                <div class="mediaEle">')
    print('                    <div class="mediaPicOut"><a href="/VERTE.IO/video/',title[i].replace(' ','-'),'-',year[i],'.html"><img class="mediaPic" src="/VERTE.IO/media/video/',title[i].replace(' ','-'),'-',year[i],'.webp"></img></a></div>',sep='')
    print('                    <a href="/VERTE.IO/video/',title[i].replace(' ','-'),'-',year[i],'.html" class="mediaTit">',firstUpper(title[i]),'</a>',sep='')
    print('                    <p class="mediaYear">( ',year[i],' )</p>',sep='')
    print('                </div>')
    k=k+1
print('            </div>')
print()