export interface ServiceFi {
  enSlug: string;
  slug: string;
  menuGroup: "Offensiivinen tietoturva" | "Defensiiviset operaatiot";
  tag: string;
  name: string;
  shortName: string;
  shortDesc: string;
  heroDesc: string;
  icon: string;
  overview: string[];
  capabilities: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
}

export const servicesFi: ServiceFi[] = [
  {
    enSlug: "penetration-testing",
    slug: "tunkeutumistestaus",
    menuGroup: "Offensiivinen tietoturva",
    tag: "Offensiivinen tietoturva",
    name: "VAPT ja tunkeutumistestaus",
    shortName: "Tunkeutumistestaus",
    shortDesc: "Simuloimme todellisia hyökkääjiä verkkosovelluksianne, mobiilisovelluksianne, rajapintojanne ja verkkojanne vastaan paljastaaksemme hyödynnettävät heikkoudet ennen kuin he löytävät ne.",
    heroDesc: "Manuaalista, hyökkääjälähtöistä testausta, joka löytää sen, mitä automaattiset skannerit eivät — ketjutetut, liiketoimintalogiikkaan liittyvät ja oikeuksien eskalointiin johtavat reitit todelliseen kompromissiin.",
    icon: "target",
    overview: [
      "RedShield Defensen tunkeutumistestaus menee vaatimustenmukaisuuden rastittamista pidemmälle. Asiantuntijamme lähestyvät jokaista toimeksiantoa kuten hyökkääjä: kartoittamalla hyökkäyspintanne, ketjuttamalla matalan vakavuuden löydökset kriittisiksi riskeiksi ja varmistamalla hyödynnettävyyden sen sijaan, että raportoisimme teoreettisia riskejä.",
      "Jokainen arviointi rajataan niihin järjestelmiin, joilla on eniten merkitystä: asiakasrajapinnan sovelluksiin, sisäisiin rajapintoihin, pilvi-infrastruktuuriin ja niitä yhdistäviin verkkosegmentteihin. Raportoimme löydökset tavalla, jonka pohjalta kehitystiiminne voi toimia — priorisoituna todellisen hyödynnettävyyden ja liiketoimintavaikutuksen mukaan.",
    ],
    capabilities: [
      { title: "Verkkosovellustestaus", desc: "OWASP-standardin mukaista manuaalista testausta tunnistautumisesta, istunnonhallinnasta, liiketoimintalogiikasta ja injektiohaavoittuvuuksista." },
      { title: "API- ja mikropalvelutestaus", desc: "REST-, GraphQL- ja gRPC-rajapinnat arvioidaan puutteellisen oliotason valtuutuksen, rajoitusten kiertämisen ja skeemojen väärinkäytön varalta." },
      { title: "Mobiilisovellustestaus", desc: "iOS- ja Android-sovellukset käänteismallinnetaan turvattoman tallennuksen, heikon siirtoyhteyden salauksen ja asiakaspään logiikkavirheiden löytämiseksi." },
      { title: "Verkko- ja infrastruktuuritestaus", desc: "Ulkoiset ja sisäiset verkkoarvioinnit kattavat segmentoinnin, sivuttaisliikkeen ja oikeuksien eskaloinnin reitit." },
      { title: "Pilviympäristön konfiguraatiotestaus", desc: "IAM-, tallennus- ja työkuormakonfiguraatiot tarkastetaan hyödynnettävyysreittien, ei pelkän vertailuarvopoikkeaman perusteella." },
      { title: "Uudelleentestaus ja vahvistus", desc: "Jokainen kriittinen ja korkean riskin löydös testataan uudelleen veloituksetta, kunnes korjaus on vahvistettu." },
    ],
    process: [
      { step: "01", title: "Rajaus ja tiedustelu", desc: "Määrittelemme kohdejärjestelmät, pelisäännöt ja kokoamme tiedustelutietoa ulkoisesta jalanjäljestänne." },
      { step: "02", title: "Aktiivinen testaus", desc: "Manuaalisia hyödyntämisyrityksiä tunnistettuja hyökkäysreittejä vastaan, täydennettynä kohdennetulla automatisoidulla työkaluilla." },
      { step: "03", title: "Hyödyntäminen ja ketjutus", desc: "Yksittäiset löydökset ketjutetaan osoittamaan todellinen liiketoimintavaikutus, ei irrallisia CVE-tunnisteita." },
      { step: "04", title: "Raportointi ja läpikäynti", desc: "Priorisoitu löydösraportti sekä livenä pidettävä tekninen läpikäynti kehitys- ja tietoturvatiiminne kanssa." },
    ],
    outcomes: [
      { value: "3 200+", label: "Toimitettua arviointia ilman ylitettyä SLA:ta" },
      { value: "0 €", label: "Kriittisten löydösten uudelleentestauksen hinta" },
      { value: "48 h", label: "Keskimääräinen aika ensimmäiseen kriittiseen löydökseen" },
    ],
  },
  {
    enSlug: "cloud-security",
    slug: "pilviturvallisuus",
    menuGroup: "Defensiiviset operaatiot",
    tag: "Pilvi",
    name: "Pilviturvallisuuden suunnittelu",
    shortName: "Pilviturvallisuus",
    shortDesc: "Arkkitehtuurikatselmukset, tilannehallinta ja kovennus AWS-, Azure- ja GCP-ympäristöissä organisaatioille, jotka ajavat kriittisiä työkuormia suuressa mittakaavassa.",
    heroDesc: "Suunnittelemme pilviympäristöt kestämään kohdistettuja tunkeutumisia — emme vain läpäisemään vaatimustenmukaisuustarkastuksen.",
    icon: "cloud",
    overview: [
      "Pilviympäristön virheellinen konfigurointi on edelleen yksi yleisimmistä tietomurron reiteistä. RedShield Defense yhdistää arkkitehtuuritason katselmoinnin käytännön kovennustyöhön, jotta tavoitellun tietoturvatason ja todellisuudessa käyttöönotetun tilan välinen kuilu saadaan suljettua.",
      "Työskentelemme AWS-, Azure- ja GCP-ympäristöissä yhdessä alusta- ja DevOps-tiiminne kanssa toteuttaaksemme vähimpien oikeuksien IAM-mallin, työkuormien eristämisen ja jatkuvan konfiguraatiovalvonnan — hidastamatta toimitusnopeuttanne.",
    ],
    capabilities: [
      { title: "Arkkitehtuurikatselmus", desc: "Verkkosegmentoinnin, identiteettirajojen ja tietovirtojen kokonaisvaltainen katselmointi koko pilviympäristössänne." },
      { title: "IAM ja käyttöoikeuksien kovennus", desc: "Vähimpien oikeuksien periaatteen mukainen käytäntösuunnittelu ja haitallisten oikeusyhdistelmien poistaminen tileiltä ja rooleista." },
      { title: "Infrastructure-as-Code-auditoinnit", desc: "Terraform-, CloudFormation- ja Pulumi-määritykset tarkastetaan poikkeamien, turvattomien oletusarvojen ja paljastuneiden salaisuuksien varalta." },
      { title: "Pilviympäristön tilannehallinta (CSPM)", desc: "Jatkuva konfiguraatiovalvonta, joka kytkeytyy todellisiin hyödyntämisreitteihin — ei vain vertailuarvopisteisiin." },
      { title: "Kontti- ja Kubernetes-kovennus", desc: "Klusteri-, pod- ja image-tason kovennus CIS-vertailuarvojen ja ajonaikaisten uhkamallien mukaisesti." },
      { title: "Monipilvihallinta", desc: "Yhtenäiset tietoturvaperustasot ja suojakaiteet AWS-, Azure- ja GCP-ympäristöissä." },
    ],
    process: [
      { step: "01", title: "Kartoitus ja inventointi", desc: "Täydellinen inventaario tileistä, työkuormista, identiteeteistä ja tietovarastoista koko pilvijalanjäljessänne." },
      { step: "02", title: "Riskiperusteinen arviointi", desc: "Löydökset priorisoidaan hyödynnettävyyden ja vaikutusalueen mukaan — ei pelkän tarkistusmäärän perusteella." },
      { step: "03", title: "Kovennus ja korjaus", desc: "Käytännön toteutustukea yhdessä alustatiiminne kanssa." },
      { step: "04", title: "Jatkuva valvonta", desc: "Jatkuva tilannehallinta, joka havaitsee poikkeamat ennen kuin niistä tulee häiriötilanne." },
    ],
    outcomes: [
      { value: "3", label: "Pääpilvialustaa katettu päästä päähän" },
      { value: "91 %", label: "Keskimääräinen vähennys kriittisissä virhekonfiguraatioissa" },
      { value: "< 30 vrk", label: "Tyypillinen aika kovennettuun perustasoon" },
    ],
  },
  {
    enSlug: "secure-code-review",
    slug: "koodikatselmointi",
    menuGroup: "Offensiivinen tietoturva",
    tag: "Koodivarmistus",
    name: "Tietoturvallinen koodikatselmointi",
    shortName: "Koodikatselmointi",
    shortDesc: "Manuaalisia, hyökkääjän näkökulmasta tehtäviä lähdekoodiauditointeja, jotka paljastavat logiikkavirheet ja injektioreitit, jotka automaattiset skannerit jättävät jatkuvasti huomaamatta.",
    heroDesc: "Rivi riviltä tehtäviä auditointeja asiantuntijoilta, jotka lukevat koodia kuten hyökkääjät — logiikkaa, ei vain syntaksia.",
    icon: "code",
    overview: [
      "Staattisen analyysin työkalut löytävät kaavamaisesti tunnistettavat haavoittuvuudet. Ne jättävät jatkuvasti huomaamatta liiketoimintalogiikan virheet, valtuutuspuutteet sekä vähäriskisten ongelmien hienovaraisen ketjuttumisen kriittisiksi altistumiksi. RedShield Defensen tietoturvallinen koodikatselmointi sulkee tämän aukon manuaalisella, kontekstitietoisella analyysillä.",
      "Asiantuntijamme käyvät koodikantanne läpi kuten hyökkääjä sitä tutkisi — jäljittäen tietovirtoja, kartoittaen luottamusrajoja ja varmistaen, että pääsynhallinta kestää myös vihamielisissä olosuhteissa, ei vain odotetussa käytössä.",
    ],
    capabilities: [
      { title: "Tunnistautumis- ja istuntologiikka", desc: "Kirjautumisvirtojen, tokenkäsittelyn ja istunnon elinkaaren katselmointi ohitus- ja fiksaatioriskien varalta." },
      { title: "Valtuutus ja pääsynhallinta", desc: "Jokaisen oikeusrajan jäljittäminen sen varmistamiseksi, että horisontaalinen ja vertikaalinen pääsynhallinta todella pitävät." },
      { title: "Injektiot ja syötteenkäsittely", desc: "SQL-, komento-, template- ja deserialisointireitit jäljitetään lähteestä kohteeseen." },
      { title: "Kryptografisen toteutuksen katselmointi", desc: "Avainhallinnan, algoritmivalintojen ja toteutuksen validointi tunnettuja heikkouksia vasten." },
      { title: "Riippuvuuksien ja toimitusketjun katselmointi", desc: "Kolmansien osapuolten kirjastojen käyttö arvioidaan tunnettujen CVE-haavoittuvuuksien ja riskialttiiden integraatiomallien varalta." },
      { title: "CI/CD-putken tietoturva", desc: "Build- ja julkaisuputket katselmoidaan salaisuuksien paljastumisen ja luvattomien koodinlisäysreittien varalta." },
    ],
    process: [
      { step: "01", title: "Koodikantaan perehtyminen", desc: "Arkkitehtuurin läpikäynti kehitystiiminne kanssa luottamusrajojen ja tietovirtojen ymmärtämiseksi." },
      { step: "02", title: "Manuaalinen rivikohtainen katselmointi", desc: "Kohdennettu manuaalinen analyysi tunnistautumis-, valtuutus- ja tietojenkäsittelykoodista." },
      { step: "03", title: "Proof-of-concept-validointi", desc: "Löydökset vahvistetaan toimivilla proof-of-concept-hyväksikäytöillä, ei teoreettisilla kuvauksilla." },
      { step: "04", title: "Korjausohjeistus", desc: "Korjaussuositukset toimitetaan koodintasoisella tarkkuudella, jonka kehittäjänne voivat ottaa suoraan käyttöön." },
    ],
    outcomes: [
      { value: "12 000+", label: "Tunnistettua haavoittuvuutta asiakkaiden koodikannoissa" },
      { value: "100 %", label: "Löydöksistä vahvistettu proof-of-conceptilla" },
      { value: "4,8/5", label: "Kehitystiimien keskimääräinen tyytyväisyysarvio" },
    ],
  },
  {
    enSlug: "secops",
    slug: "hallinnoitu-secops",
    menuGroup: "Defensiiviset operaatiot",
    tag: "Operaatiot",
    name: "Hallinnoitu SecOps ja valvonta",
    shortName: "Hallinnoitu SecOps",
    shortDesc: "Jatkuva havainnointi, uhkametsästys ja häiriötilanteiden hallinta 24/7-uhkaoperaatiokeskuksemme toimesta.",
    heroDesc: "Ympärivuorokautinen havainnointi ja reagointi, jota tukee sama tiedusteludataputki, joka ohjaa offensiivisia arviointejamme.",
    icon: "radar",
    overview: [
      "Uhkat eivät noudata virka-aikoja, emmekä mekään. RedShield Defensen hallinnoitu SecOps-palvelu tarjoaa jatkuvaa valvontaa, uhkametsästystä ja häiriötilanteiden hallintaa päätelaitteissanne, pilviympäristöissänne ja verkossanne — analyytikkojen tukemana, jotka tuntevat hyökkääjien taktiikat omakohtaisesti.",
      "Koska havainnointimme perustuu omaan offensiiviseen testaukseemme, viritämme sen tunnistamaan tekniikoita, joita todelliset hyökkääjät käyttävät kaltaisianne organisaatioita vastaan — emme geneeristä allekirjoitusten tunnistusta.",
    ],
    capabilities: [
      { title: "24/7-uhkavalvonta", desc: "Jatkuva kattavuus päätelaitteissa, pilvityökuormissa ja verkkoliikenteessä uhkaoperaatiokeskuksestamme käsin." },
      { title: "Uhkametsästys", desc: "Ennakoivaa, hypoteesivetoista etsintää kompromissi-indikaattoreille, jotka välttävät automaattisen havainnoinnin." },
      { title: "Häiriötilanteiden hallinta", desc: "Nopea priorisointi, rajaaminen ja poistamistuki, kun häiriötilanne on vahvistettu." },
      { title: "Havainnointisääntöjen kehitys", desc: "Räätälöidyt havainnointisäännöt, jotka on viritetty ympäristöönne ja todellisiin hyökkääjätaktiikoihin perustuen." },
      { title: "SIEM- ja SOAR-integraatio", desc: "Havainnointi- ja reagointityökalujen käyttöönotto ja viritys osaksi nykyistä teknologiapinoanne." },
      { title: "Johdon raportointi", desc: "Säännölliset katsaukset, jotka muuntavat operatiivisen telemetrian liiketoiminnan kannalta relevantiksi riskitiedoksi." },
    ],
    process: [
      { step: "01", title: "Ympäristöön käyttöönotto", desc: "Telemetrialähteiden kytkentä ja perustason käyttäytymisen profilointi ympäristössänne." },
      { step: "02", title: "Havainnoinnin viritys", desc: "Havainnointilogiikka kalibroidaan infrastruktuurinne ja uhkamallinne mukaan alkuvaiheen viritysjakson aikana." },
      { step: "03", title: "Jatkuva operointi", desc: "24/7-valvonta, metsästys ja hälytysten priorisointi uhkaoperaatiokeskuksestamme." },
      { step: "04", title: "Reagointi ja raportointi", desc: "Vahvistetut häiriötilanteet eskaloidaan välittömästi, ja tietoturvatason kehityksestä raportoidaan säännöllisesti." },
    ],
    outcomes: [
      { value: "24/7", label: "Uhkaoperaatioiden kattavuus" },
      { value: "< 4 min", label: "Keskimääräinen havaitsemisaika" },
      { value: "6", label: "Aktiivista hälytystä valvottuna reaaliajassa keskimäärin" },
    ],
  },
  {
    enSlug: "compliance",
    slug: "vaatimustenmukaisuus",
    menuGroup: "Defensiiviset operaatiot",
    tag: "Hallinto",
    name: "Vaatimustenmukaisuus- ja riskineuvonta",
    shortName: "Vaatimustenmukaisuus ja riski",
    shortDesc: "SOC 2-, ISO 27001-, PCI-DSS- ja HIPAA-valmiusohjelmat, jotka kestävät oikeat auditoinnit — eivät vain tarkistuslistoja.",
    heroDesc: "Vaatimustenmukaisuusohjelmat rakennettu todellisten tietoturvatulosten ympärille — jotta auditointi on muodollisuus, ei paniikki.",
    icon: "shield-check",
    overview: [
      "Vaatimustenmukaisuuskehykset on luotu kodifioimaan perustason tietoturvakäytännöt, mutta pelkkä tarkistuslistan täyttäminen luo väärää turvallisuudentunnetta. RedShield Defense rakentaa vaatimustenmukaisuusohjelmat aidon tietoturvasuunnittelun päälle, jotta sertifiointi heijastaa todellista riskin vähenemistä.",
      "Ohjaamme organisaationne kehyksen valinnan, puuteanalyysin, kontrollien toteutuksen ja auditointiin valmistautumisen läpi — neuvonantajien tuella, jotka ovat istuneet auditointipöydän molemmilla puolilla.",
    ],
    capabilities: [
      { title: "SOC 2 -valmius", desc: "Type I- ja Type II -valmiusohjelmat, jotka kattavat kontrollisuunnittelun, näytön keräämisen ja auditointiyhteyshenkilönä toimimisen." },
      { title: "ISO 27001 -sertifiointituki", desc: "ISMS-suunnittelu ja -toteutus Annex A -kontrollien ja riskirekisterinne mukaisesti." },
      { title: "PCI-DSS-vaatimustenmukaisuus", desc: "Korttitietoympäristön rajaus, kontrollien toteutus ja QSA-koordinointi." },
      { title: "HIPAA ja terveydenhuollon vaatimustenmukaisuus", desc: "Teknisten ja hallinnollisten suojatoimien toteutus potilastietoja käsitteleville järjestelmille." },
      { title: "Kolmannen osapuolen riskienhallinta", desc: "Toimittajariskien arviointiohjelmat ja jatkuva toimitusketjun tietoturvavalvonta." },
      { title: "Politiikkojen ja hallintomallin kehitys", desc: "Tietoturvapolitiikat kirjoitettu noudatettaviksi, ei hyllyyn unohdettaviksi." },
    ],
    process: [
      { step: "01", title: "Kehyksen valinta", desc: "Oikean kehyksen tai yhdistelmän tunnistaminen asiakkaidenne, valvojienne ja riskiprofiilinne perusteella." },
      { step: "02", title: "Puuteanalyysi", desc: "Nykytilan katselmointi tavoitekontrolleja vasten sekä priorisoitu korjaussuunnitelma." },
      { step: "03", title: "Kontrollien toteutus", desc: "Käytännön tukea teknisten ja hallinnollisten kontrollien toteutuksessa." },
      { step: "04", title: "Auditointivalmistelu ja yhteydenpito", desc: "Näytön kokoaminen ja suora koordinointi auditoijanne kanssa sertifiointiin asti." },
    ],
    outcomes: [
      { value: "4", label: "Pääkehystä tuettuna päästä päähän" },
      { value: "100 %", label: "Asiakasauditointia läpäisty ensimmäisellä yrityksellä" },
      { value: "60+", label: "Sertifioitua neuvonantajaa henkilöstössä" },
    ],
  },
  {
    enSlug: "red-team",
    slug: "red-team-operaatiot",
    menuGroup: "Offensiivinen tietoturva",
    tag: "Hyökkäyssimulaatio",
    name: "Red team -operaatiot",
    shortName: "Red team -operaatiot",
    shortDesc: "Täyden laajuuden, tavoitelähtöiset toimeksiannot, jotka on mallinnettu valtiollisten ja järjestäytyneiden uhkatoimijoiden taktiikoiden mukaan.",
    heroDesc: "Tavoitelähtöisiä simuloituja tunkeutumisia, jotka testaavat ihmiset, prosessit ja teknologian yhdessä — kuten todellinen hyökkääjä tekisi.",
    icon: "crosshair",
    overview: [
      "Red team -toimeksianto ei ole laajempi tunkeutumistesti — se on hyökkääjäsimulaatio, jolla on määritelty tavoite ja joka kohdistuu koko havainnointi- ja reagointikykyynne. RedShield Defensen red team -operaatiot testaavat, kykeneekö organisaationne havaitsemaan ja reagoimaan päättäväiseen, kärsivälliseen hyökkääjään — ei vain sitä, onko haavoittuvuutta olemassa.",
      "Toimeksiannot rajataan todellisten liiketoimintatavoitteiden ympärille — kruununjalokivitietovaraston saavuttaminen, toimialueen kompromisointi tai tietyn häiriötilanneskenaarion testaus — ja toteutetaan taktiikoilla, jotka on mallinnettu toimialallenne relevanteimpien uhkatoimijoiden mukaan.",
    ],
    capabilities: [
      { title: "Tavoitelähtöiset toimeksiannot", desc: "Skenaariot rakennettu todellisten kruununjalokivienne ja uhkamallinne ympärille — ei geneeristen tavoitteiden." },
      { title: "Alkupääsyn simulointi", desc: "Tietojenkalastelu-, fyysiset ja ulkoiset hyväksikäyttövektorit mallinnettu todellisten tunkeutumiskampanjoiden mukaan." },
      { title: "Sivuttaisliike ja oikeuksien eskalointi", desc: "Kompromisoinnin jälkeistä taktiikkaa havainnointi- ja segmentointikontrollien testaamiseksi realistisissa olosuhteissa." },
      { title: "Purple team -yhteistyö", desc: "Valinnaiset yhteistyöistunnot SOC-tiiminne kanssa havainnointikattavuuden vahvistamiseksi reaaliajassa." },
      { title: "Fyysisen turvallisuuden testaus", desc: "Paikan päällä tehtävä social engineering ja fyysisen pääsyn testaus, kun se on toimeksiannon laajuudessa." },
      { title: "Yksityiskohtainen hyökkäyskertomus", desc: "Toimeksiannon täydellinen aikajana kytkettynä MITRE ATT&CK -kehykseen reagointitiimianne varten." },
    ],
    process: [
      { step: "01", title: "Tavoitteen määrittely", desc: "Toimeksiannon tavoitteet ja pelisäännöt määritellään yhdessä tietoturvajohtonne kanssa." },
      { step: "02", title: "Tiedustelu ja pääsy", desc: "Hyökkääjämallinnettu tiedustelu ja alkupääsyyritykset organisaatiotanne vastaan." },
      { step: "03", title: "Eskalointi ja tavoitteen tavoittelu", desc: "Sivuttaisliike ja oikeuksien eskalointi kohti määriteltyä toimeksiannon tavoitetta." },
      { step: "04", title: "Läpikäynti ja havainnointikatselmus", desc: "Täydellinen aikajanan läpikäynti SOC-tiiminne kanssa, verrattuna siihen, mitä havaittiin ja mitä ei." },
    ],
    outcomes: [
      { value: "17 vuotta", label: "Yhdistettyä offensiivisen tietoturvan kokemusta" },
      { value: "MITRE ATT&CK", label: "Jokainen toimeksianto kytketty standardikehykseen" },
      { value: "100 %", label: "Toimeksiantoa toteutettu allekirjoitettujen pelisääntöjen mukaisesti" },
    ],
  },
];

export const serviceMenuGroupsFi = ["Offensiivinen tietoturva", "Defensiiviset operaatiot"] as const;

export function getServiceFi(slug: string) {
  return servicesFi.find((s) => s.slug === slug);
}

export function getServiceFiByEnSlug(enSlug: string) {
  return servicesFi.find((s) => s.enSlug === enSlug);
}
