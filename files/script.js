const matchgrabify = ["grabify.link", "lovebird.guru", "trulove.guru", "dateing.club", "shrekis.life", "headshot.monster", "gaming-at-my.best", "progaming.monster", "yourmy.monster", "imageshare.best", "screenshot.best", "gamingfun.me", "catsnthing.com", "catsnthings.fun", "curiouscat.club", "joinmy.site", "fortnitechat.site", "fortnight.space", "freegiftcards.co", "stopify.co", "leancoding.co"]

const matchiplogger = ["iplogger.org", "2no.co", "iplogger.com", "iplogger.ru", "yip.su", "iplogger.co", "iplogger.info", "ipgrabber.ru", "ipgraber.ru", "iplis.ru", "02ip.ru", "ezstat.ru"]

const matchother = ["ps3cfw.com", "yȯutube.com", "xn--yutube-iqc.com", "gyazo.nl", "ythingy.com", "ip-trap.com"]

const matchbit = ["goo.gl", "bit.ly", "bitly.com"]

const lien = document.getElementById("fullUrl")
const form = document.getElementById("form")
const resultat = document.getElementById("resultat")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    resultat.style.color = "black";
    resultat.innerText = "...";
    if (matchgrabify.some(mot => lien.value.includes(mot))) {
        setTimeout(() => {
            resultat.innerText = "It's probably an ip-logger (Grabify) !!";
            resultat.style.color = "red";
        }, 500);
    } else if (matchiplogger.some(mot => lien.value.includes(mot))) {
        setTimeout(() => {
            resultat.innerText = "It's probably an ip-logger (Iplogger.org) !!";
            resultat.style.color = "red";
        }, 500);
    } else if (matchother.some(mot => lien.value.includes(mot))) {
        setTimeout(() => {
            resultat.innerText = "It's probably an ip-logger !!";
            resultat.style.color = "red";
        }, 500);
    } else if (matchbit.some(mot => lien.value.includes(mot))) {
        setTimeout(() => {
            resultat.innerText = "Be careful, this is probably a link shortener.";
            resultat.style.color = "orange";
        }, 500);
    } else {
        setTimeout(() => {
            resultat.innerText = "It's probably not an ip-logger.";
            resultat.style.color = "green";
        }, 500);
    }
})
