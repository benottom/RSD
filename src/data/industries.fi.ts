export interface IndustryFi {
  enSlug: string;
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  heroDesc: string;
  challenges: { title: string; desc: string }[];
  approach: string[];
  relatedServices: string[];
}

export const industriesFi: IndustryFi[] = [
  {
    enSlug: "financial-services",
    slug: "rahoituspalvelut",
    name: "Rahoituspalvelut",
    icon: "bank",
    shortDesc: "Suojaamme maksujärjestelmiä ja ydinpankki-infrastruktuuria kohdistetuilta tunkeutumisilta.",
    heroDesc: "Rahoituslaitokset kohtaavat jatkuvaa, resursseiltaan vahvaa kohdistamista. Suojaamme maksujärjestelmät, ydinpankkialustat ja asiakasrajapinnan sovellukset, jotka eivät voi altistua vaarantumiselle.",
    challenges: [
      { title: "Korkean arvon kohdeprofiili", desc: "Rahoituslaitokset kohtaavat jatkuvaa kohdistamista sekä järjestäytyneeltä rikollisuudelta että valtiollisilta toimijoilta." },
      { title: "Sääntelyn monimutkaisuus", desc: "PCI-DSS, DORA, PSD2 ja kansalliset pankkisäädökset edellyttävät päällekkäisiä, tiukkoja kontrollikokonaisuuksia." },
      { title: "Vanhat ydinjärjestelmät", desc: "Ydinpankkialustat ovat usein peräisin ennen nykyaikaista tietoturva-arkkitehtuuria ja vaativat huolellista, häiriötöntä kovennusta." },
    ],
    approach: [
      "Arvioimme maksujenkäsittelyjärjestelmät, asiakasrajapinnan sovellukset ja ydinpankki-infrastruktuurin samalla tarkkuudella, jota sekä rahoitusalan valvoja että todellinen hyökkääjä soveltaisi.",
      "Toimeksiannot rajataan minimoimaan häiriöt käynnissä oleviin kaupankäynti- ja maksujärjestelmiin, ja testausikkunoista sekä palautussuunnitelmista sovitaan ennen työn aloittamista.",
    ],
    relatedServices: ["penetration-testing", "compliance", "secops"],
  },
  {
    enSlug: "healthcare",
    slug: "terveydenhuolto",
    name: "Terveydenhuolto ja Life Sciences",
    icon: "pulse",
    shortDesc: "Suojaamme potilastietoja ja verkotettuja kliinisiä järjestelmiä HIPAA:n ja muiden vaatimusten mukaisesti.",
    heroDesc: "Sähköisistä potilaskertomuksista verkotettuihin kliinisiin laitteisiin — suojaamme järjestelmät, joihin terveydenhuollon organisaatiot luottavat potilastietojen suojaamisessa ja hoidon jatkuvuuden ylläpitämisessä.",
    challenges: [
      { title: "Verkotetut lääkinnälliset laitteet", desc: "IoT- ja kliiniset laitteet laajentavat hyökkäyspintaa tavoilla, joita perinteiset IT-tietoturvamallit eivät kata." },
      { title: "HIPAA ja sääntelyriski", desc: "Potilastietojen virheellinen käsittely aiheuttaa merkittäviä sääntely- ja maineriskejä." },
      { title: "Käytettävyyskriittiset järjestelmät", desc: "Tietoturvatestauksessa on huomioitava järjestelmät, joissa käyttökatko vaikuttaa suoraan potilashoitoon." },
    ],
    approach: [
      "Testaamme potilastietojärjestelmiä, potilasportaaleja ja verkotettuja kliinisiä järjestelmiä huolellisesti huomioiden ympäristöt, joissa käytettävyys on potilasturvallisuuskysymys, ei vain SLA-asia.",
      "HIPAA-yhteensopivat arviointimme kytkevät tekniset löydökset suoraan suojavaatimuksiin, jolloin korjaustyö palvelee sekä tietoturva- että vaatimustenmukaisuustavoitteita.",
    ],
    relatedServices: ["compliance", "penetration-testing", "cloud-security"],
  },
  {
    enSlug: "saas-technology",
    slug: "saas-ja-teknologia",
    name: "SaaS ja teknologia",
    icon: "layers",
    shortDesc: "Suojaamme sovellukset ja pilvialustat, joihin asiakkaanne luottavat tietojaan käsitellessään.",
    heroDesc: "SaaS-yrityksille tietoturvataso on myyntivaltti. Autamme teknologiaorganisaatioita rakentamaan arviointihistorian ja kontrollikypsyyden, jota niiden yritysasiakkaat edellyttävät.",
    challenges: [
      { title: "Monivuokralaisympäristön tietojen eristäminen", desc: "Vuokralaisrajojen pettäminen on yksi SaaS-arkkitehtuurin vakavimmista riskeistä." },
      { title: "Nopeat julkaisusyklit", desc: "Tietoturvatestauksen on pysyttävä jatkuvan julkaisun tahdissa muodostumatta pullonkaulaksi." },
      { title: "Yritysasiakkaiden hankintavaatimukset", desc: "SOC 2 -raportit ja tunkeutumistestien todistukset ovat usein edellytys yritysasiakassopimuksille." },
    ],
    approach: [
      "Testaamme monivuokralaisarkkitehtuurin nimenomaan eristyspuutteiden varalta, tavanomaisen sovellus- ja API-testauksen ohella koko alustallanne.",
      "Arviointitahti ja raportointimuodot on rakennettu solahtamaan suoraan yritysmyynti- ja hankintasyklienne sisään.",
    ],
    relatedServices: ["penetration-testing", "secure-code-review", "compliance"],
  },
  {
    enSlug: "critical-infrastructure",
    slug: "kriittinen-infrastruktuuri",
    name: "Kriittinen infrastruktuuri",
    icon: "factory",
    shortDesc: "Kovennamme teolliset ja operatiiviset järjestelmät, joilla ei ole varaa käyttökatkoihin.",
    heroDesc: "Operatiivisen teknologian ympäristöt edellyttävät erilaista testauskuria. Arvioimme teollisuuden ohjausjärjestelmät ja OT-verkot menetelmillä, jotka on rakennettu ympäristöihin, joissa turvallisuus on etusijalla.",
    challenges: [
      { title: "IT/OT-lähentymisen riski", desc: "Yritys-IT:n ja operatiivisen teknologian verkkojen yhdistäminen luo uusia sivuttaisliikkeen reittejä." },
      { title: "Turvallisuuskriittinen käytettävyys", desc: "Tavanomaiset testaustekniikat voivat aiheuttaa kohtuutonta riskiä käynnissä olevissa teollisuusympäristöissä." },
      { title: "Vanhentuvat ohjausjärjestelmät", desc: "SCADA- ja ICS-komponentteja ei usein voi päivittää tavanomaisilla IT-prosesseilla." },
    ],
    approach: [
      "Käytämme OT-turvallisia arviointimenetelmiä, mukaan lukien passiivista verkkoanalyysiä ja laboratoriotestausta edustavaa laitteistoa vasten, välttääksemme häiriöt käynnissä olevaan toimintaan.",
      "Löydökset priorisoidaan turvallisuus- ja jatkuvuusvaikutuksen mukaan yhteistyössä operaatio- ja insinööritiiminne kanssa.",
    ],
    relatedServices: ["cloud-security", "secops", "compliance"],
  },
  {
    enSlug: "government",
    slug: "julkishallinto",
    name: "Julkishallinto",
    icon: "landmark",
    shortDesc: "Täytämme viranomais- ja säädösvaatimukset hidastamatta ydintoimintojen toimitusta.",
    heroDesc: "Julkisen sektorin organisaatiot toimivat joidenkin tiukimpien tietoturvavaatimusten alaisina samalla, kun ne tuottavat elintärkeitä kansalaispalveluita. Autamme virastoja täyttämään vaatimustenmukaisuusvelvoitteet pysäyttämättä toimitusta.",
    challenges: [
      { title: "Tiukat sääntelyvelvoitteet", desc: "NIS2-direktiivin keskeisten toimijoiden velvoitteet ja kansallisen kyberturvallisuusviranomaisen vaatimukset edellyttävät tiukkoja, hyvin dokumentoituja kontrolleja." },
      { title: "Korkean arvon kohdestatus", desc: "Julkishallinnon järjestelmät kohtaavat jatkuvaa kohdistamista valtiollisilta ja hacktivisti-toimijoilta." },
      { title: "Vanhojen järjestelmien modernisointipaine", desc: "Tietoturva on rakennettava sisään modernisointihankkeisiin ilman uusien riskien syntymistä." },
    ],
    approach: [
      "Sovitamme arviointimenetelmän ja raportoinnin kehyksiin, joita virastoanne vasten mitataan, testaten samalla reittejä, joita todelliset hyökkääjät tavoittelevat.",
      "Neuvonantajamme ovat tukeneet julkisen sektorin asiakkaita NIS2-luokittelu- ja kansallisen kyberturvallisuusviranomaisen akkreditointiprosesseissa alusta loppuun.",
    ],
    relatedServices: ["compliance", "penetration-testing", "secops"],
  },
  {
    enSlug: "ecommerce",
    slug: "verkkokauppa",
    name: "Verkkokauppa ja vähittäiskauppa",
    icon: "cart",
    shortDesc: "Suojaamme maksuvirrat ja asiakastiedot vilkasliikenteisissä verkkokaupoissa.",
    heroDesc: "Sesonkihuippujen liikennemäärät ja maksukorttitiedot tekevät verkkokauppa-alustoista jatkuvan kohteen. Suojaamme verkkokaupat, maksuvirrat ja taustajärjestelmät, jotka pitävät tapahtumat turvallisina ja saatavilla.",
    challenges: [
      { title: "Maksukorttitietojen altistuminen", desc: "PCI-DSS-laajuus ja korttitietoympäristöt edellyttävät tiukkaa, jatkuvaa kontrollien validointia." },
      { title: "Suurten liikennemäärien käytettävyysvaatimukset", desc: "Sesonkihuiput jättävät vain vähän tilaa testauksen aiheuttamille häiriöille." },
      { title: "Kolmansien osapuolten integraatioiden laajeneminen", desc: "Maksunvälittäjät, markkinointityökalut ja toimitusintegraatiot laajentavat hyökkäyspintaa." },
    ],
    approach: [
      "Testaamme verkkokaupat, kassavirrat ja maksuintegraatiot PCI-DSS-laajuus mielessä alusta alkaen, minimoiden päällekkäisen työn tietoturvatestauksen ja vaatimustenmukaisuuden validoinnin välillä.",
      "Testausikkunat aikataulutetaan liikennekuvionne mukaan, ja sesonkihuippujen muutosrauhoitukset huomioidaan toimeksiannon suunnittelussa.",
    ],
    relatedServices: ["compliance", "penetration-testing", "cloud-security"],
  },
];

export function getIndustryFi(slug: string) {
  return industriesFi.find((i) => i.slug === slug);
}

export function getIndustryFiByEnSlug(enSlug: string) {
  return industriesFi.find((i) => i.enSlug === enSlug);
}
