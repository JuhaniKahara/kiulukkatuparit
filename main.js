getTeamMemberHtml = (data) => {
    return (
        `<div class="column">
        <div class="team-5">
            <div class="team-img">
                <img src="images/${data.img}" alt="Team Image">
            </div>
            <div class="team-content">
                <h2>${data.name}</h2>
                <h3>${data.title}</h3>
                <p>${data.description}</p>
            </div>
        </div>
    </div>`
    )
}



const data = [{"name": "Tuoppi", "title": "CEO &amp; Founder", 
            "description": "Toivon että saan paljon uusia ystäviä ja lämpimiä haleja", "img": "pupunen.jpg"},
            {"name": "Raineri", "title": "Salkuton ministeri / Hyvä Veli", "description": "Juon itseni tainnoksiin...", "img": "rainer.jpg"},
            {"name": "Matti", "title": "Vantaa", "description": "Mulla on nuuskaa", "img": "matti.jpg"},
            {"name": "Tiainen", "title": "Tekniikan tohtori", "description": "Tulen tupareihin jos olen Suomessa", "img": "tiainen1.jpg"},
            {"name": "Juhani K", "title": "Isäntä", "description": "EEPPISET KIULUKKATUPARIT, odotan, INNOLLA,, joka päivä", "img": "mina.jpg"},
            {"name": "Jaakko", "title": "Aito Mäntylä", "description": "Tulen tupareihin ehdottomasti", "img": "jaakko.jpg"},
            {"name": "Meeri", "title": "Opettaja", "description": "Tulen tupareihin mikäli en ole synnyttämässä", "img": "meeri.jpg"},
            {"name": "Ulla", "title": "HKL:n selkäranka", "description": "Jos vetää litran viinaa ja pari lonkkuu, pääsee mihin vaan Kalliosts", "img": "ulla.jpg"},
            {"name": "Aivo", "title": "Diplomi-insinööri", 
            "description": "Hieman tavallista suurelmaa volatiliteettia euriboreissa, tulikos jotain inflaatiolukuja tauluun?", "img": "aivo.jpg"},
            {"name": "Leevi Letkutsalo", "title": "Letkumestari", "description": "Tupareissa saa polttaa röökiä sisällä", "img": "leevi.jpg"},
            {"name": "Raul Pudding", "title": "Postimies", "description": "Espoolaiseen elämäntyyliin kuuluu silmitön dokaus", "img": "raul.jpg"},
            {"name": "Ade", "title": "Opiskelija", "description": "Tulen tupareihin", "img": "ade.jpg"},
          ]

let shuffled = data
.map(value => ({ value, sort: Math.random() }))
.sort((a, b) => a.sort - b.sort)
.map(({ value }) => value)

const row = document.getElementById("row")
shuffled.forEach(x=>row.insertAdjacentHTML("afterbegin", getTeamMemberHtml(x)))

