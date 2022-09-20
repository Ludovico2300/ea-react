export type Card = {
    id: number;
    source: string;
    tag: string;
    date: string;
    title: string;
    content: string;
};
let cards: Array<Card> = [
    {
        id: 0,
        source: "./assets/tabs/notizie-ea/ts4-sexual-orientation.jpg",
        tag: "Electronic Arts Inc.",
        date: "15-lug-2022",
        title: "Orientamento sessuale in The Sims 4",
        content: `Il nuovo aggiornamento integra l'orientamento sessuale in "Crea un Sim"`
    },
    {
        id: 1,
        source: "./assets/tabs/notizie-ea/the-sims.png",
        tag: "Electronic Arts Inc.",
        date: "30-giu-2022",
        title: "Visita guidata a Vita da Liceali Expansion Pack (EP12)",
        content: `La lezione è iniziata in The Sims™ 4 Vita da Liceali Expansion Pack Vivete l'esperienza adolescenziale suprema a modo vostro`
    },
    {
        id: 2,
        source: "./assets/tabs/notizie-ea/generic-electronic-arts.png",
        tag: "Electronic Arts Inc.",
        date: "24-giu-2022",
        title: "La salute dei dipendenti prima di tutto",
        content: `Vogliamo ribadire il nostro incrollabile sostegno ai nostri dipendenti. La loro salute e il loro benessere sono la nostra priorità.`
    },
    {
        id: 3,
        source: "./assets/tabs/notizie-ea/ea-pride-2022.png",
        tag: "Electronic Arts Inc.",
        date: "3-giu-2022",
        title: "Sosteniamo senza alcuna riserva dipendenti, utenti e comunità LGBTQ+.",
        content: `Per la nostra azienda i diritti delle persone trans sono diritti umani. I diritti delle donne sono diritti umani. Sosteniamo senza alcuna riserva i nostri dipendenti, i nostri giocatori e le nostre comunità LGBTQ+.`
    },
    {
        id: 4,
        source: "./assets/tabs/notizie-ea/sims4-options-layer-customizable-pronouns.png",
        tag: "Electronic Arts Inc.",
        date: "24-mag-2022",
        title: "Pronomi personalizzabili ora disponibili in The Sims 4",
        content: `Lancio dapprima in inglese - Ecco come personalizzare i pronomi dei Sims in "Crea un Sim"`
    },
    {
        id: 5,
        source: "./assets/tabs/notizie-ea/respawn-2.jpg",
        tag: "Electronic Arts Inc.",
        date: "13-mag-2022",
        title: "EA Studios candidati come miglior ambiente di lavoro negli Stati Uniti",
        content: `Respawn Entertainment, Maxis e Industrial Toys ottengono riconoscimenti da GamesIndustry.biz`
    },
    {
        id: 6,
        source: "./assets/tabs/ea-play/ea-play-dec.jpg",
        tag: "EA Play",
        date: "14-mag-2021",
        title: "Gioca a Mass Effect™ Legendary Edition con EA Play* Pro",
        content: `Vivi la saga cinematografica ora rimasterizzata e ottimizzata per il 4K Ultra HD`
    },
    {
        id: 7,
        source: "./assets/tabs/ea-play/eaplay-socialpost.png",
        tag: "EA Play",
        date: "3-mag-2021",
        title: "Ottieni di più da FIFA 21 con EA Play - Sito ufficiale EA SPORTS",
        content: `FIFA 21 è ora disponibile in The Play List con EA Play.`
    },
    {
        id: 8,
        source: "./assets/tabs/ea-play/ea-play-dec.jpg",
        tag: "EA Play",
        date: "1-apr-2021",
        title: "In evidenza su EA Play - Aprile 2021",
        content: `Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play.`
    },
    {
        id: 9,
        source: "./assets/tabs/ea-play/ea-game-pass.jpg",
        tag: "EA Play",
        date: "18-mar-2021",
        title: "EA Play è ora disponibile su Xbox Game Pass per PC tramite EA app",
        content: `EA app, la nostra piattaforma PC di nuova generazione, è in fase di open beta. Stiamo unendo le nostre forze con Xbox per offrire più giochi agli utenti PC.`
    },
    {
        id: 10,
        source: "./assets/tabs/ea-play/ea-play-dec.jpg",
        tag: "EA Play",
        date: "1-mar-2021",
        title: "In evidenza su EA Play - Marzo 2021",
        content: `Scopri le nuove ricompense e i giochi ora disponibili con il tuo abbonamento EA Play o EA Play Pro.`
    },
    {
        id: 11,
        source: "./assets/tabs/ea-play/ea-play-dec.jpg",
        tag: "EA Play",
        date: "25-feb-2022",
        title: "EA Play – Prossimamente in The Play List – Primavera 2021",
        content: `Scopri tutto sui nuovi giochi in arrivo su EA Play o EA Play Pro.`
    },
    {
        id: 12,
        source: "./assets/tabs/fifa/pitchnotes-22.jpg",
        tag: "FIFA",
        date: "06-lug-2022",
        title: "Aggiornamento #14 - EA SPORTS",
        content: `L'aggiornamento #14 sarà presto disponibile in FIFA 22 e introdurrà diverse novità per la fase difensiva e offensiva. Puoi consultare le note complete dell'aggiornamento qui.`
    },
    {
        id: 13,
        source: "./assets/tabs/fifa/eap-fi22.png",
        tag: "FIFA",
        date: "23-giu-2022",
        title: "Ottieni il massimo da FIFA 22 con EA Play - Sito ufficiale EA SPORTS",
        content: `FIFA 22 è ora disponibile in The Play List per gli abbonati a EA Play!`
    },
    {
        id: 14,
        source: "./assets/tabs/fifa/pitchnotes-22.png",
        tag: "FIFA",
        date: "15-giu-2022",
        title: "Aggiornamento reattività di gioco",
        content: `In queste Note degli sviluppatori vogliamo informarvi su ciò a cui sta lavorando il team di sviluppo di FIFA per migliorare la reattività di gioco online.`
    },
    {
        id: 15,
        source: "./assets/tabs/fifa/fifa-22-featured.png",
        tag: "FIFA",
        date: "10-giu-2022",
        title: "Offerta sconto adidas 30% - Sito ufficiale EA SPORTS",
        content: `EA SPORTS™ e adidas hanno unito le forze per offrire ai giocatori idonei di FIFA 22 un codice sconto speciale del 30%.`
    },
    {
        id: 16,
        source: "./assets/tabs/fifa/fifa-22-featured.png",
        tag: "FIFA",
        date: "31-mag-2022",
        title: "PARTNERSHIP MARKETING TRA EA SPORTS FIFA E INTER",
        content: `Sebbene l'esperienza di gioco non cambierà, a partire dal 1° luglio 2022 terminerà la nostra partnership marketing esclusiva con l'Inter.`
    },
    {
        id: 17,
        source: "./assets/tabs/fifa/pitchnotes-22.png",
        tag: "FIFA",
        date: "2-mag-2022",
        title: "FAQ test Cross-Play",
        content: `Testeremo a breve la funzionalità Cross-Play in Stagioni Online e in Amichevoli Online nelle versioni per PlayStation®5, Xbox Series X|S e Stadia di EA SPORTS FIFA 22.`
    },
    {
        id: 18,
        source: "./assets/tabs/f1/f1-22-patch.png",
        tag: "F1® 22",
        date: "7-lug-2022",
        title: "F1® 22 - Note sulla patch 1.05",
        content: `Scopri di più sull'ultima patch`
    },
    {
        id: 19,
        source: "./assets/tabs/f1/f1-22-official-ratings.png",
        tag: "F1® 22",
        date: "1-lug-2022",
        title: "Approfondimento sulle valutazioni dei piloti nel database di F1® 22",
        content: `Confronta le valutazioni dei piloti di F1® nel nostro database online aggiornato.`
    },
    {
        id: 20,
        source: "./assets/tabs/f1/pj-f122-can.png",
        tag: "F1® 22",
        date: "28-giu-2022",
        title: "Mettiti al volante: F1® 22 Champions Edition arriva oggi",
        content: `Preparati a vivere il brivido delle corse: F1® 22 Champions Edition arriva oggi`
    },
    {
        id: 21,
        source: "./assets/tabs/f1/f122-thumbnail-canada.png",
        tag: "F1® 22",
        date: "27-giu-2022",
        title: "Vivi F1® 22 in realtà virtuale",
        content: `Mettiti al volante e guida come mai prima d'ora: gioca per la prima volta a F1® 22 in realtà virtuale`
    },
    {
        id: 22,
        source: "./assets/tabs/f1/f1-22-official-soundtrack.png",
        tag: "F1® 22",
        date: "21-giu-2022",
        title: "La prima colonna sonora personalizzata di F1® 22",
        content: `Scopri la prima colonna sonora personalizzata di F1® 22, con 33 brani di artisti provenienti da 13 paesi`
    },
    {
        id: 23,
        source: "./assets/tabs/f1/f122-thumbnail-features-trailer.jpg",
        tag: "F1® 22",
        date: "31-mag-2022",
        title: "Mettiti al volante e vivi la F1® Life con EA SPORTS F1® 22",
        content: `La nuova era della Formula 1® ti aspetta con auto rivoluzionarie, le gare Sprint F1®, i Pirelli Hot Lap e tanto altro`
    },
    {
        id: 24,
        source: "./assets/tabs/apex-legends/apex-gaidenevent.jpg",
        tag: "Apex Legends",
        date: "10-lug-2022",
        title: "Inizia una nuova epica avventura nell'evento Gaiden",
        content: `Il 19 luglio, evoca l'eroe che è in te con 40 avventurosi oggetti cosmetici in esclusiva con l'evento e il ritorno di Armati e pericolosi.`
    },
    {
        id: 25,
        source: "./assets/tabs/apex-legends/apex-s13-team-bundles.png",
        tag: "Apex Legends",
        date: "5-lug-2022",
        title: "TI DIAMO IL BENVENUTO",
        content: `Ecco tutto quello che c'è da sapere sulla seconda edizione dell'ALGS Championship nella PNC Arena di Raleigh, Carolina del Nord!`
    },
    {
        id: 26,
        source: "./assets/tabs/apex-legends/apex-s5drop9.jpg",
        tag: "Apex Legends",
        date: "16-giu-2022",
        title: "Inizia l'estate con questo bundle di Gibraltar per Prime Gaming",
        content: `Ottieni gratuitamente la skin di Gibraltar "Detto fatto" e molto altro con il tuo abbonamento Prime dal 16 giugno al 21 luglio`
    },
    {
        id: 27,
        source: "./assets/tabs/apex-legends/apex-blog-thumbnail.jpg",
        tag: "Apex Legends",
        date: "16-giu-2022",
        title: "Scegli la tua fazione, mech o mostri, nell'evento collezione Risveglio",
        content: `Torna la modalità Controllo! Dai un'occhiata alla nuova area di Lifeline e molto altro con l'evento collezione Risveglio, il 21 giugno.`
    },
    {
        id: 28,
        source: "./assets/tabs/apex-legends/apex-thumbnail-storiesfromtheoutlands.jpg",
        tag: "Apex Legends",
        date: "14-giu-2022",
        title: `STORIE DI FRONTIERA: "AFFARI DI FAMIGLIA"`,
        content: `Ajay, una vivace adolescente decisa a riscattarsi dal lascito della sua famiglia, si scontra con la sua prima dose di realtà quando il suo ospedale da campo esaurisce i medicinali. Con l'aiuto di una vecchia conoscenza, dovrà…`
    },
    {
        id: 29,
        source: "./assets/tabs/apex-legends/alm-cold-snap.png",
        tag: "Apex Legends",
        date: "13-giu-2022",
        title: "Apex Legends Mobile - Morsa del gelo - Note sulla patch",
        content: `Calma e sangue freddo, leggende. Arriva Morsa del gelo!`
    },
    {
        id: 30,
        source: "./assets/tabs/the-sims-4/ts4-sexual-orientation.jpg",
        tag: "The Sims 4",
        date: "15-lug-2022",
        title: "Orientamento sessuale in The Sims 4",
        content: `Il nuovo aggiornamento integra l'orientamento sessuale in "Crea un Sim"`
    },
    {
        id: 31,
        source: "./assets/tabs/the-sims-4/the-sims-4-ep12.png",
        tag: "The Sims 4",
        date: "1-lug-2022",
        title: "Siete voi a creare The Sims - Intervista su Vita da Liceali con i creatori …",
        content: `Siete voi a creare The Sims - Intervista su Vita da Liceali con i creatori di Depop`
    },
    {
        id: 32,
        source: "./assets/tabs/the-sims-4/the-sims.png",
        tag: "The Sims 4",
        date: "30-giu-2022",
        title: "Visita guidata a Vita da Liceali Expansion Pack (EP12)",
        content: `La lezione è iniziata in The Sims™ 4 Vita da Liceali Expansion Pack Vivete l'esperienza adolescenziale suprema a modo vostro`
    },
    {
        id: 33,
        source: "./assets/tabs/the-sims-4/ts4-freezerbunny.png",
        tag: "The Sims 4",
        date: "23-giu-2022",
        title: "Consegne Express dei Sims",
        content: `Aprile - Giugno 2022`
    },
    {
        id: 34,
        source: "./assets/tabs/the-sims-4/ts4-grid-tile-patch-notes.jpg",
        tag: "The Sims 4",
        date: "14-giu-2022",
        title: "Aggiornamento: 14/06/2022",
        content: `Reticolazione dei lupeschi`
    },
    {
        id: 35,
        source: "./assets/tabs/the-sims-4/ts4-gp12-embrace-the-moon.431p_",
        tag: "The Sims 4",
        date: "2-giu-2022",
        title: "Assecondate la luna piena",
        content: `Scatenate il vostro lato bestiale in The Sims™ 4 Lupi Mannari Game Pack`
    },
    {
        id: 36,
        source: "./assets/tabs/battlefield/bf-2042-patch-notes-1-1-july.431p_",
        tag: "Battlefield 2042",
        date: "6-giu-2022",
        title: "AGGIORNAMENTO 1.1 DI BATTLEFIELD 2042",
        content: `Aggiornamento 1.1 di Battlefield 2042, Stagione 1`
    },
    {
        id: 37,
        source: "./assets/tabs/battlefield/bf-welcome-to-zero-hour.431p_",
        tag: "Battlefield 2042",
        date: "10-giu-2022",
        title: "Briefing su Battlefield - Benvenuti all'Ora zero",
        content: `Battlefield 2042 - Stagione 1: Ora zero`
    },
    {
        id: 38,
        source: "./assets/tabs/battlefield/bf-patch-notes-4-0.png",
        tag: "Battlefield 2042",
        date: "6-giu-2022",
        title: "AGGIORNAMENTO 1.0 DI BATTLEFIELD 2042",
        content: `Aggiornamento 1.0 per la Stagione 1`
    },
    {
        id: 39,
        source: "./assets/tabs/battlefield/battlefield-briefing-featured.431p_",
        tag: "Battlefield 2042",
        date: "24-mag-2022",
        title: "Briefing Battlefield -- Aggiornamento sullo sviluppo, maggio 2022",
        content: `Scoprite su cosa abbiamo lavorato in questo aggiornamento sullo sviluppo di Battlefield 2042`
    },
    {
        id: 40,
        source: "./assets/tabs/battlefield/bf-patch-notes-4.png",
        tag: "Battlefield 2042",
        date: "18-mag-2022",
        title: "AGGIORNAMENTO 4.1 DI BATTLEFIELD 2042",
        content: `Aggiornamenti alla rotazione di All-out warfare, modifiche al bilanciamento, miglioramenti all'esperienza di gioco e altro ancora nell'aggiornamento 4.1`
    },
    {
        id: 41,
        source: "./assets/tabs/battlefield/bf-patch-notes-4-0.png",
        tag: "Battlefield 2042",
        date: "18-apr-2022",
        title: "AGGIORNAMENTO 4.0 DI BATTLEFIELD 2042",
        content: `Arriva la funzionalità VoIP, insieme a modifiche al bilanciamento, correzioni di bug e miglioramenti all'esperienza di gioco`
    },
    {
        id: 42,
        source: "./assets/tabs/inside-ea/maxiswebsite-brand-logo.jpg",
        tag: "Inside EA",
        date: "1-apr-2022",
        title: "Vieni a costruire il futuro di The Sims a Maxis",
        content: `La nostra ambizione: ispirare tutti a creare un mondo migliore attraverso il gioco creativo`
    },
    {
        id: 43,
        source: "./assets/tabs/inside-ea/ea-blog-post-social-impact.png",
        tag: "Inside EA",
        date: "31-mar-2022",
        title: "Lasciare un segno positivo all'interno e all'esterno dei nostri giochi",
        content: `Lasciare un segno positivo all'interno e all'esterno dei nostri giochi`
    },
    {
        id: 44,
        source: "./assets/tabs/inside-ea/sfp-insideea-blog.jpg",
        tag: "Inside EA",
        date: "13-gen-2022",
        title: "Firemonkeys Studio di EA festeggia i 10 anni di The Sims FreePlay",
        content: `Tutto è cominciato realizzando The Sims per dispositivi mobili: da allora è diventato uno dei titoli preferiti della serie`
    },
    {
        id: 45,
        source: "./assets/tabs/inside-ea/fullcircle-article.png",
        tag: "Inside EA",
        date: "16-dic-2021",
        title: "Dentro Full Circle – Melvin Teo, produttore di skate.",
        content: `Scopri di più sullo studio Full Circle con Melvin Teo, produttore di skate.`
    },
    {
        id: 46,
        source: "./assets/tabs/inside-ea/ea-able-inclusion.jpg",
        tag: "Inside EA",
        date: "2-nov-2021",
        title: "ABLE festeggia il mese nazionale di sensibilizzazione sull'occupazione per …",
        content: `È il momento di educare sui problemi di handicap e celebrare i numerosi e variegati contributi dei lavoratori con disabilità`
    },
    {
        id: 47,
        source: "./assets/tabs/inside-ea/generic-electronic-arts.png",
        tag: "Inside EA",
        date: "27-ott-2021",
        title: "Rafforzare il nostro impegno in materia di accessibilità e inclusione",
        content: `Per ispirare il mondo a giocare, dobbiamo creare storie, personaggi, esperienze e servizi che entrino in risonanza con tutti i giocatori.`
    },
    {
        id: 48,
        source: "./assets/tabs/team-5/Capy-vs-Zilla.jpg",
        tag: "Team 5",
        date: "17-09-2022",
        title: "Scatenza la potenza di GodCapy",
        content: `Scatena tutta la potenza dell'Essere Supremo ed affronta mostri iconici come Godzilla, Jeeg Robot o il gatto di Gabbo!`
    },
    {
        id: 49,
        source: "./assets/tabs/team-5/gatto-gabbo.jpg",
        tag: "Team 5",
        date: "17-09-2022",
        title: "Universo in crisi!",
        content: `Mentre la popolazione si preoccupa per il rincaro bollette, la NASA cerca di trovare una soluzione per fermare l'espansione del gatto di Gabbo, prossimo a divenire un buco nero...`
    },
    {
        id: 50,
        source: "./assets/tabs/team-5/felpa-team5.png",
        tag: "Team 5",
        date: "17-09-2022",
        title: "TEAM 5 - Fuori ora il Merchandising ufficiale",
        content: `Acquistando il merchandising ufficiale sosterrai la fondazione benefica contro l'alcolismo "Save Italo"!`
    },
    {
        id: 51,
        source: "./assets/tabs/team-5/jimmy.jpg",
        tag: "Team 5",
        date: "17-09-2022",
        title: "Studentessa Develhope denunciata",
        content: `Dopo un'irruzione nella residenza della giovane studentessa le autorità hanno confermato i propri sospetti: sfruttamento e maltrattamento di animali per scopi di lucro.`
    },
    {
        id: 52,
        source: "https://thumbs.gfycat.com/MassiveMiserlyLabradorretriever-size_restricted.gif",
        tag: "Team 5",
        date: "17-09-2022",
        title: "Niente da vedere",
        content: `Niente da vedere qui, l'Essere Supremo si fa un bagnetto.`
    },
    {
        id: 53,
        source: "./assets/tabs/team-5/criminal.jpg",
        tag: "Team 5",
        date: "17-09-2022",
        title: "Eccesso di tifoseria a Roma",
        content: `Dopo l'incredibile sconfitta della Lazio in Conference League, un tifoso Romanista esagera con gli sfottò nei confronti dei "cugini" Laziali, fermato dalle autorità.`
    },

];

export { cards };