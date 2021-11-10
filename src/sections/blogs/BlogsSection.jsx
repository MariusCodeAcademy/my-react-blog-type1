import { useState, useEffect } from 'react';
import BlogItem from '../../components/blog-item/BlogItem';

const blogDataArr = [
  {
    id: 1,
    title:
      'Elonas Muskas: parduosiu 24 mlrd. JAV dolerių vertės „Tesla“ akcijų dalį, jeigu... „Twitter“ vartotojai už tai balsuos. Kam to prireikė ir kodėl, tai turės didžiulių pasekmių?',
    text: `Pastaruoju metu daug kalbama apie tai, kad vieni turtingiausių pasaulio žmonių nemoka mokesčių. Daugelis jų didžiąją dalį savo turto valdo akcijų forma.
    Nors jų grynoji vertė nurodoma milijardais dolerių ir kas mėnesį gali svyruoti milijardais dolerių, ši vertė nėra likvidi, nebent jie parduotų šias akcijas – kitaip tai vadinama nerealizuotu pelnu.
        Šiuo metu mokesčių kodeksas ir finansų sistema yra sukurti remiantis nuostata, kad jūs neuždirbate pinigų, kol neparduosite tų akcijų ir nepajusite pelno. Dėl to milijardieriai kartais mato, kad jų grynoji vertė per metus padidėja milijardais dolerių, tačiau tais metais jiems nereikia mokėti jokių mokesčių.
        Tačiau dabar plinta prieštaringos kalbos apie šio nerealizuoto pelno apmokestinimą.
             Dabar, kai dėl pakilusios „Tesla“ akcijų vertės Elonas Muskas yra turtingiausias žmogus pasaulyje, jis yra kai kurių šių kalbų centre.
        „Tesla“ generalinis direktorius priešinosi šio nerealizuoto pelno apmokestinimui, tačiau dabar jis kreipėsi į „Twitter“ vartotojus, kad pasiūlytų alternatyvą.
        „Pastaruoju metu daug uždirbama iš nerealizuoto pelno, kuris yra mokesčių vengimo priemonė, todėl siūlau parduoti 10 % savo „Tesla“ akcijų. Ar palaikote tai?“  – klausia Elonas Muskas.`,
    url: '/blog',
    imgUrl:
      'http://www.technologijos.lt/upload/image/n/technologijos/automobiliai_ir_motociklai/S-91959/2-1-1.jpg',
  },
  {
    id: 2,
    title:
      'Aukščiausių pasaulio pastatų raida nuo 1901 iki 2022 m.: štai, kaip vystantis technologijoms, kilo vis aukštesni dangoraižiai (Video)',
    text: `Žmonijos žavėjimasis paukščiais labiausiai išryškėja orlaiviuose, kuriuos sukūrėme per daugelį metų. Bet kai žiūrime į miestus, taip pat matome architektus ir inžinierius, kurie bando vienas kitą pralenkti statydami aukščiausius statinius, išdidžiai stūksančius iki pat debesų.
    Dangoraižiams kilti taip pat padeda tai, kad aukštų pastatų statyba tapo vis ekonomiškesnė, ypač po to, kai industrializacija padidino miestų gyventojų skaičių ir žemės kainas.
Vien per 1908–1931 m. laikotarpį Niujorke šešis kartus buvo sumuštas aukščiausio pasaulyje pastato rekordas.
Šią tendenciją, žinoma, palaikė sparčiai besivystanti inžinerija: pradėjus naudoti plieninius karkasus, kurie galėjo būti naudojami vietoj laikančiojo mūro, aukštus pastatus statyti buvo lengviau ir pigiau nei naudojant laikantįjį mūrą, o išradus liftą, šis padarė gyvenimą viršutiniuose aukštuose žymiai patogesnį.
Šiame vaizdo įraše Kanados animatorius „FilmCore“ sukūrė dailiai atrodančią 3D animaciją, rodančią, kaip nuo 1901 m. iki 2022 m. išaugo ir išsivystė aukščiausi pasaulio pastatai.
 

Seka prasideda nuo 167 m aukščio Filadelfijos rotušės ir baigiasi Dubajaus „Creek“ bokštu, kuris, kaip planuojama, bus 1121 m aukščio.`,
    url: '/blog',
    imgUrl:
      'http://www.technologijos.lt/upload/image/n/technologijos/statybos/S-91936/2-1-1.jpg',
  },
  {
    id: 3,
    title:
      'Elektromobilis, kurio nereikės įkrauti mėnesių mėnesius - kaip sekasi „Lightyear One“ kūrėjams? (Video)',
    text: `„Lightyear One“ - tai naujas olandiškas elektromobilis, kuris popieriuje atrodo per gerai, kad būtų tiesa. Tačiau jis iš tikrųjų yra ruošiamas pasirodymui keliuose. „Lightyear One“ kūrėjai atskleidė, kad šiuo metu saulės energiją naudojantis elektromobilis yra bandomas. Pirminiai bandymų rezultatai yra tiesiog puikūs - atrodo, kad jo baterijų nereikės įkrauti kelis mėnesius.
    Kaip taip gali būti? Na, skaičiavimai rodo, kad vienam kilometrui itin aerodinamiškam „Lightyear One“ pakanka 83 Wh energijos. Skaičiuojama, kad per vieną valandą saulėkaitoje pastatytas automobilis gali gauti papildomų 12 km. Europos Komisija teigia, kad vidutinė kasdienė eruopiečio kelionės nesiekia nei 30 km. Tai iš esmės reiškia, kad „Lightyear One“ per dieną gautų daugiau energijos nei išleistų ir automobilį iš tinklo reikėtų įkrauti tik tada, kai susiruoštumėte į tolimą kelionę ar į jūsų šalį ateitų šalta ir tamsi žiema.
      Kompanija jau sėkmingai įvykdė 20 patikimumo bandymų - „Lightyear One“ kol kas pranoksta lūkesčius. Kompanijos vadovas Lexas Hoefslootas teigia, kad Nyderlanduose, kurie nėra tokie saulėti kaip pietų valstybės, šį automobilį daugeliui žmonių reikėtų įkrauti tik šaltuoju metų laiku ar kasdien keliaujant didesniais atstumais.
    Hoefslootas primena, kad kai kurios Europos šalys svarsto uždrausti automobilių su vidaus degimo varikliais pardavimą jau nuo 2030-iųjų. Tokie automobiliai kaip „Lightyear One“ gali pasiūlyti nepriklausomybę - ne tik nuo degalinių, bet ir nuo įkrovimo stotelių. Kompanijos vadovo nuomone, saulės elementai nuolat pinga ir jau dabar nėra labai brangūs. „Lightyear One“ stogo jėgainės efektyvumas - 20-35 %, todėl technologijai tikrai dar yra kur tobulėti.
 Pilnai įkrautas „Lightyear One“ gali nuvažiuoti 709 km. Nuvažiuojamas atstumas labai priklausys ir nuo orų - saulėtą dieną automobilis nuvažiuos toliau. Bet, aišku, apie taupymą sunku kalbėti, kai „Lightyear One“ kainuoja nuo 149 tūkstančių eurų.
 Kita vertus, „Lightyear One“ - pirmas savo rūšies atstovas. Pirmieji vandeniliniai automobiliai apskritai buvo neįperkami - gamintojai jų net nesiūlė. Technologijos pinga ir tai, ką pavyks pasiekti su „Lightyear One“, gali formuoti elektromobilių ateitį.
Jei viskas ir toliau eisis sėkmingai, „Lightyear One“ gatvėse pasirodys jau kitais metais.`,
    url: '/blog',
    imgUrl:
      'http://www.technologijos.lt/upload/image/n/technologijos/automobiliai_ir_motociklai/S-91949/2-1-light.jpeg',
  },
  {
    id: 4,
    title:
      'Mokslininkai yra beveik įsitikinę, kad rado portalą į penktąją dimensiją: šios dalelės gali „veikti kaip“ tamsioji medžiaga',
    text: `Neseniai atliktame tyrime mokslininkai teigia, kad tamsiąją medžiagą galima paaiškinti nustačius dalelę, kuri jungiasi su penktąja dimensija.
    Nors „iškreipta papildoma dimensija“ (angl. warped extra dimension, WED) yra populiaraus fizikos modelio, pirmą kartą pristatyto 1999 m., „prekės ženklas“, šis tyrimas, paskelbtas „The European Physical Journal C“, yra pirmasis, kuris nuosekliai panaudojo teoriją, kad paaiškintų ilgalaikę tamsiosios medžiagos problemą dalelių fizikoje.
Mūsų žinios apie fizinę visatą remiasi tamsiosios medžiagos idėja, kuri užima didžiąją dalį visatos materijos. Tamsioji medžiaga yra tam tikra priemonė, padedanti mokslininkams paaiškinti, kaip veikia gravitacija, nes daugelis savybių ištirptų arba subyrėtų be tamsiosios medžiagos „x faktoriaus“. Nepaisant to, tamsioji medžiaga nepažeidžia dalelių, kurias mes matome ir „jaučiame“, tai reiškia, kad ji turi turėti ir kitų ypatingų savybių.
„Vis dar yra klausimų, į kuriuos standartiniame fizikos modelyje nėra atsakymo“, – savo tyrime aiškina Ispanijos ir Vokietijos mokslininkai. „Vienas reikšmingiausių pavyzdžių yra vadinamoji hierarchijos problema, klausimas, kodėl Higso bozonas yra daug lengvesnis nei būdinga gravitacijai. Standartinis fizikos modelis negali prisitaikyti prie kai kurių kitų stebimų reiškinių. Vienas ryškiausių pavyzdžių yra tamsiosios medžiagos egzistavimas.“
 Naujuoju tyrimu siekiama paaiškinti tamsiosios medžiagos buvimą naudojant WED modelį. Mokslininkai tyrė fermionų mases, kurios, jų manymu, gali būti perduodamos į penktąją dimensiją per portalus, sukuriant tamsiosios medžiagos reliktus ir „fermioninę tamsiąją medžiagą“ penktojoje dimensijoje.
„Mes žinome, kad standartiniame fizikos modelyje nėra gyvybingos tamsiosios medžiagos kandidato“, – sako mokslininkai. „Taigi, jau šis faktas reikalauja naujos fizikos buvimo“.
Iš esmės, sukuriamos didžiosios fermionų masės, kurios pasireiškia vadinamojoje iškreiptoje penktosios dimensijos erdvėje. Šis kišeninis „tamsusis sektorius“ yra vienas iš galimų būdų paaiškinti didžiulį tamsiosios medžiagos kiekį, kurio iki šiol nepavyko aptikti naudojant bet kokius tradicinius matavimus, sukurtus standartiniam fizikos modeliui. Fermionai, įstrigę keliaudami per portalą į iškreiptą penktąją dimensiją, gali „veikti kaip“ tamsioji medžiaga.
 Kaip mes stebėtume tokią tamsiąją medžiagą, kad ją patikrintume? Iki šiol tai yra daugelio skirtingų tamsiosios medžiagos teorijų stabdis. Tačiau norint identifikuoti fermioninę tamsiąją medžiagą iškreiptoje penktojoje dimensijoje, tereikia tinkamo gravitacinių bangų detektoriaus. Iš tiesų, atsakymas į tamsiosios medžiagos mįslę gali būti visai šalia.
`,
    url: '/blog',
    imgUrl:
      'http://www.technologijos.lt/upload/image/n/mokslas/fizika/S-91951/2-1-1.jpg',
  },
];

function BlogsSection() {
  // console.log(JSON.stringify(blogDataArr));
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const resp = await fetch('/db/posts.json');
    const data = await resp.json();
    console.log(data);
    setPosts(data);
  }

  return (
    <section className='container'>
      <h2>Our blogs</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        aspernatur repudiandae nobis earum voluptate id adipisci nostrum
        mollitia, ipsam, asperiores, soluta dolorem facere exercitationem
        laborum. Magni mollitia laudantium vel tempore.
      </p>
      <div>
        {posts.map((postObj) => (
          <BlogItem key={postObj.id} item={postObj} />
        ))}
      </div>
    </section>
  );
}

export default BlogsSection;
