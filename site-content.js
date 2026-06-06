/*
 * Contenuti modificabili del sito.
 * Per aggiungere notizie o album, lavora qui: la pagina principale legge questi dati.
 */
const imgClasses = "w-full h-64 rounded-2xl shadow-md object-cover cursor-zoom-in hover:scale-[1.03] transition-transform duration-300 ease-in-out";

const newsDatabase = [
    {
        title: "Premiati i disegni meritevoli sul tema dell'Acqua, promosso dai Lions, alla Scuola Media Montanari di Mirandola",
        date: "30 Mag 2026",
        category: "prima-pagina",
        tag: "Prima Pagina",
        tagClass: "bg-[#034EA2]/10 text-[#034EA2]",
        cardClass: "cat-prima-pagina",
        img: "Notizie/acqua-montanari-premiazione.png",
        excerpt: "Lo scorso 26 maggio presso la Scuola Media Montanari di Mirandola si è svolta la premiazione dei dieci alunni più meritevoli...",
        content: `
            <p>Lo scorso 26 maggio presso la Scuola Media Montanari di Mirandola, si è svolta la premiazione dei dieci alunni più meritevoli per aver eseguito disegni sul tema dell'Acqua, nell'ambito dell'omonimo progetto promosso dal Distretto Lions 108Tb, di cui fa parte il Lions Club Mirandola.</p>
            <p>La premiazione è avvenuta alla presenza degli ospiti Lions: Lorella Ansaloni, socia del Lions Club Mirandola e Coordinatrice Distrettuale dell'Area Ambiente, Sergio Vaiani, Coordinatore del progetto Acqua, ed Enzo Ragazzi, presidente del Lions Club Mirandola.</p>
            <p>Dopo un breve intervento di Sergio Vaiani sull'importanza dell'acqua nelle sue mille sfaccettature, Enzo Ragazzi ha spiegato in breve le finalità dei Lions e le otto cause umanitarie che essi perseguono in ogni parte del mondo. Infine Lorella Ansaloni ha parlato dell'ambiente e delle problematiche che si incontrano non avendone cura, ricordando che la terra ci è pervenuta e dobbiamo consegnarla, possibilmente non degradata, alle generazioni future.</p>
            <p>Si è proceduto, poi, alla premiazione delle opere più meritevoli e originali, riconoscendo a ciascuno dei giovani autori un attestato di partecipazione e, alla scuola, un buono per l'acquisto di materiale scolastico. Il tutto si è svolto in un'atmosfera di serena convivenza e piacevole condivisione, cui hanno preso parte anche la D.ssa Morselli, preside, e altri insegnanti dei ragazzi.</p>
            <div class="mt-8 grid grid-cols-1 gap-4">
                <img src="Notizie/acqua-montanari-premiazione.png" class="${imgClasses}" onclick="openLightbox(this.src)">
            </div>
        `
    },
    {
        title: "Due importanti services a favore dei giovani, compiuti in maggio dal Lions Club Mirandola, nelle scuole del territorio",
        date: "30 Mag 2026",
        category: "prima-pagina",
        tag: "Prima Pagina",
        tagClass: "bg-[#034EA2]/10 text-[#034EA2]",
        cardClass: "cat-prima-pagina",
        img: "Notizie/services-giovani-orto.png",
        excerpt: "Due importanti services a favore dei giovani sono stati compiuti in maggio dal Lions Club Mirandola nelle scuole del territorio...",
        content: `
            <p>Il primo service si è svolto l'8 maggio presso le scuole primarie di Medolla ed è consistito nella creazione di un orto didattico nel giardino intorno alla scuola. Ha visto impegnati nella preparazione della terra e nella piantumazione delle pianticelle da fiore e da orto gli alunni della classi quarte.</p>
            <p>Il progetto è stato curato da Lorella Ansaloni, socia del Lions Club Mirandola e coordinatrice dell'Area Ambiente del Distretto Lions 108Tb. Lorella ha spiegato ai ragazzi il valore della salvaguardia dell'ambiente con la sua biodiversità, che racchiude la complessità della vita sulla Terra da cui dipende direttamente la sopravvivenza dell'uomo.</p>
            <p>Appassionarsi fin dall'età giovanile alla salvaguardia dell'ambiente con esperienze pratiche e dirette, come la cura delle piante e dei fiori, è molto importante. In effetti, gli alunni si sono applicati subito al lavoro di giardinieri loro assegnato con dedizione e hanno condotto a termine l'opera con un entusiasmo che aumenterà certamente quando, fra qualche tempo, ne vedranno, con orgoglio, gli sviluppi: la natura è infatti generosa con chi dimostra di stare dalla sua parte.</p>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <figure>
                    <img src="Notizie/services-giovani-orto.png" class="${imgClasses}" onclick="openLightbox(this.src)">
                    <figcaption class="mt-2 text-sm text-gray-500 italic">Gli alunni al lavoro, mentre sullo sfondo Enzo Ragazzi, Lorella Ansaloni e le insegnanti sovrintendono.</figcaption>
                </figure>
                <img src="Notizie/services-giovani-orto-2.png" class="${imgClasses}" onclick="openLightbox(this.src)">
            </div>
            <p>Il secondo service ha avuto luogo l'11 maggio presso l'Auditorium Rita Levi-Montalcini e ha riguardato l'educazione alla sicurezza stradale per gli studenti delle classi quarte di due delle scuole secondarie superiori di Mirandola, cioè l'Istituto Galilei e il Liceo Giovanni Pico.</p>
            <p>Una volta tanto, l'importante argomento non è stato trattato con una lezione frontale, magari noiosa e poco interessante, ma sotto forma di vero e proprio spettacolo teatrale dal titolo On the road, nel quale il bravissimo attore Daniele Goldoni, cantautore e cantastorie mantovano, si è prodotto in un lungo monologo, riuscendo a catturare l'attenzione dei ragazzi sui problemi della sicurezza stradale.</p>
            <p>Il racconto ha messo al centro alcuni giovani che, alla fine, vedono premiata la loro prudente scelta di stare lontani dai pericoli notturni della strada. Sono infatti all'ordine del giorno gli innumerevoli e tragici incidenti nei quali tanti giovani perdono la vita durante i weekend.</p>
            <div class="mt-8 grid grid-cols-1 gap-4">
                <figure>
                    <img src="Notizie/services-giovani-goldoni.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">
                    <figcaption class="mt-2 text-sm text-gray-500 italic">Da sinistra, Enzo Ragazzi si congratula con Daniele Goldoni, attore.</figcaption>
                </figure>
            </div>
        `
    },     {         title: "Visita della Governatrice Teresa Filippini al Lions Club Mirandola: riconoscimenti e spirito \"We Serve\"",         date: "29 Apr 2026",         category: "rassegna-stampa",         tag: "Rassegna Stampa",         tagClass: "bg-[#FFC72C]/10 text-[#b58600]",         cardClass: "cat-rassegna-stampa",         img: "Notizie/Lions-Aprile-2026-copertina-800x445.jpg",         excerpt: "Il 28 Aprile 2026 il Lions Club Mirandola ha avuto il piacere di accogliere in visita ufficiale la Governatrice del Distretto 108 TB, Teresa Filippini...",         content: `             <p>Il 28 Aprile 2026 il Lions Club Mirandola ha avuto il piacere di accogliere in visita ufficiale la Governatrice del Distretto 108 TB, Teresa Filippini, accompagnata dal suo staff, nella suggestiva cornice di Villa Fondo Tagliata.</p>             <p>A seguito della visita ispettiva, il Club ha ricevuto un sentito plauso per l'ottimo spirito organizzativo, per le numerose attività svolte sul territorio e per il numero di soci in costante crescita. Un riconoscimento importante che conferma l'impegno e la vitalità del gruppo.</p>             <p>La serata è poi proseguita con una conviviale all'insegna dell'amicizia, durante la quale sono stati condivisi saluti e ringraziamenti reciproci per il lavoro svolto, sempre guidati dal principio che accomuna tutti i Lions: We Serve.</p>                          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">                 <img src="Notizie/Lions-Aprile-2026-1-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-Aprile-2026-2-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-Aprile-2026-3-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-Aprile-2026-4-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-Aprile-2026-5-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-Aprile-2026-7-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-Aprile-2026-8-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-Aprile-2026-9-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">             </div>         `     },     {         title: "Il Lions Club Mirandola al Lions Day",         date: "12 Apr 2026",         category: "rassegna-stampa",         tag: "Rassegna Stampa",         tagClass: "bg-[#FFC72C]/10 text-[#b58600]",         cardClass: "cat-rassegna-stampa",         img: "Notizie/lions-day-mirandola-800x445.jpg",         excerpt: "Il Lions Club Mirandola ha tenuto il suo Lions Day istallando l'ospedale da campo\" in piazza Costituente di Mirandola...",         content: `             <p>Il Lions Club Mirandola ha tenuto il suo Lions Day istallando l'ospedale da campo" in piazza Costituente di Mirandola che ha consentito lo svolgimento di uno screening gratuito della salute offerto ai cittadini, nella mattinata di domenica 12 aprile.</p>             <p>Lo screening è consistito nella misura della pressione arteriosa e della glicemia, con l'esecuzione dell'ecografia tiroidea e la verifica dell'ambliopia nei bambini.</p>             <p>Col coinvolgimento di più di venti soci del Club e di alcuni medici specialisti (anch'essi soci Lions e nn) e col supporto delle strutture delle associazioni AVIS, AMO e Meneco' di Medolla, sono state esamine circa 200 persone (55% donne e 45% uomini) riscontrando in alcune di esse problemi occulti che ne hanno consigliato l'invio per ogni ulteriore approfondimento ai medici curanti.</p>             <p>Il Lions Day ha altresì permesso l'esecuzione di un importante service destinando all'AVIS (che lo ha vinto nel sorteggio con l'AMO) il ricavato della vendita, avvenuta durante la mattinata, delle splendide piantine fiorite offerte dalla ditta Vivai Morselli di Medolla.</p>         `     },     {         title: "Al Lions si discute sui danni nei giovani dovuti dalla digitalizzazione",         date: "31 Mar 2026",         category: "prima-pagina",         tag: "Prima Pagina",         tagClass: "bg-[#034EA2]/10 text-[#034EA2]",         cardClass: "cat-prima-pagina",         img: "Notizie/IMG_20260324_230429455_HDR-800x445.jpg",         excerpt: "Il 24 marzo u.s. si è svolta presso la sala conviti della polisportiva quarantolese la serata del LC Mirandola dedicata ai problemi provocati nei giovani...",         content: `             <p>Il 24 marzo u.s. si è svolta presso la sala conviti della polisportiva quarantolese la serata del LC Mirandola dedicata ai problemi provocati nei giovani dall’abuso delle moderne tecnologie digitali (in primis: il telefonino, il personal computer e i relativi software). Ospite d’onore è stato il Dott. Thamianos Fanos, psichiatra e allievo del prof. Vittorino Andreoli. E’ stato responsabile del reparto di psichiatria dell’ospedale di Pieve di Coriano fino a qualche tempo fa e attualmente esercita la libera professione in provincia di Mantova. Il Dott. Fanos è un esperto della materia: “Giovani, tecnologie e ritiro sociale” (tema dell’incontro) e ha una lunga esperienza con le patologie nei giovani dovute alle loro interazioni con i moderni mezzi di comunicazione.</p>             <p>La serata è vissuta anche su un’ottima cena preparata dai risottari di Villimpenta ai quali va il plauso dei commensali per il loro piatto tradizionale: il gustosissimo riso alla pilotta servito con le costine di maiale (il “puntel”).</p>             <p>Il Dott. Fanos, presentatosi in un abito assolutamente anticonvenzionale, per giustificare il suo spirito “ribelle” ha premesso il suo intervento con un aneddoto di quando tempo fa in ospedale era stato scambiato (sempre a causa della sua eccentricità) per un ricoverato del reparto psichiatrico e dovette faticare non poco per farsi riconoscere, invece, come medico del reparto: le apparenze talvolta ingannano! Ai presenti della serata è quindi bastato poco per capire che il relatore, nonostante l’aspetto esteriore, era lo psichiatra, piuttosto che un suo paziente.</p>             <p>Introdotto dal socio Lions Nunzio Borelli, il  Dott. Fanos ha spiegato che il cervello degli adolescenti è molto diverso da quello degli adulti.  L’età dai 9 ai 15 anni è quella in cui avvengono le grandi trasformazioni che si completano più avanti nella vita. In quel periodo, il ragazzo è preda di grandi emozioni, si entusiasma per le cose nuove, è alla ricerca del piacere, ma la parte inibitrice (cioè, quella che lo “frena”) si svilupperà in lui solo più tardi: in sua assenza, deve essere esercitata dalla famiglia. Quando, però, il freno inibitore “famigliare” manca, può capitare che l’adolescente si avvicini, per esempio, alle droghe. Se ciò avviene molto presto, la parte inibitoria del giovane non si svilupperà mai più ed egli sarà rovinato per sempre. </p>             <p>Poi le differenze con gli adulti si acuiscono anche per altri motivi. Gli adulti vengono da generazioni in cui si allenava la memoria a lungo termine con date, numeri di telefono, definizioni mnemoniche, ecc. A questo proposito, il relatore afferma che i taxisti di Londra sono tra coloro che hanno la memoria più sviluppata perché devono ricordare i nomi di tutte le strade della città. I giovani invece non memorizzano l’informazione, ma iniziano a memorizzare dove trovarla. Non ricordano cosa sia successo in una certa data, ma sanno esattamente come recuperare ciò in pochi secondi sullo smartphone, per esempio, passando velocemente da tik-tok a Whatsapp, poi a una ricerca su Wikipedia e di nuovo alla musica, ecc. Questo multitasking è una caratteristica degli adolescenti di oggi che finisce per fornire dati solo alla memoria a breve, mentre quella a lungo termine ne viene esclusa. I giovani hanno la capacità di scremare velocemente grandi quantità di dati, ma fanno molta fatica a mantenere l'attenzione su un singolo compito per un lungo periodo. </p>             <p>Oltre al rischio che il pensiero critico non si sviluppi (per connettere fra loro due idee bisogna averle salvate in testa, non su uno schermo!), ciò comporta anche tutta una serie di patologie di natura “digitale”, fra cui si ricordano, per citarne solo alcune: ansietà, dipendenza, deprivazione del sonno, ritiro sociale. In quest’ultima, molto grave, il giovane si isola completamente dal mondo fisico per vivere esclusivamente in quello digitale. In Giappone questi ragazzi, di solito appartenenti a famiglie ricche, si chiamano Hikikomori e si stima che siano più di 1 milione. Anche la depressione, dovuta alla preoccupazione per il futuro del pianeta, all’incertezza del lavoro e alla vetrina costante di vite perfette proposte dai social media, trova il suo terreno fertile nell’era “digitale”: molti suicidi fra i giovani nascono da essa. </p>             <p>La stessa sessualità è oggetto di profondi cambiamenti. Mentre gli adulti delle passate generazioni erano legati all’identità binaria (ossia: maschio e femmina), le ultime generazioni (millennials e generazione Alpha) si sentono o entrambi, o nessuno dei due, o qualcosa di fluido. In conclusione, la relazione del Dott. Fanos ha spiegato i gravi danni causati dalle “patologie digitalmente correlate” sui giovani, ma ora alle famiglie e a tutta la società spetta il compito di mettere in atto adeguate strategie di prevenzione e protezione.  I.P.</p>                          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">                 <img src="Notizie/IMG_20260324_204114256_HDR-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/IMG_20260324_230315873_HDR-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/IMG_20260324_225233150_HDR-768x1024.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">             </div>         `     },     {         title: "Presentate le candidature per le cariche del Lions Club Mirandola 2025-2027",         date: "13 Mar 2026",         category: "rassegna-stampa",         tag: "Rassegna Stampa",         tagClass: "bg-[#FFC72C]/10 text-[#b58600]",         cardClass: "cat-rassegna-stampa",         img: "Notizie/Lions-cena-soci-Mirandola-3-800x445.jpg",         excerpt: "Si è svolta in un clima di partecipazione e amicizia la serata dedicata alla presentazione delle candidature per le cariche sociali...",         content: `             <p>Si è svolta in un clima di partecipazione e amicizia la serata dedicata alla presentazione delle candidature per le cariche sociali e per il Consiglio del Lions Club Mirandola per il biennio 2025-2027.</p>             <p>La lista dei candidati è stata presentata ai soci ed approvata durante l'incontro; sarà quindi sottoposta alla votazione ufficiale dell'assemblea dei soci nella riunione del prossimo 14 aprile.</p>             <p>La serata, che ha visto la presenza di quasi tutti i soci del Club, si è svolta in un contesto particolarmente suggestivo: l'Acetaia Aula Mater del socio Mauro Gabrielli, in via Bosco 39 a Villafranca di Medolla. Un'occasione conviviale che ha unito il momento istituzionale alla scoperta di una delle eccellenze del nostro territorio.</p>                          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">                 <img src="Notizie/Lions-cena-soci-Mirandola-5-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-cena-soci-Mirandola-7-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-cena-soci-Mirandola-3-768x1024.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-cena-soci-Mirandola-4-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-cena-soci-Mirandola-2-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-cena-soci-Mirandola-1-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/Lions-cena-soci-Mirandola-6-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">             </div>         `     },     {         title: "Al Lions Club Mirandola l'intermeeting su: “HIV-AIDS 2026: ha ancora senso parlarne?”",         date: "04 Mar 2026",         category: "prima-pagina",         tag: "Prima Pagina",         tagClass: "bg-[#034EA2]/10 text-[#034EA2]",         cardClass: "cat-prima-pagina",         img: "Notizie/IMG_20260224_231036037_HDR-1-800x445.jpg",         excerpt: "Notevole interesse ha suscitato la serata del Lions Club Mirandola in inter-meeting con i Club Lions di Finale Emilia e Castelfranco Emilia...",         content: `             <p>Notevole interesse ha suscitato la serata del Lions Club Mirandola in inter-meeting con i Club Lions di Finale Emilia e Castelfranco Emilia lo scorso 24 febbraio, in cui è stato ospitato, quale illustre relatore Guido Poli, professore ordinario di patologia all'Università Vita-Salute S. Raffaele (Milano) ed esperto virologo con alle spalle una lunga esperienza di lavoro col prof. Anthony Fauci, di Bethesda negli Usa. Il prof. Poli è originario di Poggio Rusco, dove ama tornare di tanto in tanto per trovare gli amici di un tempo, fra i quali anche Enzo Ragazzi, attuale presidente del LC Mirandola.</p>             <p>L'argomento toccato nella sua relazione riguarda il calo di attenzione mediatica sull'AIDS che non coincide affatto con la scomparsa del virus HIV (virus dell'immunodeficienza umana) che lo causa e che rappresenta ancora una formidabile sfida per la salute pubblica mondiale. Il professore ha ricordato la scoperta del virus HIV avvenuta nel 1983 e la dimostrazione che esso è l'unica causa dell'AIDS, nel 1984. Il virus HIV nasce in Africa Centrale (Zaire/Ruanda), dove i primi studi evidenziarono la sua origine confinata agli scimpanzé, animali macellati e destinati all'alimentation. La contaminazione degli africani con quel virus avvenne quindi facilmente.</p>             <p>Poi nella storia più recente, il virus ebbe un passaggio ad Haiti, molto frequentata negli anni 70 dagli omosessuali americani che lo portarono in USA e da qui esso si sparse in tutto il mondo. Da quel momento, si cominciò a chiamarlo col nome attuale di HIV: un nuovo tipo di virus, un retrovirus, che, una volta acquisito, non si può più eliminare dall'organismo umano. Le possibilità di contagio avvengono soprattutto per via sessuale e in minima parte per effetto di trasfusioni di sangue, o consumo di eroina, oppure per trasmissione da madre a feto/bambino.</p>             <p>L'infezione con HIV, se non trattata con farmaci, è letale in oltre il 95% dei casi. Essa ha una fase iniziale di manifestazione entro i primi 2-3 mesi dal contagio, seguita da una lunga latenza clinica di 8-10 anni durante i quali il contagiato conduce vita pressoché normale. Comincia poi la fase terminale (di 1-2 anni) di vero AIDS conclusa con la morte. Dal 1996, però, è stata introdotta la terapia antiretrovirale di combinazione (cART) in seguito alla quale le morti per AIDS sono andate drasticamente calando. In particolare, rispetto al 2010, mentre le persone infettate nel mondo con l'HIV sono aumentate del 25%, le morti sono calate del 51% per anno, assieme al numero di nuove infezioni, anch'esse calate del 39% per anno.</p>             <p>Tutto ciò è avvenuto grazie alla terapia cART che nel tempo è migliorata, diventando meno gravosa per gli infettati, con la progressiva riduzione (da 30 a 2) delle compresse da assumere ogni giorno. La cART ha realizzato oggigiorno la situazione U=U che significa Undetectable=Untransmissible, ossia se la carica virale nel sangue di una persona infettata con l'HIV non è rilevabile, allora quella persona, se in terapia, può concepire figli senza il rischio d'infettare il partner. Non esiste, però, un vaccino contro l'HIV. La ragione sta nel fatto che il nostro sistema immunitario non è in grado di eliminarlo, in quanto il virus è estremamente variabile e si nasconde nel DNA delle cellule infettate. Il contagio può essere evitato innanzitutto con la protezione nei rapporti sessuali, oppure, quando essa non sia stata adottata e si nutrano dubbi sull'eventualità del contagio, si può ricorrere a una profilassi preventiva che si fa abitualmente con farmaci da assumere per via orale su base quotidiana.</p>             <p>Nonostante i progressi della scienza medica e farmacologica, in Italia si registrano ancora oltre 2300 nuove diagnosi di HIV all'anno (nel 2024), con trasmissione soprattutto per via sessuale. Tutti i rapporti sessuali non protetti con persone che non si conoscono sono potenzialmente a rischio: maggiore nel rapporto anale e minore in quello orale. Un test effettuato entro 2-3 giorni da un rapporto a rischio consente di valutare se sottoporsi, o meno, alla profilassi post-esposizione temporanea con farmaci cART.</p>             <p>L'amara conclusione del professore è che nel 1980-90 non c'erano i social, ma se ne parlava di più, c'era più attenzione all'educazione sessuale e ai rischi della vita sessuale promiscua. Dopo l'avvento della cART (dal 1996 in poi) l'infezione da HIV e l'AIDS sono state considerate erroneamente malattie curabili e quindi derubricate dall'agenda politica, ma è bene tenere presente che "il nemico più pericoloso è quello a cui nessuno pensa" (citando la frase da "Angeli e Demoni" di Dan Brown) ed essere prudenti. La serata si è conclusa con l'ingresso nel Lions Club Mirandola di un nuovo socio: Gianni Sprea, accolto con un caloroso applauso di benvenuto. I.P.</p>                          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">                 <img src="Notizie/IMG-20260226-WA0005-1-768x1024.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">             </div>         `     },     {         title: "Serata di formazione Lionistica 10 febbraio 2026",         date: "14 Feb 2026",         category: "prima-pagina",         tag: "Prima Pagina",         tagClass: "bg-[#034EA2]/10 text-[#034EA2]",         cardClass: "cat-prima-pagina",         img: "Notizie/IMG_20260210_224441758_HDR-800x445.jpg",         excerpt: "L'incontro dello scorso 10 febbraio 2026 del Lions Club Mirandola si è svolto presso i locali della parrocchia di Quarantoli...",         content: `             <p>L'incontro dello scorso 10 febbraio 2026 del Lions Club Mirandola si è svolto presso i locali della parrocchia di Quarantoli ed è stato riservato alla formazione lionistica dei soci.</p>             <p>Graditissima ospite e relatrice della serata è stata la Dott.ssa Stefania Parenti, coordinatrice Sviluppo della Leadership-GLT del Distretto 108Tb, la quale ha intrattenuto i presenti richiamando i pilastri principali sui quali si fonda il lionismo, la più grande organizzazione di solidarietà al mondo, con l'impegno volontario di 1,4 milioni di soci sparsi in oltre 200 paesi e riuniti in 47.000 club. L.P.</p>         `     },     {         title: "“Fare memoria a partire da Fossoli”. I Lions Club Finale E. e Mirandola ricordano la Shoah",         date: "02 Feb 2026",         category: "rassegna-stampa",         tag: "Rassegna Stampa",         tagClass: "bg-[#FFC72C]/10 text-[#b58600]",         cardClass: "cat-rassegna-stampa",         img: "Notizie/Unknown-800x445.jpg",         excerpt: "In occasione della imminente ricorrenza del \"Giorno della Memoria\", si è svolto lo scorso 22 gennaio un intermeeting fra i Lions Club...",         content: `             <p>In occasione della imminente ricorrenza del "Giorno della Memoria", si è svolto lo scorso 22 gennaio un intermeeting fra i Lions Club di Finale Emilia (Club organizzatore) e di Mirandola, presso il ristorante "Il Cacciatore" di S. Felice sul Panaro. La serata, molto partecipata dai soci dei due Club, ha avuto come relatrice la prof.ssa Elena Romagnoli, insegnante di lettere presso il Liceo scientifico "M. Morandi" di Finale Emilia, che ha affrontato il delicato e toccante tema: "Fare memoria a partire da Fossoli".</p>             <p>La relatrice ha esordito ricordando la frase di Primo Levi, scritta all'ingresso del Campo di Fossoli (Carpi): "Quanti sanno che Fossoli... è stato il punto di partenza per l'inferno?". Nel dopoguerra, infatti, l'oblio è caduto su Fossoli che fu utilizzato dapprima come campo per profughi stranieri e poi per ospitare i ragazzi di don Zeno Saltini (Nomadelfia) e successivamente i profughi istriano-dalmati (il villaggio S. Marco), fino alla definitiva chiusura nel 1970. Fu solo nel 1984, grazie alla nascita della Fondazione Fossoli, che si iniziò il ricupero delle baracche e la conservazione della memoria storica del luogo.</p>             <p>La storia di Fossoli inizia nel maggio del 1942, quando l'esercito italiano vi stabilisce un campo di prigionia per militari alleati (inglesi in particolare) catturati in Africa Settentrionale, arrivando a contenerne fino a 5000 in baracche prefabbricate in legno. Dopo l'8 settembre 1943, il campo viene occupato dai tedeschi e diviene un campo di transito diretto dalle SS, destinato alla concentrazione degli ebrei e degli oppositori politici italiani da avviare alla deportazione nei lager del Nord Europa (Auschwitz, Dachau, Mauthausen, Ravensbruck, Bergen-Belsen). Da Fossoli sono partiti circa 5000 deportati (di cui la metà ebrei) stipati in vagoni piombati merci alla stazione ferroviaria di Carpi, e fra questi anche Primo Levi (partito il 22 febbraio 1944) che descriverà quella tragica esperienza nelle prime pagine del suo celebre libro "Se questo è un uomo".</p>             <p>La prof.ssa Romagnoli ha poi proiettato alcune significative immagini del Campo e delle baracche, sottolineando l'importanza di Fossoli come "luogo di memoria", ossia uno spazio fisico in cui la storia si fa concreta e visibile, e che costituisce un formidabile strumento educativo per le giovani generazioni affinché eventi così tragici non debbano mai più ripetersi. Al termine dell'applauditissimo intervento, i Presidenti dei due Club, Maria Vittoria Baraldini (Finale Emilia) ed Enzo Ragazzi (Mirandola), hanno espresso il profondo ringraziamento alla relatrice consegnandole il guidoncino ufficiale del Club. I.P.</p>         `     },     {         title: "“Serata degli auguri” del Lions Club Mirandola in ricordo del Dott. Bruno Zanzani",         date: "22 Dic 2025",         category: "prima-pagina",         tag: "Prima Pagina",         tagClass: "bg-[#034EA2]/10 text-[#034EA2]",         cardClass: "cat-prima-pagina",         img: "Notizie/DSCN1333-800x445.jpg",         excerpt: "La tradizionale “Serata degli Auguri” del Lions Club Mirandola si è tenuta quest’anno il 16 dicembre presso Villa Fondo Tagliata, in un’atmosfera...",         content: `             <p>La tradizionale “Serata degli Auguri” del Lions Club Mirandola si è tenuta quest’anno il 16 dicembre presso Villa Fondo Tagliata, in un’atmosfera di serenità e speranza in un futuro migliore, anche se le guerre che avvelenano i rapporti fra gli uomini non sono ancora approdate alla tanto agognata pace. Nel suo intervento iniziale il presidente Enzo Ragazzi ha ricordato i principali conflitti che ci affliggono, augurandosi che la disposizione a servire di chi è nel bisogno (caratteristica propria dei Lions) venga adottata a tutti i livelli nei rapporti umani all’interno e all’esterno della nostra società, affinchè la legge del bene finalmente trionfi su quella del male. La serata ha avuto la presenza di alcuni ospiti di riguardo: D. Fabio Barbieri, parroco di Mirandola, i presidenti dei Lions Clubs viciniori (Finale E., Castelfranco E. e Carpi Host) e del presidente del Rotary Club Mirandola ed è vissuta su un importante service del Lions Club Mirandola. In particolare si è trattato della donazione di uno scooter cabinato, ad azionamento elettrico con batteria ricaricabile e autonomia di 20km, avente una velocità massima di 16kmh, appartenente alla famiglia del Dott. Bruno Zanzani, socio dapprima effettivo e poi onorario del Club mirandolese (per oltre mezzo secolo, recentemente scomparso alla bella età di 99 anni) e utilizzato dallo stesso negli ultimi anni di vita per i suoi spostamenti fuori casa. Dopo la sua scomparsa, la famiglia ha deciso di donare lo scooter ad una persona con problemi di mobilità che ne avesse potuto trarre profitto. Il Club, in ricordo del Dott. Zanzani, si è preso carico di rimettere a nuovo il mezzo, mostrandolo durante la serata e trovando nella parrocchia Santa Maria Maggiore di Mirandola l’ente che avrebbe potuto individuare un suo nuovo possibile destinatario. Così è stato, per cui si è proceduto alla consegna dello scooter al parroco D. Fabio che a sua volta lo metterà presto a disposizione del destinatario. Invitato a parlare, dopo aver ringraziato il Club, D. Fabio ha preso spunto dalla donazione dei Lions per richiamare il profondo significato del Natale imminente, nel quale il mistero della nascita di Gesù fronteggia silenziosamente la rumorosa distruzione della morte, annunciando gloria in cielo e pace sulla terra. Di qui, l’invito a non lasciarsi travolgere dagli orizzonti cupi che il mondo ci presenta oggi. Si è proceduto infine alla lettura della comunicazione ricevuta dalla sede centrale del Lions Clubs International (Oak Brook, Illinois, USA) con la quale al Lions Club Mirandola è stato attribuito, per il secondo anno consecutivo, il “Premio Soddisfazione Soci”, in riconoscimento dell’impegno nelle attività di service e nell’immissione di nuovi soci. Un caloroso brindisi finale con gli auguri di BUONE FESTE a tutti ha concluso la piacevole serata, allietata anche da bei canti e celebri brani del Natale.  I.P.</p>                          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">                 <img src="Notizie/DSCN1304.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1306.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1308.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1310.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1311.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1314.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1316.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1319.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1321.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1323.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1325.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1317.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1333-800x445.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1334.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1336.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">             </div>         `     },     {         title: "Lions Mirandola, a Quarantoli una cena nel segno dell'amicizia e del servizio",         date: "05 Dic 2025",         category: "prima-pagina",         tag: "Prima Pagina",         tagClass: "bg-[#034EA2]/10 text-[#034EA2]",         cardClass: "cat-prima-pagina",         img: "Notizie/Screenshot 2026-05-26 125408.png",         excerpt: "I soci del Lions Club Mirandola hanno trascorso lo scorso 2 dicembre una piacevolissima serata con cena presso i locali della Polisportiva...",         content: `             <p>I soci del Lions Club Mirandola hanno trascorso lo scorso 2 dicembre una piacevolissima serata con cena presso i locali della Polisportiva di Quarantoli. L’incontro, che ha visto la partecipazione di quasi tutti i soci e di numerosi familiari, si è svolto in un’atmosfera di grande cordialità e amicizia, elementi fondamentali che da sempre caratterizzano lo spirito di appartenenza al Club.</p>             <p>Nel corso della serata, il Presidente Enzo Ragazzi ha colto l’occasione per fare il punto sui service realizzati nella prima parte dell’anno sociale e per illustrare le prossime iniziative in programma per i mesi invernali, a favore della comunità locale. La cena è stata preparata con cura dai volontari della Polisportiva quarantolese, ai quali è andato il caloroso ringraziamento di tutti i presenti per la splendida accoglienza e per l’ottima qualità dei piatti della tradizione locale serviti a tavola. I.P.</p>                          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">                 <img src="Notizie/DSCN1273.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1294.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1289.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1276.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1291.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1278.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1282.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/DSCN1299.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">             </div>         `     },     {         title: "Serata delle Tradizioni al Lions Club Mirandola: alla scoperta dei borlenghi",         date: "24 Nov 2025",         category: "prima-pagina",         tag: "Prima Pagina",         tagClass: "bg-[#034EA2]/10 text-[#034EA2]",         cardClass: "cat-prima-pagina",         img: "Notizie/IMG-20251118-WA0004R-800x445.jpg",         excerpt: "Nel salone delle feste della Polisportiva di Quarantoli si è svolta lo scorso 18 novembre la felice \"Serata delle Tradizioni\" del Lions Club Mirandola...",         content: `             <p>Nel salone delle feste della Polisportiva di Quarantoli si è svolta lo scorso 18 novembre la felice "Serata delle Tradizioni" del Lions Club Mirandola, interamente dedicata alla riscoperta della cultura gastronomica locale e, in particolare, della preparazione del borlengo tipico dell'appennino modenese.</p>             <p>Grazie alla presenza dei maestri borlengai dell'associazione di Zocca, i soci e i loro ospiti hanno potuto assistere dal vivo a tutte le phases della preparazione di questa antica specialità, dalla realizzazione della "colla" (il fluido impasto di acqua, farina e uova) fino alla cottura sulla tipica padella di rame (il "sole") e al condimento tradizionale con la "cunza" (un battuto di lardo, aglio e rosmarino) e una spolverata di parmigiano reggiano. La serata ha costituito un momento di grande convivialità e allegria, confermando l'importanza del recupero e della valorizzazione delle tradizioni del nostro territorio quale elemento di identità comunitaria. L.P.</p>                          <div class="mt-8 grid grid-cols-1 gap-4">                 <img src="Notizie/IMG-20251118-WA0006R.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">             </div>         `     },     {         title: "Lions Club Mirandola per la Colletta Alimentare",         date: "16 Nov 2025",         category: "prima-pagina",         tag: "Prima Pagina",         tagClass: "bg-[#034EA2]/10 text-[#034EA2]",         cardClass: "cat-prima-pagina",         img: "Notizie/WhatsApp-Image-2025-11-15-at-19.34.11-800x445.jpg",         excerpt: "Sabato 15 novembre 2025, ben 14 soci del Lions Club Mirandola hanno partecipato attivamente alla Giornata Nazionale della Colletta Alimentare...",         content: `             <p>Sabato 15 novembre 2025, ben 14 soci del Lions Club Mirandola hanno partecipato attivamente alla Giornata Nazionale della Colletta Alimentare, prestando servizio per l'intera giornata presso il supermercato Famila di Mirandola. I soci, organizzati in turni, hanno invitato i clienti a donare generi alimentari a lunga conservazione destinati alle famiglie in condizioni di fragilità economica del nostro territorio.</p>             <p>Grazie alla grande generosità dimostrata dai cittadini mirandolesi, al termine della giornata sono stati raccolti numerosi scatoloni contenenti pasta, riso, tonno, pelati, olio e alimenti per l'infanzia, per un peso complessivo che ha sfiorato la tonnellata. Tutte le derrate raccolte sono state presa in carico dal Banco Alimentare per la successiva distribuzione alle strutture caritative locali. "Dove c'è un bisogno, lì c'è un Lions", ha ricordato il Presidente, esprimendo profonda gratitudine ai soci per l'impegno profuso e alla cittadinanza per la straordinaria risposta di solidarietà. I.P.</p>                          <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">                 <img src="Notizie/WhatsApp-Image-2025-11-15-at-19.33.544-1024x576.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">                 <img src="Notizie/WhatsApp-Image-2025-11-15-at-19.33.207-1024x768.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">             </div>         `     },     {         title: "Sport, salute e benessere sociale: il potere motivazionale della parola",         date: "11 Nov 2025",         category: "prima-pagina",         tag: "Prima Pagina",         tagClass: "bg-[#034EA2]/10 text-[#034EA2]",         cardClass: "cat-prima-pagina",         img: "Notizie/evento-lions-1-621x445.jpg",         excerpt: "Grande successo ha riscosso l'incontro organizzato dal Lions Club Mirandola lo scorso 4 novembre presso l'Auditorium della Cassa di Risparmio...",         content: `             <p>Grande successo ha riscosso l'incontro organizzato dal Lions Club Mirandola lo scorso 4 novembre presso l'Auditorium della Cassa di Risparmio di Mirandola, incentrato sul tema "Sport, salute e benessere sociale: il potere motivazionale della parola". L'evento, realizzato in collaborazione con la società sportiva Stadium Volley di Mirandola, ha visto la partecipazione di atleti, allenatori, dirigenti e un folto pubblico di giovani e appassionati.</p>             <p>I relatori della serata, tra cui esperti psicologi dello sport e mental coach, hanno approfondito il ruolo fondamentale che la comunicazione e le parole di incoraggiamento rivestono non solo nel determinare la performance agonistica e la motivazione degli atleti, ma anche nel favorire l'inclusione sociale e il benessere psicofisico dei ragazzi. Lo sport è stato così celebrato come uno straordinario veicolo di valori etici e di crescita personale, perfettamente in linea con le finalità di servizio sociale promosse dal sodalizio lionistico sul territorio. I.P.</p>                          <div class="mt-8 grid grid-cols-1 gap-4">                 <img src="Notizie/evento-lions.jpg" class="${imgClasses}" onclick="openLightbox(this.src)">             </div>         `     },     {         title: "Il Lions Club Mirandola dona un ecografo wireless – Tecnologia al servizio dei pazienti della Dialisi",         date: "02 Lug 2025",         category: "rassegna-stampa",         tag: "Rassegna Stampa",         tagClass: "bg-[#FFC72C]/10 text-[#b58600]",         cardClass: "cat-rassegna-stampa",         img: "Notizie/Screenshot 2026-05-26 125352.png",         excerpt: "Un ecografo wireless di ultima generazione entra in servizio al Centro Dialisi dell'Ospedale di Mirandola grazie alla generosa donazione del Lions Club Mirandola...",         content: `             <p>Un nuovo importante strumento entra in servizio al Centro Dialisi dell'Ospedale di Mirandola, diretto dalla dottoressa Simonetta Cimino, grazie alla generosa donazione del Lions Club Mirandola: si tratta di un ecografo wireless, pensato per il monitoraggio degli accessi vascolari nei pazienti in emodialisi. L'ecografo permetterà di controllare accuratamente lo stato della fistola artero-venosa (FAV), evitando interventi chirurgici invasivi maggiori e riducendo drasticamente le complicanze cliniche. Il personale infermieristico sarà formato all'utilizzo del dispositivo da parte di un operatore già esperto attivo nella rete nefrologica provinciale.</p>             <p>Come dimostrato in altri centri della provincia dove l'ecografo è già in uso, questo tipo di monitoraggio ha portato a una significativa riduzione delle complicanze legate alla FAV e delle ospedalizzazioni, migliorando la qualità della vita dei pazienti e l'efficienza del sistema sanitario.</p>             <p>"Ringraziamo sentitamente il Lions Club Mirandola per questo gesto di grande sensibilità e attenzione verso i bisogni della nostra comunità - dichiarano la dottoressa Cimino, Annamaria Ferraresi, Direttrice del Distretto di Mirandola, e Giuseppe Licitra, della Direzione Sanitaria dell'Ospedale Santa Maria Bianca -. Si tratta di una donazione che porta un beneficio concreto e immediato ai pazienti e agevola il lavoro dei professionisti sanitari. Un gesto che dimostra come la collaborazione tra istituzioni e realtà del territorio possa generare valore reale. L'ecografo wireless rappresenta un significativo passo avanti nella qualità delle cure offerte dal nostro Centro Dialisi".</p>             <p>Il Lions Club Mirandola, da sempre attento ai bisogni della comunità, conferma cosi il proprio impegno concreto nel sostenere la salute pubblica e i servizi sanitari del territorio. Un gesto di solidarietà che si traduce in un aiuto concreto for tanti pazienti e per tutto il personale sanitario.</p>         `     } ];

const galleryAlbumCards = [
    {
        "key": "governatore_2021",
        "title": "Governatore 2021",
        "year": "2021",
        "cover": "galleria-hero.jpg",
        "alt": "Governatore 2021"
    },
    {
        "key": "apertura_ottobre_2021",
        "title": "Apertura 26 Ottobre 2021",
        "year": "2021",
        "cover": "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-001.jpg",
        "alt": "Apertura 26 Ottobre 2021"
    },
    {
        "key": "acetum_2017",
        "title": "Acetum 2017",
        "year": "2017",
        "cover": "Sito-Galleria/Acetum_2017/IMG_1381.jpg",
        "alt": "Acetum 2017"
    },
    {
        "key": "congresso_2009",
        "title": "Congresso 2009",
        "year": "2009",
        "cover": "Sito-Galleria/Congresso_2009/Eventi.jpg",
        "alt": "Congresso 2009"
    },
    {
        "key": "apertura_2013",
        "title": "Apertura 2013",
        "year": "2013",
        "cover": "Sito-Galleria/Apertura_2013/Foto_Apertura.jpg",
        "alt": "Apertura 2013"
    },
    {
        "key": "pavia_2017",
        "title": "Pavia 2017",
        "year": "2017",
        "cover": "Sito-Galleria/Pavia_2017/IMG_1701.jpg",
        "alt": "Pav7ia 2017"
    },
    {
        "key": "festa_auguri_2013",
        "title": "Festa auguri 2013",
        "year": "2013",
        "cover": "Sito-Galleria/Festa_auguri_2013/P1010020.jpg",
        "alt": "Festa auguri 2013"
    },
    {
        "key": "auguri_2016",
        "title": "Festa auguri 2016",
        "year": "2016",
        "cover": "Sito-Galleria/Auguri_2016/cop.jpg",
        "alt": "Auguri 2016"
    },
    {
        "key": "cena_governatore_2018",
        "title": "Cena Governatore 2018",
        "year": "2016",
        "cover": "Sito-Galleria/Cena_governatore_2018/copp.jpg",
        "alt": "Cena governatore 2018"
    },
    {
        "key": "lamborghini_2017",
        "title": "Evento Lamborghini 2017",
        "year": "2017",
        "cover": "Sito-Galleria/Lamborghini_2017/l.jpg",
        "alt": "Evento Lamborghini 2017"
    },
    {
        "key": "apertura_2014",
        "title": "Apertura Anno 2014",
        "year": "2014",
        "cover": "Sito-Galleria/Apertura_2014/copetina.jpg",
        "alt": "Apertura 2014"
    },
    {
        "key": "chiusura_2019",
        "title": "Chiusura Anno 2019",
        "year": "2019",
        "cover": "Sito-Galleria/Chiusura_2019/co.jpg",
        "alt": "Chiusura 2019"
    },
    {
        "key": "martin_elliot",
        "title": "Martin Elliot",
        "year": "ND",
        "cover": "Sito-Galleria/Martin_Elliot/m.jpg",
        "alt": "Martin Elliot"
    },
    {
        "key": "mirandola_amatrice",
        "title": "Mirandola Amatrice",
        "year": "ND",
        "cover": "Sito-Galleria/Mirandola_Amatrice/a.jpg",
        "alt": "Mirandola Amatrice"
    },
    {
        "key": "pagani_2017",
        "title": "Pagani 2017",
        "year": "2017",
        "cover": "Sito-Galleria/Pagani_2017/i.jpg",
        "alt": "Pagani 2017"
    },
    {
        "key": "intermeeting_2018",
        "title": "Intermeeting 2018",
        "year": "2018",
        "cover": "Sito-Galleria/Intermeeting_2018/c.jpg",
        "alt": "Intermeeting 2018"
    },
    {
        "key": "serata_dicembre_2013",
        "title": "Serata del 10/12/2013",
        "year": "2013",
        "cover": "Sito-Galleria/Serata_dicembre_2013/P1010001.jpg",
        "alt": "Serata del 10/12/2013"
    }
];

const galleryAlbums = {
        governatore_2021: [
            "galleria-hero.jpg",
            "Sito-Galleria/Governatore_2021/1CD-Governatore-e-suo-staff.jpg",
            "Sito-Galleria/Governatore_2021/2-MJF-Sonia-Menghini.jpg",
            "Sito-Galleria/Governatore_2021/3-MJF-Antonella-Cavicchi.jpg",
            "Sito-Galleria/Governatore_2021/4-Claudio-Trazzi-chevron.jpg",
            "Sito-Galleria/Governatore_2021/5-Emanuele-Golinelli-chevron.jpg",
            "Sito-Galleria/Governatore_2021/6-Luisa-Baraldi-chevron.jpg",
            "Sito-Galleria/Governatore_2021/8-Nunzio-Borelli-chevron.jpg",
            "Sito-Galleria/Governatore_2021/9-Scambio-gagliardetti.jpg",
            "Sito-Galleria/Governatore_2021/9b-Governatore-signora-e-Sonia-Menghini.jpg"
        ],
        apertura_ottobre_2021: [
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-001.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-003.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-005.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-006.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-009.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-011.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-012.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-014.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-016.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-019.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-021.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-022.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-024.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-025.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-028.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-029.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-030.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-032.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-034.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-037.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-040.jpg",
            "Sito-Galleria/Apertura_ottobre_2021/aperura-mirandola-2021-042.jpg"
        ],
        congresso_2009: [
            "Sito-Galleria/Congresso_2009/Eventi.jpg",
            "Sito-Galleria/Congresso_2009/chiusura2009_1.jpg",
            "Sito-Galleria/Congresso_2009/chiusura2009_2.jpg",
            "Sito-Galleria/Congresso_2009/eventi_1.jpg",
            "Sito-Galleria/Congresso_2009/eventi_2.jpg",
            "Sito-Galleria/Congresso_2009/eventi_3.jpg",
            "Sito-Galleria/Congresso_2009/eventi_5.jpg",
            "Sito-Galleria/Congresso_2009/mappa_mirandola.jpg",
            "Sito-Galleria/Congresso_2009/nuovo_presidente.jpg"
        ],
        apertura_2013: [
            "Sito-Galleria/Apertura_2013/Foto_Apertura.jpg",
            "Sito-Galleria/Apertura_2013/P1010012.jpg",
            "Sito-Galleria/Apertura_2013/P1010013.jpg",
            "Sito-Galleria/Apertura_2013/P1010014.jpg",
            "Sito-Galleria/Apertura_2013/P1010016.jpg",
            "Sito-Galleria/Apertura_2013/P1010019.jpg",
            "Sito-Galleria/Apertura_2013/P1010020.jpg",
            "Sito-Galleria/Apertura_2013/P1010021.jpg",
            "Sito-Galleria/Apertura_2013/PA191669.jpg",
            "Sito-Galleria/Apertura_2013/PA191670.jpg",
            "Sito-Galleria/Apertura_2013/PA191671.jpg",
            "Sito-Galleria/Apertura_2013/PA191672.jpg",
            "Sito-Galleria/Apertura_2013/PA191673.jpg",
            "Sito-Galleria/Apertura_2013/PA191674.jpg"
        ],
        festa_auguri_2013: [
            "Sito-Galleria/Festa_auguri_2013/P1010020.jpg",
            "Sito-Galleria/Festa_auguri_2013/P1010022.jpg",
            "Sito-Galleria/Festa_auguri_2013/P1010023.jpg",
            "Sito-Galleria/Festa_auguri_2013/P1010027.jpg",
            "Sito-Galleria/Festa_auguri_2013/P1010028.jpg"
        ],
        serata_dicembre_2013: [
            "Sito-Galleria/Serata_dicembre_2013/P1010001.jpg",
            "Sito-Galleria/Serata_dicembre_2013/P1010003.jpg",
            "Sito-Galleria/Serata_dicembre_2013/P1010008.jpg"
        ],
		pavia_2017: [
			"Sito-Galleria/Pavia_2017/IMG_1645.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1650.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1671.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1672.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1673.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1675.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1701.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1730.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1748.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1772.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1757.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1758.jpg",
			"Sito-Galleria/Pavia_2017/IMG_1771.jpg"
		],
		acetum_2017: [
			"Sito-Galleria/Acetum_2017/IMG_1381.jpg",
			"Sito-Galleria/Acetum_2017/IMG_1384.jpg",
			"Sito-Galleria/Acetum_2017/IMG_1387.jpg",
			"Sito-Galleria/Acetum_2017/IMG_1394.jpg",
			"Sito-Galleria/Acetum_2017/IMG_1411.jpg",
			"Sito-Galleria/Acetum_2017/IMG_1413.jpg",
			"Sito-Galleria/Acetum_2017/IMG_1417.jpg",
			"Sito-Galleria/Acetum_2017/IMG_1459.jpg",
			"Sito-Galleria/Acetum_2017/IMG_1467.jpg",
			"Sito-Galleria/Acetum_2017/IMG_1469.jpg"
		],
		apertura_2014: [
			"Sito-Galleria/Apertura_2014/copetina.jpg",
			"Sito-Galleria/Apertura_2014/a(13).jpg",
			"Sito-Galleria/Apertura_2014/a(14).jpg",
			"Sito-Galleria/Apertura_2014/a(15).jpg",
			"Sito-Galleria/Apertura_2014/a(16).jpg",
			"Sito-Galleria/Apertura_2014/a(17).jpg",
			"Sito-Galleria/Apertura_2014/a(18).jpg",
			"Sito-Galleria/Apertura_2014/a(19).jpg",
			"Sito-Galleria/Apertura_2014/a(20).jpg",
			"Sito-Galleria/Apertura_2014/a(21).jpg",
			"Sito-Galleria/Apertura_2014/a(22).jpg",
			"Sito-Galleria/Apertura_2014/a(23).jpg",
			"Sito-Galleria/Apertura_2014/a(24).jpg",
			"Sito-Galleria/Apertura_2014/a(25).jpg",
			"Sito-Galleria/Apertura_2014/a(26).jpg",
			"Sito-Galleria/Apertura_2014/a(27).jpg",
			"Sito-Galleria/Apertura_2014/a(28).jpg",
			"Sito-Galleria/Apertura_2014/a(29).jpg",
			"Sito-Galleria/Apertura_2014/a(30).jpg",
			"Sito-Galleria/Apertura_2014/a(31).jpg",
			"Sito-Galleria/Apertura_2014/a(32).jpg",
			"Sito-Galleria/Apertura_2014/a(33).jpg",
			"Sito-Galleria/Apertura_2014/a(34).jpg",
			"Sito-Galleria/Apertura_2014/a(35).jpg",
			"Sito-Galleria/Apertura_2014/a(36).jpg",
			"Sito-Galleria/Apertura_2014/a(37).jpg",
			"Sito-Galleria/Apertura_2014/a(38).jpg",
			"Sito-Galleria/Apertura_2014/a(39).jpg",
			"Sito-Galleria/Apertura_2014/a(40).jpg",
			"Sito-Galleria/Apertura_2014/a(41).jpg",
			"Sito-Galleria/Apertura_2014/a(42).jpg",
			"Sito-Galleria/Apertura_2014/a(43).jpg",
			"Sito-Galleria/Apertura_2014/a(44).jpg"
		],
		auguri_2016: [
			"Sito-Galleria/Auguri_2016/cop.jpg",
			"Sito-Galleria/Auguri_2016/b(1).jpg",
			"Sito-Galleria/Auguri_2016/b(2).jpg",
			"Sito-Galleria/Auguri_2016/b(3).jpg",
			"Sito-Galleria/Auguri_2016/b(4).jpg",
			"Sito-Galleria/Auguri_2016/b(5).jpg",
			"Sito-Galleria/Auguri_2016/b(6).jpg",
			"Sito-Galleria/Auguri_2016/b(7).jpg",
			"Sito-Galleria/Auguri_2016/b(8).jpg",
			"Sito-Galleria/Auguri_2016/b(9).jpg",
			"Sito-Galleria/Auguri_2016/b(10).jpg",
			"Sito-Galleria/Auguri_2016/b(11).jpg",
			"Sito-Galleria/Auguri_2016/b(12).jpg",
			"Sito-Galleria/Auguri_2016/b(13).jpg"
		],
		cena_governatore_2018: [
		"Sito-Galleria/Cena_governatore_2018/copp.jpg",
		"Sito-Galleria/Cena_governatore_2018/c(1).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(2).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(3).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(4).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(5).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(6).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(7).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(8).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(9).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(10).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(11).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(12).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(13).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(14).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(15).jpg",
		"Sito-Galleria/Cena_governatore_2018/c(16).jpg"
		],
		chiusura_2019: [
		"Sito-Galleria/Chiusura_2019/co.jpg",
		"Sito-Galleria/Chiusura_2019/d(1).jpg",
		"Sito-Galleria/Chiusura_2019/d(2).jpg",
		"Sito-Galleria/Chiusura_2019/d(3).jpg",
		"Sito-Galleria/Chiusura_2019/d(4).jpg",
		"Sito-Galleria/Chiusura_2019/d(5).jpg",
		"Sito-Galleria/Chiusura_2019/d(6).jpg",
		"Sito-Galleria/Chiusura_2019/d(7).jpg",
		"Sito-Galleria/Chiusura_2019/d(8).jpg",
		"Sito-Galleria/Chiusura_2019/d(9).jpg",
		"Sito-Galleria/Chiusura_2019/d(10).jpg",
		"Sito-Galleria/Chiusura_2019/d(11).jpg",
		"Sito-Galleria/Chiusura_2019/d(12).jpg"
		],
		intermeeting_2018: [
			"Sito-Galleria/Intermeeting_2018/c.jpg",
			"Sito-Galleria/Intermeeting_2018/e(1).jpg",
			"Sito-Galleria/Intermeeting_2018/e(2).jpg",
			"Sito-Galleria/Intermeeting_2018/e(3).jpg",
			"Sito-Galleria/Intermeeting_2018/e(4).jpg",
			"Sito-Galleria/Intermeeting_2018/e(5).jpg",
			"Sito-Galleria/Intermeeting_2018/e(6).jpg",
			"Sito-Galleria/Intermeeting_2018/e(7).jpg",
			"Sito-Galleria/Intermeeting_2018/e(8).jpg",
			"Sito-Galleria/Intermeeting_2018/e(9).jpg"
		],
		lamborghini_2017: [
			"Sito-Galleria/Lamborghini_2017/l.jpg",
			"Sito-Galleria/Lamborghini_2017/f(1).jpg",
			"Sito-Galleria/Lamborghini_2017/f(2).jpg",
			"Sito-Galleria/Lamborghini_2017/f(3).jpg",
			"Sito-Galleria/Lamborghini_2017/f(4).jpg",
			"Sito-Galleria/Lamborghini_2017/f(5).jpg",
			"Sito-Galleria/Lamborghini_2017/f(6).jpg",
			"Sito-Galleria/Lamborghini_2017/f(7).jpg",
			"Sito-Galleria/Lamborghini_2017/f(8).jpg",
			"Sito-Galleria/Lamborghini_2017/f(9).jpg",
			"Sito-Galleria/Lamborghini_2017/f(10).jpg",
			"Sito-Galleria/Lamborghini_2017/f(11).jpg",
			"Sito-Galleria/Lamborghini_2017/f(12).jpg",
			"Sito-Galleria/Lamborghini_2017/f(13).jpg",
			"Sito-Galleria/Lamborghini_2017/f(14).jpg",
			"Sito-Galleria/Lamborghini_2017/f(15).jpg",
			"Sito-Galleria/Lamborghini_2017/f(16).jpg",
			"Sito-Galleria/Lamborghini_2017/f(17).jpg",
			"Sito-Galleria/Lamborghini_2017/f(18).jpg",
			"Sito-Galleria/Lamborghini_2017/f(19).jpg",
			"Sito-Galleria/Lamborghini_2017/f(20).jpg",
			"Sito-Galleria/Lamborghini_2017/f(21).jpg",
			"Sito-Galleria/Lamborghini_2017/f(22).jpg"
		],
		martin_elliot: [
			"Sito-Galleria/Martin_Elliot/m.jpg",
			"Sito-Galleria/Martin_Elliot/g(1).jpg",
			"Sito-Galleria/Martin_Elliot/g(2).jpg",
			"Sito-Galleria/Martin_Elliot/g(3).jpg",
			"Sito-Galleria/Martin_Elliot/g(4).jpg",
			"Sito-Galleria/Martin_Elliot/g(5).jpg",
			"Sito-Galleria/Martin_Elliot/g(6).jpg",
			"Sito-Galleria/Martin_Elliot/g(7).jpg",
			"Sito-Galleria/Martin_Elliot/g(8).jpg",
			"Sito-Galleria/Martin_Elliot/g(9).jpg",
			"Sito-Galleria/Martin_Elliot/g(10).jpg",
			"Sito-Galleria/Martin_Elliot/g(11).jpg",
			"Sito-Galleria/Martin_Elliot/g(12).jpg",
			"Sito-Galleria/Martin_Elliot/g(13).jpg",
			"Sito-Galleria/Martin_Elliot/g(14).jpg",
			"Sito-Galleria/Martin_Elliot/g(15).jpg",
			"Sito-Galleria/Martin_Elliot/g(16).jpg",
			"Sito-Galleria/Martin_Elliot/g(17).jpg",
			"Sito-Galleria/Martin_Elliot/g(18).jpg",
			"Sito-Galleria/Martin_Elliot/g(19).jpg",
			"Sito-Galleria/Martin_Elliot/g(20).jpg",
			"Sito-Galleria/Martin_Elliot/g(21).jpg",
			"Sito-Galleria/Martin_Elliot/g(22).jpg",
			"Sito-Galleria/Martin_Elliot/g(23).jpg"
		],
		mirandola_amatrice: [
			"Sito-Galleria/Mirandola_Amatrice/a.jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(1).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(2).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(3).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(4).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(5).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(6).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(7).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(8).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(9).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(10).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(11).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(12).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(13).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(14).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(16).jpg",
			"Sito-Galleria/Mirandola_Amatrice/h(17).jpg"
		],
		pagani_2017: [
			"Sito-Galleria/Pagani_2017/i.jpg",
			"Sito-Galleria/Pagani_2017/i(2).jpg",
			"Sito-Galleria/Pagani_2017/i(3).jpg",
			"Sito-Galleria/Pagani_2017/i(4).jpg",
			"Sito-Galleria/Pagani_2017/i(5).jpg",
			"Sito-Galleria/Pagani_2017/i(6).jpg",
			"Sito-Galleria/Pagani_2017/i(7).jpg",
			"Sito-Galleria/Pagani_2017/i(8).jpg",
			"Sito-Galleria/Pagani_2017/i(9).jpg",
			"Sito-Galleria/Pagani_2017/i(10).jpg"
		]
    };



