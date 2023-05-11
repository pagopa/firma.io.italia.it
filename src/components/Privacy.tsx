import React from 'react';
import { Box, Container } from '@mui/material';

interface PrivacyProps {
  content?: string
}

const Privacy = (props: PrivacyProps) => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }} component="section"> 
      <Container>
        <h2>Informativa sul trattamento dei dati personali</h2>
        <p>La presente informativa, resa ai sensi del Regolamento (UE) 2016/679 (di seguito, anche &ldquo;<em>Regolamento</em>&rdquo; o &ldquo;<em>GDPR</em>&rdquo;), descrive i trattamenti di dati personali degli utenti (di seguito, "<em>Interessato/i</em>" o genericamente &nbsp;&ldquo;<em>Utente/i</em>&rdquo;)&nbsp; che navigano il sito web <a href="https://firma.io.italia.it/" target="_blank" rel="noopener">https://firma.io.italia.it/</a><a href="https://www.pagopa.it/" target="_blank" rel="noopener"> </a>(di seguito, anche il &ldquo;<em>Sito</em>&rdquo;), gestito da PagoPA S.p.A. (di seguito, anche la &ldquo;Societ&agrave;&rdquo;o il &ldquo;Titolare&rdquo; o il &ldquo;<em>Gestore del Sito</em>&rdquo;)</p>
        <p><em>La presente informativa &egrave; valida limitatamente al Sito e non si estende ad altri domini, eventualmente consultabili mediante collegamenti ipertestuali, anche se gestiti dalla Societ&agrave;.</em></p>
        <h4>Titolare del trattamento</h4>
        <p>Il Titolare del trattamento &egrave; <strong>PagoPA S.p.A.</strong>, con sede in Roma, Piazza Colonna 370.&nbsp;</p>
        <p>E-mail: info@pagopa.it</p>
        <p>PEC: pagopa@pec.governo.it</p>
        <h4>Responsabile Protezione Dati</h4>
        <p>PagoPA S.p.A. ha nominato un proprio Responsabile della Protezione dei Dati (DPO), ai sensi dell&rsquo;art. 37 del Regolamento, che pu&ograve; essere contattato all&rsquo;indirizzo e-mail <a href="mailto:dpo@pagopa.it" target="_blank" rel="noopener">dpo@pagopa.it</a>.</p>
        <h4>Categorie di dati e finalit&agrave;</h4>
        <p>a. <span style={{ textDecoration: 'underline' }} >Dati di navigazione</span></p>
        <p>I sistemi informatici preposti al funzionamento del Sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione &egrave; implicita nell&rsquo;uso dei protocolli di comunicazione di Internet.</p>
        <p>In questa categoria di dati rientrano gli indirizzi IP o i nomi a dominio dispositivi utilizzati dagli Utenti, gli indirizzi in notazione URI/URL (Uniform Resource Identifier/Locator) delle risorse richieste, l&rsquo;orario della richiesta, il tipo di richiesta effettuata (risorsa richiesta e nome dell&rsquo;operazione), il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all&rsquo;ambiente informatico dell&rsquo;Utente.</p>
        <p>Tali dati, necessari per:</p>
        <ul>
        <li>la fruizione delle funzionalit&agrave; del Sito;</li>
        <li>controllare il corretto funzionamento dei sistemi e dei servizi offerti dal Sito (diagnostica); nonch&eacute;&nbsp;</li>
        <li>per motivi di sicurezza.</li>
        </ul>
        <p>b. <span style={{ textDecoration: 'underline' }}>Dati comunicati dall&rsquo;Utente</span></p>
        <p>L&rsquo; Utente attraverso il Sito ha la possibilit&agrave; di comunicare i propri dati alla Societ&agrave; attraverso l&rsquo;apposito modulo di richiesta informazioni sul progetto.</p>
        <p>La compilazione e l'inoltro del suddetto modulo presente sul Sito, comportano l'acquisizione di dati personali comuni del mittente quali nome, cognome ed e-mail e il trattamento degli stessi per riscontrare la richiesta e avviare le attivit&agrave; precontrattuali.</p>
        <p><strong>Base giuridica del trattamento</strong></p>
        <p>La Societ&agrave; tratta i dati personali attraverso il Sito:</p>
        <ol>
        <li>ai sensi dell&rsquo;art. 6, comma 1, lett. e), del Regolamento, da rinvenirsi nei compiti istituzionali affidati al Titolare, che includono quello di fornire informazioni e aggiornamenti sull&rsquo;attivit&agrave; e sui progetti della Societ&agrave;, in qualit&agrave; di gestore del punto di accesso telematico ex art. 64-bis CAD (categoria sub a.)</li>
        <li>ai sensi dell&rsquo;art. 6, comma 1, lett. b), del GDPR, in quanto &egrave; necessario per l&rsquo;esecuzione di misure precontrattuali su richiesta dell&rsquo;Utente (categoria sub b.)</li>
        </ol>
        <p><strong>Categorie di destinatari</strong></p>
        <p>La Societ&agrave; potrebbe comunicare alcuni dati personali a soggetti dei quali si avvale, in qualit&agrave; di responsabili ai sensi dell&rsquo;art. 28 del Regolamento, per lo svolgimento di determinate attivit&agrave; di trattamento ovvero ad altri, cui la comunicazione sia necessaria per l&rsquo;esecuzione di un compito di interesse pubblico o per adempiere a un obbligo di legge. L&rsquo;elenco dei responsabili del trattamento pu&ograve; essere richiesto alla Societ&agrave; attraverso il presente <a href="https://privacyportal-de.onetrust.com/webform/77f17844-04c3-4969-a11d-462ee77acbe1/9ab6533d-be4a-482e-929a-0d8d2ab29df8" target="_blank" rel="noopener"><span style={{ color: '#0066cc'}}>form</span></a>.</p>
        <p>I dati personali raccolti sono altres&igrave; trattati dal personale incaricato del trattamento, che agisce in base a specifiche istruzioni impartite dal Titolare.</p>
        <p>La lista dei fornitori coinvolti nel Progetto IO nominati Responsabili, e copia della documentazione contrattuale relativa al trattamento dei dati personali, comprensiva delle garanzie per gli eventuali trasferimenti all&rsquo;estero, &egrave; disponibile all&rsquo;indirizzo <a href="https://io.italia.it/app-content/fornitori" target="_blank" rel="noopener"><span style={{ color: '#0066cc'}}>io.italia.it/app-content/fornitori</span></a>.</p>
        <h4>Trasferimenti verso paesi terzi</h4>
        <p>Per garantire l&rsquo;operativit&agrave; dei propri prodotti e servizi, la Societ&agrave; si avvale di fornitori terzi, nominati ai sensi dell&rsquo;art. 28 GDPR, che presentano garanzie sufficienti per mettere in atto misure tecniche e organizzative adeguate, tali da garantire la tutela dei diritti dell'interessato.&nbsp;</p>
        <p>Alcuni di questi fornitori potrebbero effettuare dei trasferimenti di dati al di fuori dello Spazio Economico Europeo.</p>
        <p>In tali circostanze, la Societ&agrave;, nel rispetto della normativa sulla protezione dei dati personali e in particolare degli articoli da 44 a 49 del GDPR, effettua periodicamente le opportune valutazioni di impatto sui trasferimenti dei dati personali e implementa o aggiorna, ove necessario, i meccanismi e le misure che assicurino un adeguato livello di tutela dei diritti degli interessati e la liceit&agrave; del trasferimento. Nel caso in cui non sia disponibile alcun meccanismo o misura di trasferimento idoneo, PagoPA non trasferir&agrave; dati personali.&nbsp;</p>
        <p><span style={{ color: '#171717'}}>Maggiori informazioni possono essere richieste attraverso l&rsquo;apposito </span><a href="https://privacyportal-de.onetrust.com/webform/77f17844-04c3-4969-a11d-462ee77acbe1/9ab6533d-be4a-482e-929a-0d8d2ab29df8" target="_blank" rel="noopener"><span style={{ color: '#0066cc'}}><strong>form di contatto</strong></span></a><span style={{ color: '#0066cc'}}><strong>.&nbsp;</strong></span></p>
        <h4>Periodo di conservazione</h4>
        <p>I dati personali relativi agli Utenti sono trattati per il tempo strettamente necessario al perseguimento delle finalit&agrave; per le quali sono stati raccolti.&nbsp;</p>
        <p>Nel rispetto dei principi di proporzionalit&agrave; e necessit&agrave;, i dati non sono conservati per periodi pi&ugrave; lunghi rispetto a quelli indispensabili alla realizzazione delle finalit&agrave; sopra indicate e dunque al diligente svolgimento delle attivit&agrave;, in particolare, i dati comunicati dall'Utente sono conservati per il tempo necessario a gestire la richiesta e, comunque, fino a 10 anni, termine di prescrizione ordinaria ai sensi dell'articolo 2946 c.c.</p>
        <h4>Diritti degli interessati</h4>
        <p>Gli Utenti, ai sensi degli articoli 15 e seguenti del Regolamento, hanno diritto:</p>
        <ul>
        <li>di ottenere dal Titolare la <strong>conferma</strong> che sia o meno in corso un trattamento di dati personali che lo riguardano e in tal caso, di ottenere l'accesso ai dati personali e riceverne una copia;</li>
        <li>di ottenere dal Titolare la <strong>rettifica</strong> dei dati personali inesatti che lo riguardano, senza ingiustificato ritardo, nonch&eacute; di ottenere l&rsquo;<strong>integrazione</strong> dei dati personali incompleti;</li>
        <li>di ottenere dal Titolare la <strong>cancellazione</strong> dei dati personali che lo riguardano senza ingiustificato ritardo, ove ne ricorrano i presupposti;</li>
        <li>di ottenere dal Titolare la <strong>limitazione</strong> del trattamento, ove ne ricorrano i presupposti;</li>
        <li>di ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico i dati personali che lo riguardano forniti a un titolare del trattamento e ha il diritto di trasmettere tali dati a un altro titolare del trattamento senza impedimenti da parte del titolare del trattamento cui li ha forniti, ove ne ricorrano i presupposti.</li>
        </ul>
        <p>Gli Utenti hanno, altres&igrave;, diritto di <strong>opporsi</strong> in qualsiasi momento, per motivi connessi alla sua situazione particolare, al trattamento dei dati personali che lo riguardano per l'esecuzione di un compito di interesse pubblico o connesso all'esercizio di pubblici poteri di cui &egrave; investito il Titolare, ovvero per il perseguimento del legittimo interesse del Titolare.</p>
        <p>Nel caso in cui il trattamento sia basato sul <strong>consenso</strong>, gli Utenti hanno il diritto di revocarlo in qualsiasi momento senza pregiudicare la liceit&agrave; del trattamento basata sul consenso prestato prima della revoca.</p>
        <p><strong>Le richieste di esercizio di tali diritti potranno essere indirizzate al Titolare compilando il presente </strong><a href="https://privacyportal-de.onetrust.com/webform/77f17844-04c3-4969-a11d-462ee77acbe1/9ab6533d-be4a-482e-929a-0d8d2ab29df8" target="_blank" rel="noopener"><span style={{ color: '#0066cc'}}><strong>form</strong></span></a><strong>.&nbsp;</strong></p>
        <p>Qualora un Utente ritenga che un trattamento di dati personali violi le previsioni del Regolamento ha il diritto di proporre reclamo all'<strong>Autorit&agrave; di controllo</strong> (in Italia, il <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener"><span style={{ color: '#0066cc'}}><strong>Garante per la Protezione dei Dati Personali</strong></span></a>), o di adire le opportune sedi giudiziarie.</p>
        <h4>Modifiche</h4>
        <p>Il Titolare si riserva il diritto di apportare alla presente informativa, a propria esclusiva discrezione, ed in qualunque momento, tutte le modifiche ritenute opportune o rese obbligatorie dalle norme di volta in volta vigenti, dandone adeguata pubblicit&agrave; agli Utenti. Si prega, dunque, l&rsquo;Utente di consultare spesso questa pagina, prendendo a riferimento la data di ultima modifica indicata.</p>
        <p>Data di ultima modifica: 11 maggio 2023</p>
        <p><strong>Cookie, traccianti e altre informazioni memorizzate</strong></p>
        <p>Il Sito utilizza sia cookie di prima parte sia <em>cookie</em> di terze parti di tipo tecnico.</p>
        <p>Di seguito sono riportati i dettagli dei cookie</p>
        <p>_pk_ses.6.fe0d (sessione), utilizzato per statistiche aggregate dei visitatori</p>
        <p>_pk_id.6.fe0d (400 gg), utilizzato per statistiche aggregate dei visitatori</p>
        <p>_GRECAPTCHA (180 gg), utilizzato dal sistema Recaptcha per finalit&agrave; di sicurezza</p>
        <p>rc::a (sessione), utilizzato dal sistema Recaptcha per finalit&agrave; di sicurezza</p>
        <p>rc::b (sessione), utilizzato dal sistema Recaptcha per finalit&agrave; di sicurezza</p>
        <p>rc::c (sessione), utilizzato dal sistema Recaptcha per finalit&agrave; di sicurezza</p>
        <p>&Egrave; possibile gestire le preferenze relative ai cookie attraverso le opzioni fornite dal proprio browser.</p>
    </Container>
  </Box>)
};

export default Privacy;