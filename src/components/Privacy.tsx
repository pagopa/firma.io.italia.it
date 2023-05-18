import React from 'react';
import { Box, Container } from '@mui/material';

interface PrivacyProps {
  content?: string
}

const Privacy = (props: PrivacyProps) => {
  return (
    <Box sx={{ py: { xs: 4, md: 10 } }} component="section">
      <Container>
      <h4>Titolare del trattamento</h4>
      <p>Il Titolare del trattamento è <strong>PagoPA S.p.A.</strong>, con sede in Roma, Piazza Colonna 370. <br />E-mail: <a
              href="mailto:info@pagopa.it" target="_blank" rel="noopener">info@pagopa.it</a><br />PEC: <a
              href="mailto:pagopa@pec.governo.it" target="_blank" rel="noopener">pagopa@pec.governo.it</a></p>
      <h4>Responsabile Protezione Dati</h4>
      <p>PagoPA S.p.A. ha nominato un proprio Responsabile della Protezione dei Dati (DPO), ai sensi dell’art. 37 del
          Regolamento, che può essere contattato all’indirizzo e-mail <a href="mailto:dpo@pagopa.it" target="_blank"
              rel="noopener">dpo@pagopa.it</a>.</p>
      <h4>Categorie di dati e finalità</h4>
      <p>a. <span style={ { textDecoration: 'underline' }}>Dati di navigazione</span></p>
      <p>I sistemi informatici preposti al funzionamento del Sito acquisiscono, nel corso del loro normale esercizio, alcuni
          dati personali la cui trasmissione è implicita nell’uso dei protocolli di comunicazione di Internet.<br />In questa
          categoria di dati rientrano gli indirizzi IP o i nomi a dominio dispositivi utilizzati dagli Utenti, gli indirizzi
          in notazione URI/URL (Uniform Resource Identifier/Locator) delle risorse richieste, l’orario della richiesta, il
          tipo di richiesta effettuata (risorsa richiesta e nome dell’operazione), il metodo utilizzato nel sottoporre la
          richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della
          risposta data dal server (buon fine, errore, ecc.) ed altri parametri relativi al sistema operativo e all’ambiente
          informatico dell’Utente.<br />Tali dati, necessari per:
      <ul>
          <li>la fruizione delle funzionalità del Sito;</li>
          <li>controllare il corretto funzionamento dei sistemi e dei servizi offerti dal Sito (diagnostica); nonché </li>
          <li>per motivi di sicurezza.</li>
      </ul>
      </p>
      <p>b. <span style={ { textDecoration: 'underline' }} >Dati comunicati dall’Utente</span></p>
      <p>L’ Utente attraverso il Sito ha la possibilità di comunicare i propri dati alla Società attraverso l’apposito modulo
          di richiesta informazioni sul progetto.<br />La compilazione e l&#x27;inoltro del suddetto modulo presente sul Sito,
          comportano l&#x27;acquisizione di dati personali comuni del mittente quali nome, cognome ed e-mail e il trattamento
          degli stessi per riscontrare la richiesta e avviare le attività precontrattuali.</p>
      <p><strong>Base giuridica del trattamento</strong></p>
      <p>La Società tratta i dati personali attraverso il Sito:</p>
      <ol>
          <li>ai sensi dell’art. 6, comma 1, lett. e), del Regolamento, da rinvenirsi nei compiti istituzionali affidati al
              Titolare, che includono quello di fornire informazioni e aggiornamenti sull’attività e sui progetti della
              Società, in qualità di gestore del punto di accesso telematico ex art. 64-bis CAD (categoria sub a.)</li>
          <li>ai sensi dell’art. 6, comma 1, lett. b), del GDPR, in quanto è necessario per l’esecuzione di misure
              precontrattuali su richiesta dell’Utente (categoria sub b.)</li>
      </ol>
      <p><strong>Categorie di destinatari</strong></p>
      <p>La Società potrebbe comunicare alcuni dati personali a soggetti dei quali si avvale, in qualità di responsabili ai
          sensi dell’art. 28 del Regolamento, per lo svolgimento di determinate attività di trattamento ovvero ad altri, cui
          la comunicazione sia necessaria per l’esecuzione di un compito di interesse pubblico o per adempiere a un obbligo di
          legge. L’elenco dei responsabili del trattamento può essere richiesto alla Società attraverso il presente <a
              href="https://privacyportal-de.onetrust.com/webform/77f17844-04c3-4969-a11d-462ee77acbe1/9ab6533d-be4a-482e-929a-0d8d2ab29df8"
              target="_blank" rel="noopener"><span style={{ color: '#0066cc' }} >form</span></a>.<br />I dati personali raccolti sono
          altresì trattati dal personale incaricato del trattamento, che agisce in base a specifiche istruzioni impartite dal
          Titolare.<br />La lista dei fornitori coinvolti nel Progetto IO nominati Responsabili, e copia della documentazione
          contrattuale relativa al trattamento dei dati personali, comprensiva delle garanzie per gli eventuali trasferimenti
          all’estero, è disponibile all’indirizzo <a href="https://io.italia.it/app-content/fornitori" target="_blank"
              rel="noopener"><span style={{ color: '#0066cc' }} >io.italia.it/app-content/fornitori</span></a>.</p>
      <h4>Trasferimenti verso paesi terzi</h4>
      <p>Per garantire l’operatività dei propri prodotti e servizi, la Società si avvale di fornitori terzi, nominati ai sensi
          dell’art. 28 GDPR, che presentano garanzie sufficienti per mettere in atto misure tecniche e organizzative adeguate,
          tali da garantire la tutela dei diritti dell&#x27;interessato. <br />Alcuni di questi fornitori potrebbero
          effettuare dei trasferimenti di dati al di fuori dello Spazio Economico Europeo.<br />In tali circostanze, la
          Società, nel rispetto della normativa sulla protezione dei dati personali e in particolare degli articoli da 44 a 49
          del GDPR, effettua periodicamente le opportune valutazioni di impatto sui trasferimenti dei dati personali e
          implementa o aggiorna, ove necessario, i meccanismi e le misure che assicurino un adeguato livello di tutela dei
          diritti degli interessati e la liceità del trasferimento. Nel caso in cui non sia disponibile alcun meccanismo o
          misura di trasferimento idoneo, PagoPA non trasferirà dati personali. <br /><span style={{ color: '#171717' }}>Maggiori
              informazioni possono essere richieste attraverso l’apposito </span><a
              href="https://privacyportal-de.onetrust.com/webform/77f17844-04c3-4969-a11d-462ee77acbe1/9ab6533d-be4a-482e-929a-0d8d2ab29df8"
              target="_blank" rel="noopener"><span style={{ color: '#0066cc' }}><strong>form di contatto</strong></span></a><span
              style={{ color: '#0066cc' }} ><strong>. </strong></span></p>
      <h4>Periodo di conservazione</h4>
      <p>I dati personali relativi agli Utenti sono trattati per il tempo strettamente necessario al perseguimento delle
          finalità per le quali sono stati raccolti. <br />Nel rispetto dei principi di proporzionalità e necessità, i dati
          non sono conservati per periodi più lunghi rispetto a quelli indispensabili alla realizzazione delle finalità sopra
          indicate e dunque al diligente svolgimento delle attività, in particolare, i dati comunicati dall&#x27;Utente sono
          conservati per il tempo necessario a gestire la richiesta e, comunque, fino a 10 anni, termine di prescrizione
          ordinaria ai sensi dell&#x27;articolo 2946 c.c.</p>
      <h4>Diritti degli interessati</h4>
      <p>Gli Utenti, ai sensi degli articoli 15 e seguenti del Regolamento, hanno diritto:</p>
      <ul>
          <li>di ottenere dal Titolare la <strong>conferma</strong> che sia o meno in corso un trattamento di dati personali
              che lo riguardano e in tal caso, di ottenere l&#x27;accesso ai dati personali e riceverne una copia;</li>
          <li>di ottenere dal Titolare la <strong>rettifica</strong> dei dati personali inesatti che lo riguardano, senza
              ingiustificato ritardo, nonché di ottenere l’<strong>integrazione</strong> dei dati personali incompleti;</li>
          <li>di ottenere dal Titolare la <strong>cancellazione</strong> dei dati personali che lo riguardano senza
              ingiustificato ritardo, ove ne ricorrano i presupposti;</li>
          <li>di ottenere dal Titolare la <strong>limitazione</strong> del trattamento, ove ne ricorrano i presupposti;</li>
          <li>di ricevere in un formato strutturato, di uso comune e leggibile da dispositivo automatico i dati personali che
              lo riguardano forniti a un titolare del trattamento e ha il diritto di trasmettere tali dati a un altro titolare
              del trattamento senza impedimenti da parte del titolare del trattamento cui li ha forniti, ove ne ricorrano i
              presupposti.</li>
      </ul>
      <p>Gli Utenti hanno, altresì, diritto di <strong>opporsi</strong> in qualsiasi momento, per motivi connessi alla sua
          situazione particolare, al trattamento dei dati personali che lo riguardano per l&#x27;esecuzione di un compito di
          interesse pubblico o connesso all&#x27;esercizio di pubblici poteri di cui è investito il Titolare, ovvero per il
          perseguimento del legittimo interesse del Titolare.<br />Nel caso in cui il trattamento sia basato sul
          <strong>consenso</strong>, gli Utenti hanno il diritto di revocarlo in qualsiasi momento senza pregiudicare la
          liceità del trattamento basata sul consenso prestato prima della revoca.</p>
      <p><strong>Le richieste di esercizio di tali diritti potranno essere indirizzate al Titolare compilando il presente
          </strong><a
              href="https://privacyportal-de.onetrust.com/webform/77f17844-04c3-4969-a11d-462ee77acbe1/9ab6533d-be4a-482e-929a-0d8d2ab29df8"
              target="_blank" rel="noopener"><span style={{ color: '#0066cc' }}><strong>form</strong></span></a><strong>. </strong>
      </p>
      <p>Qualora un Utente ritenga che un trattamento di dati personali violi le previsioni del Regolamento ha il diritto di
          proporre reclamo all&#x27;<strong>Autorità di controllo</strong> (in Italia, il <a
              href="https://www.garanteprivacy.it/" target="_blank" rel="noopener"><span style={{ color: '#0066cc' }} ><strong>Garante
                      per la Protezione dei Dati Personali</strong></span></a>), o di adire le opportune sedi giudiziarie.</p>
      <p><strong>Cookie, traccianti e altre informazioni memorizzate</strong></p>
      <p>Il Sito utilizza cookie tecnici, sia di prima sia di terze parti.</p>
      <ul>
          <li><em>_pk_ses.*</em> (30 minuti), utilizzato per raccogliere statistiche aggregate dei visitatori;</li>
          <li><em>_pk_id.*</em> (393 giorni), utilizzato per raccogliere statistiche aggregate dei visitatori;</li>
          <li><em>_GRECAPTCHA</em> (180 giorni), utilizzato dal sistema Recaptcha per finalità di sicurezza;</li>
          <li><em>rc::*</em> (local e session storage), utilizzati dal sistema Recaptcha per finalità di sicurezza.</li>
      </ul>
      <p>È possibile gestire le preferenze relative ai cookie attraverso le opzioni fornite dal proprio browser.</p>
      <h4>Modifiche</h4>
      <p>Il Titolare si riserva il diritto di apportare alla presente informativa, a propria esclusiva discrezione, ed in
          qualunque momento, tutte le modifiche ritenute opportune o rese obbligatorie dalle norme di volta in volta vigenti,
          dandone adeguata pubblicità agli Utenti. Si prega, dunque, l’Utente di consultare spesso questa pagina, prendendo a
          riferimento la data di ultima modifica indicata.</p>
      <p><em>Data di ultima modifica: 11 maggio 2023</em></p>
    </Container>
  </Box >)
};

export default Privacy;