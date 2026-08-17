export interface ResourceItemFi {
  enSlug: string;
  slug: string;
  kind: "Raportti" | "Julkaisu" | "Asiakastapaus" | "Blogi";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export const reportsFi: ResourceItemFi[] = [
  {
    enSlug: "2026-threat-landscape",
    slug: "sovellusten-uhkakentta-2026",
    kind: "Raportti",
    title: "Sovellusten uhkakenttä 2026",
    excerpt: "Vuotuinen analyysimme haavoittuvuusluokista ja hyväksikäyttötrendeistä, jotka määrittävät tulevaa vuotta.",
    date: "2026-01-14",
    readTime: "12 min lukuaika",
    sections: [
      {
        heading: "Hyökkäyspinnat keskittyvät identiteetin ympärille",
        paragraphs: [
          "Yli 3 200 viime vuonna tekemämme arvioinnin joukossa identiteetti- ja pääsynhallintapuutteet ohittivat injektiohaavoittuvuudet yleisimpänä reittinä kriittiseen vaikutukseen. Pelkästään rajapintojen puutteellinen oliotason valtuutus muodosti lähes kolmanneksen kriittisistä löydöksistä.",
          "Kun organisaatiot pilkkovat monoliittejaan mikropalveluiksi, luottamusrajojen määrä moninkertaistuu — ja jokainen niistä on uusi tilaisuus valtuutustarkastuksen unohtumiselle tai epäjohdonmukaiselle soveltamiselle.",
        ],
      },
      {
        heading: "Toimitusketjun altistuminen kasvaa jatkuvasti",
        paragraphs: [
          "Riippuvuuksiin liittyvät löydökset kasvoivat jyrkästi jälleen tänä vuonna, mihin vaikuttivat sekä CI/CD-putken virhekonfiguraatiot että itse haavoittuvat paketit. Hyökkääjät kohdistavat yhä useammin build-putkeen pelkän julkaistun artefaktin sijaan.",
          "Organisaatiot, joilla oli kypsät software bill-of-materials -käytännöt, havaitsivat ja korjasivat riippuvuusriskit merkittävästi nopeammin kuin ne, jotka luottivat yksittäisiin ajankohtaskannauksiin.",
        ],
      },
      {
        heading: "Pilviympäristön virhekonfiguraatio on edelleen hiljainen enemmistö",
        paragraphs: [
          "Vuosien työkaluinvestoinneista huolimatta liian laajat IAM-roolit ja julkisesti altistuneet tallennustilat ovat edelleen yleisimpiä alkupääsyn reittejä, joita havaitsemme red team -toimeksiannoissa. Konfiguraation ajautuminen, ei alkuperäinen käyttöönottovirhe, on yleensä perimmäinen syy.",
        ],
      },
      {
        heading: "Mitä tämä tarkoittaa vuodelle 2026",
        paragraphs: [
          "Priorisoikaa valtuutustestaus jokaiselle uudelle API-päätepisteelle ennen julkaisua. Kohdelkaa build-putkeanne kuin tuotantoinfrastruktuuria. Ja investoikaa jatkuvaan pilviympäristön tilannevalvontaan vuosittaisten auditointien sijaan — ajautuminen tapahtuu viikoittain, ei vuosittain.",
        ],
      },
    ],
  },
  {
    enSlug: "state-of-cloud-misconfiguration",
    slug: "pilviympariston-virhekonfiguraation-tila",
    kind: "Raportti",
    title: "Pilviympäristön virhekonfiguraation tila",
    excerpt: "Datavetoinen katsaus IAM-, tallennus- ja verkkovirhekonfiguraatioihin, joita hyödynnetään yleisimmin todellisissa tunkeutumisissa.",
    date: "2025-09-02",
    readTime: "9 min lukuaika",
    sections: [
      {
        heading: "Yleiskatsaus",
        paragraphs: [
          "Analysoimme konfiguraatiolöydöksiä yli 400 pilviturvallisuustoimeksiannosta tunnistaaksemme virhekonfiguraatiomallit, jotka ketjutetaan useimmin todelliseen kompromissiin — emme pelkästään niitä, jotka vertailuarvoskannaukset merkitsevät.",
        ],
      },
      {
        heading: "IAM-oikeuksien hallitsematon laajeneminen",
        paragraphs: [
          "Haitalliset IAM-oikeuksien yhdistelmät — yksittäin kohtuullisia, yhdessä vaarallisia — esiintyivät suurimmassa osassa katselmoimistamme ympäristöistä. Jokerimerkkiin perustuva resurssien rajaus on edelleen suurin yksittäinen syy.",
        ],
      },
      {
        heading: "Suositukset",
        paragraphs: [
          "Siirtykää määräaikaisista pääsykatselmuksista jatkuvaan vähimpien oikeuksien valvontaan. Automatisoikaa sellaisten oikeusyhdistelmien tunnistaminen, jotka mahdollistavat oikeuksien eskaloinnin — ei vain yksittäin riskialttiiden myönnösten.",
        ],
      },
    ],
  },
  {
    enSlug: "ransomware-response-benchmarks",
    slug: "kiristysohjelmavasteen-vertailuarvot",
    kind: "Raportti",
    title: "Kiristysohjelmavasteen vertailuarvot",
    excerpt: "Havaitsemis- ja rajaamisaikadataa häiriötilanteiden hallinnan toimeksiannoista vuodelta 2025.",
    date: "2025-05-20",
    readTime: "8 min lukuaika",
    sections: [
      {
        heading: "Havaitseminen paranee, rajaaminen ei",
        paragraphs: [
          "Keskimääräinen havaitsemisaika valvomiemme asiakkaiden keskuudessa laski merkittävästi vuodesta toiseen. Keskimääräinen aika täydelliseen rajaamiseen sen sijaan pysyi suurelta osin ennallaan — pullonkaula on siirtynyt näkyvyydestä vastetoiminnan koordinointiin.",
        ],
      },
      {
        heading: "Mikä erottaa nopean rajaamisen hitaasta",
        paragraphs: [
          "Organisaatiot, joilla oli ennalta hyväksytyt häiriötilanteiden toimintamallit ja harjoitellut viestintäketjut, rajasivat häiriötilanteet murto-osassa siitä ajasta, jonka tarvitsivat organisaatiot, jotka improvisoivat vastetta hetkessä.",
        ],
      },
    ],
  },
];

export const whitepapersFi: ResourceItemFi[] = [
  {
    enSlug: "zero-trust-cloud-migration",
    slug: "zero-trust-pilvimigraatio",
    kind: "Julkaisu",
    title: "Zero Trust käytännössä: pilvimigraation viitekehys",
    excerpt: "Kenttätestattu lähestymistapa pilviympäristöjen kovennukseen ilman kehitysnopeuden hidastumista.",
    date: "2025-11-03",
    readTime: "15 min lukuaika",
    sections: [
      {
        heading: "Miksi zero trust -hankkeet pysähtyvät",
        paragraphs: [
          "Useimmat zero trust -ohjelmat epäonnistuvat vaiheistuksessa, ei arkkitehtuurissa — tiimit yrittävät pakottaa tiukan identiteetin varmennuksen kaikkialle kerralla, mikä rikkoo laillisia työnkulkuja ja laukaisee peruutuksia.",
          "Tämä viitekehys vaiheistaa zero trust -käyttöönoton riskipainotetun prioriteetin mukaan: identiteetti ja pääsy ensin, verkkosegmentointi toisena, jatkuva varmennus kolmantena.",
        ],
      },
      {
        heading: "Vaihe yksi: identiteettikeskeinen pääsy",
        paragraphs: [
          "Luokaa vahva identiteetin varmennus ja vähimpien oikeuksien pääsy perustaksi ennen verkkoarkkitehtuuriin koskemista. Jo pelkästään tämä vaihe sulkee suurimman osan hyödynnettävistä reiteistä, joita havaitsemme pilviympäristöissä.",
        ],
      },
      {
        heading: "Vaihe kaksi: mikrosegmentointi",
        paragraphs: [
          "Kun identiteettikontrollit ovat käytössä, segmentoikaa työkuormat sivuttaisliikkeen rajoittamiseksi. Suosittelemme segmentointia ensin tietojen arkaluonteisuuden mukaan, sitten sovellusrajojen mukaan.",
        ],
      },
      {
        heading: "Vaihe kolme: jatkuva varmennus",
        paragraphs: [
          "Siirtykää perimetripohjaisesta luottamuksesta jokaisen pyynnön jatkuvaan, kontekstuaaliseen varmennukseen — viimeinen vaihe, joka vaatii vahvimman perustan toteutuakseen häiriöittä.",
        ],
      },
    ],
  },
  {
    enSlug: "secure-sdlc-playbook",
    slug: "tietoturvallinen-sdlc-kasikirja",
    kind: "Julkaisu",
    title: "Tietoturvallisen SDLC:n käsikirja",
    excerpt: "Tietoturvasuunnittelun sulauttaminen ohjelmistokehityksen elinkaareen hidastamatta julkaisuja.",
    date: "2025-07-16",
    readTime: "11 min lukuaika",
    sections: [
      {
        heading: "Shift-left ilman kitkaa",
        paragraphs: [
          "Julkaisuja estävät tietoturvaportit luovat vastakkainasettelua tietoturva- ja kehitystiimien välille. Tämä käsikirja kuvaa, miten sulauttaa tietoturvatarkistuspisteet, jotka informoivat sen sijaan, että estäisivät.",
        ],
      },
      {
        heading: "Uhkamallinnus suunnitteluvaiheessa",
        paragraphs: [
          "Kevyet uhkamallinnusistunnot suunnittelukatselmuksen aikana löytävät arkkitehtuuriset tietoturvapuutteet ennen kuin yhtäkään koodiriviä on kirjoitettu — elinkaaren halvin kohta niiden korjaamiseen.",
        ],
      },
    ],
  },
  {
    enSlug: "incident-response-readiness",
    slug: "hairiotilannevalmius",
    kind: "Julkaisu",
    title: "Häiriötilannevalmius: tarkistuslista ennen tietomurtoa",
    excerpt: "Valmistelutyö, joka erottaa rajatun häiriötilanteen otsikoihin päätyvästä tietomurrosta.",
    date: "2025-03-11",
    readTime: "10 min lukuaika",
    sections: [
      {
        heading: "Käsikirja, joka kirjoitetaan etukäteen, ei tilanteen aikana",
        paragraphs: [
          "Jokainen häiriötilannesuunnitelma näyttää vankalta paperilla, kunnes sitä testataan todellisen paineen alla. Tämä tarkistuslista kattaa valmistelutyön — viestintäketjuista rikostekniseen valmiuteen — jonka useimmat organisaatiot jättävät väliin liian myöhään asti.",
        ],
      },
    ],
  },
];

export const caseStudiesFi: ResourceItemFi[] = [
  {
    enSlug: "global-payments-platform",
    slug: "globaali-maksualusta",
    kind: "Asiakastapaus",
    title: "Globaalin maksualustan suojaaminen suuressa mittakaavassa",
    excerpt: "Miten Fortune 500 -fintech-yritys vähensi kriittisiä löydöksiä 91 % kahden arviointisyklin aikana.",
    date: "2025-10-08",
    readTime: "7 min lukuaika",
    sections: [
      {
        heading: "Haaste",
        paragraphs: [
          "Globaalin, miljoonia päivittäisiä tapahtumia käsittelevän maksualustan oli kovennettava API-kerroksensa ja pilvi-infrastruktuurinsa ennen merkittävää viranomaisauditointia, häiritsemättä jatkuvan julkaisun tahtia, jossa julkaisuja tehdään kymmeniä päivässä.",
        ],
      },
      {
        heading: "Toimeksianto",
        paragraphs: [
          "RedShield Defense yhdisti tunkeutumistestauksen, tietoturvallisen koodikatselmoinnin ja pilviturvallisuuden suunnittelun 12 viikon ohjelmassa, työskennellen suoraan asiakkaan alustatiimin kanssa korjatakseen löydökset reaaliajassa loppuraporttia odottamisen sijaan.",
        ],
      },
      {
        heading: "Tulos",
        paragraphs: [
          "Kriittiset ja korkean vakavuuden löydökset vähenivät 91 % ensimmäisen ja toisen arviointisyklin välillä. Asiakas läpäisi viranomaisauditointinsa ilman merkittäviä löydöksiä ja on jatkanut RedShield Defensen kanssa säännöllisillä neljännesvuosittaisilla arvioinneilla.",
        ],
      },
    ],
  },
  {
    enSlug: "healthcare-platform-hipaa-readiness",
    slug: "terveysalustan-hipaa-valmius",
    kind: "Asiakastapaus",
    title: "HIPAA-valmius verkotetulle terveysalustalle",
    excerpt: "Etäterveysalustan teknisten suojatoimien valmistelu ensimmäistä HIPAA-vaatimustenmukaisuusauditointia varten.",
    date: "2025-06-24",
    readTime: "6 min lukuaika",
    sections: [
      {
        heading: "Haaste",
        paragraphs: [
          "Nopeasti kasvavan etäterveysalustan tuli osoittaa HIPAA:n teknisten suojatoimien vaatimustenmukaisuus ennen merkittävää terveysjärjestelmäkumppanuutta, tietoturvaohjelman jäädessä vielä jälkeen kasvusta.",
        ],
      },
      {
        heading: "Tulos",
        paragraphs: [
          "RedShield Defense toimitti puuteanalyysin, korjaussuunnitelman ja käytännön toteutustuen, jotka veivät alustan täyteen teknisten suojatoimien vaatimustenmukaisuuteen alle 90 päivässä, mikä mahdollisti kumppanuuden etenemisen.",
        ],
      },
    ],
  },
  {
    enSlug: "saas-soc2-fast-track",
    slug: "saas-soc2-nopeutettu",
    kind: "Asiakastapaus",
    title: "SOC 2:n nopeutettu läpivienti yritys-SaaS-toimittajalle",
    excerpt: "Miten Series C -vaiheen SaaS-yritys saavutti SOC 2 Type II -sertifioinnin yhdessä auditointisyklissä.",
    date: "2025-02-18",
    readTime: "6 min lukuaika",
    sections: [
      {
        heading: "Haaste",
        paragraphs: [
          "Yritys-SaaS-toimittajalla oli useita kauppoja jumissa hankinnassa SOC 2 -sertifioinnin odotuksessa, ilman olemassa olevaa vaatimustenmukaisuusohjelmaa ja pienellä tietoturvatiimillä.",
        ],
      },
      {
        heading: "Tulos",
        paragraphs: [
          "RedShield Defense rakensi kontrolliympäristön, toteutti valmiusarvioinnin ja koordinoi suoraan asiakkaan auditoijan kanssa. Yritys saavutti SOC 2 Type II -sertifioinnin ensimmäisellä auditointiyrityksellään ja vapautti yli 2 miljoonan dollarin arvosta jumissa ollutta yritysmyyntiputkea.",
        ],
      },
    ],
  },
];

export const blogPostsFi: ResourceItemFi[] = [
  {
    enSlug: "authorization-bugs-are-everywhere",
    slug: "valtuutusvirheita-kaikkialla",
    kind: "Blogi",
    title: "Valtuutusvirheitä on kaikkialla — tässä syy, miksi löydämme niitä jatkuvasti",
    excerpt: "Kenttähavainto siitä, miksi puutteellinen oliotason valtuutus on edelleen yleisin kriittinen löydös API-arvioinneissamme.",
    date: "2026-02-02",
    readTime: "5 min lukuaika",
    sections: [
      {
        heading: "Kaava kaavan takana",
        paragraphs: [
          "Lähes jokaisella löytämällämme puutteellisen oliotason valtuutuksen virheellä on sama perimmäinen syy: päätepiste, joka tarkistaa, onko käyttäjä tunnistautunut, mutta ei koskaan tarkista, onko hänellä valtuutus käyttää pyydettyä tiettyä resurssia.",
          "Tämä virheluokka selviää koodikatselmoinnista, koska se ei näytä väärältä irrallaan — koodi vaatii oikein voimassa olevan istunnon. Se on väärin vasta kontekstissa, kun kysytään: 'valtuutettu mihin tarkalleen ottaen?'",
        ],
      },
    ],
  },
  {
    enSlug: "reading-a-pentest-report",
    slug: "tunkeutumistestiraportin-lukeminen",
    kind: "Blogi",
    title: "Miten tunkeutumistestiraportti todella luetaan",
    excerpt: "Opas kehitysjohtajille löydösten priorisointiin hyödynnettävyyden ja liiketoimintavaikutuksen — ei pelkän CVSS-pisteytyksen — perusteella.",
    date: "2026-01-20",
    readTime: "6 min lukuaika",
    sections: [
      {
        heading: "CVSS-pistemäärä on lähtökohta, ei tuomio",
        paragraphs: [
          "Korkea CVSS-pistemäärä löydöksessä, joka vaatii fyysisen pääsyn sisäiseen työasemaan, kantaa erilaisen todellisen riskin kuin keskitason löydös, joka on altistunut avoimelle internetille. Lukekaa hyödynnettävyysosio ennen vakavuusluokitusta.",
        ],
      },
    ],
  },
  {
    enSlug: "secrets-in-ci-pipelines",
    slug: "salaisuudet-ci-putkissa",
    kind: "Blogi",
    title: "CI-putkenne todennäköisesti vuotaa salaisuuksia",
    excerpt: "Yleisiä malleja, joita näemme build-putkia auditoidessamme, ja miten korjata ne ennen kuin hyökkääjä löytää ne ensin.",
    date: "2025-12-11",
    readTime: "5 min lukuaika",
    sections: [
      {
        heading: "Build-lokit ovat aliarvostettu hyökkäyspinta",
        paragraphs: [
          "Yksityiskohtainen build-lokitus tallentaa usein ympäristömuuttujia, mukaan lukien tunnuksia, selkotekstinä — ja näitä lokeja säilytetään usein paljon pidempään ja paljon löyhemmällä pääsynhallinnalla kuin itse salaisuuksia.",
        ],
      },
    ],
  },
  {
    enSlug: "purple-team-vs-red-team",
    slug: "purple-team-vs-red-team",
    kind: "Blogi",
    title: "Purple team vs. red team: milloin kumpaakin kannattaa käyttää",
    excerpt: "Käytännön erittely siitä, milloin yhteistyössä toteutettu purple team -harjoitus voittaa täysin vastakkainasettelevan red team -toimeksiannon.",
    date: "2025-11-18",
    readTime: "4 min lukuaika",
    sections: [
      {
        heading: "Eri työkaluja eri kypsyystasoille",
        paragraphs: [
          "Jos havainnointitiiminne rakentaa vielä kattavuuttaan, purple team -harjoitus — jossa hyökkäävä ja puolustava tiimi tekevät yhteistyötä reaaliajassa — tuottaa nopeampaa, toimintakelpoisempaa oppimista kuin täysin sokea red team -toimeksianto.",
          "Säästäkää täysin vastakkainasetteleva red team tilanteisiin, joissa on tarpeen validoida havainnointi ja vastetoiminta realistisissa, koordinoimattomissa olosuhteissa.",
        ],
      },
    ],
  },
];

export const resourceKindsFi = [
  { key: "reports", label: "Raportit", singular: "Raportti", path: "/fi/resources/reports", enPath: "/resources/reports", ctaLabel: "Lue raportti", items: reportsFi },
  { key: "whitepapers", label: "Julkaisut", singular: "Julkaisu", path: "/fi/resources/whitepapers", enPath: "/resources/whitepapers", ctaLabel: "Lue julkaisu", items: whitepapersFi },
  { key: "case-studies", label: "Asiakastapaukset", singular: "Asiakastapaus", path: "/fi/resources/case-studies", enPath: "/resources/case-studies", ctaLabel: "Katso asiakastapaus", items: caseStudiesFi },
  { key: "blog", label: "Blogi", singular: "Artikkeli", path: "/fi/resources/blog", enPath: "/resources/blog", ctaLabel: "Lue artikkeli", items: blogPostsFi },
] as const;

export type ResourceKindKeyFi = (typeof resourceKindsFi)[number]["key"];

export function getResourceFiBySlug(kind: string, slug: string) {
  const group = resourceKindsFi.find((k) => k.key === kind);
  return group?.items.find((item) => item.slug === slug);
}
