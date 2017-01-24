

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=(n != 1);
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    "%(sent_date)s by %(user)s": "da %(user)s il %(sent_date)s", 
    "Add more details": "Aggiungere maggiori informazioni", 
    "Add or improve examples": "Aggiungere o migliorare gli esempi", 
    "Article Title Lookup / Link Text": "Titolo articolo / Testo link", 
    "Aspect ratio": "Proporzioni", 
    "Attachments": "Allegati", 
    "Autosave disabled.": "Salvataggio automatico disattivato.", 
    "Autosave enabled.": "Salvataggio automatico attivato.", 
    "CSS Content": "Fogli di stile CSS", 
    "Changes saved.": "Le modifiche sono state salvate.", 
    "Choose one...": "Scegli un\u2019opzione", 
    "Close": "Chiudi", 
    "Close notification": "Chiudi notifica", 
    "Close submenu": "Chiudi sottomenu", 
    "Create a Redirect": "Crea una pagina di reindirizzamento", 
    "Default": "Predefinito", 
    "Details": "Informazioni", 
    "Did this page help you?": "Ti \u00e8 stata utile questa pagina?", 
    "Discard the draft": "Elimina questa bozza", 
    "Document": "Documento", 
    "Draft": "Bozza", 
    "Edit Page": "Modifica pagina", 
    "Embed YouTube Video": "Inserisci un video YouTube", 
    "Enable autosave.": "Attiva salvataggio automatico", 
    "Error submitting as %(type)s": "Errore durante l\u2019inserimento dei dati come %(type)s", 
    "Fix incorrect information": "Correggere le informazioni errate", 
    "HTML Content": "Codice HTML", 
    "Hang on! Updating filters\u2026": "Solo un attimo. Aggiornamento filtri in corso\u2026", 
    "History": "Storico", 
    "How to read CSS syntax.": "Come interpretare la sintassi CSS.", 
    "Insert Code Sample Template": "Inserisci il codice del modello di esempio", 
    "Insert Code Sample iFrame": "Inserisci il codice iframe di esempio", 
    "JavaScript Content": "Codice JavaScript", 
    "Launch": "Avvia", 
    "Locate a YouTube Video": "Individua un video YouTube", 
    "MDN Redirect": "Pagina MDN di reindirizzamento", 
    "Make explanations clearer": "Rendere pi\u00f9 comprensibile la spiegazione", 
    "More about the beta.": "Ulteriori informazioni sulla fase beta.", 
    "My search should have led to a different article": "La ricerca effettuata avrebbe dovuto condurre a un diverso articolo", 
    "Never ask me again": "Non chiedermelo pi\u00f9", 
    "New compatibility tables are in beta ": "Le nuove tabelle di compatibilit\u00e0 sono in una fase sperimentale", 
    "New interest...": "Nuovo interesse.", 
    "New tag...": "Nuovo tag.", 
    "No": "No", 
    "No Highlight": "Nessuna evidenziazione", 
    "No attachments available": "Nessun allegato disponibile", 
    "No selection": "Nessuna selezione", 
    "Open": "Apri", 
    "Open implementation notes": "Apri note di implementazione", 
    "Open in %(site)s": "Apri in %(site)s", 
    "Paste YouTube Video URL": "Incolla l\u2019indirizzo di un video YouTube", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the 'Publish' button.": "Non \u00e8 riuscita la pubblicazione dei contenuti. Copia e incolla le modifiche in un luogo sicuro e riprova a inviare i dati facendo clic sul pulsante Pubblica.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "La pubblicazione dei contenuti non \u00e8 riuscita perch\u00e9 al momento non sei collegato con il tuo profilo MDN. Apri una nuova scheda, effettua l\u2019accesso e ripeti l\u2019operazione.", 
    "Report an error.": "Segnala un errore.", 
    "Reported. Thanks!": "Segnalazione effettuata. Grazie.", 
    "Restore the draft content": "Ripristina il contenuto della bozza", 
    "Result": "Risultato", 
    "Return to compatibility table.": "Ritorna alla tabella compatibilit\u00e0.", 
    "Revert": "Annulla modifiche", 
    "Sample CSS Content": "Fogli di stile CSS di esempio", 
    "Sample Finder": "Trova esempi", 
    "Sample HTML Content": "Codice HTML di esempio", 
    "Sample JavaScript Content": "Codice JavaScript di esempio", 
    "Save Draft": "Salva bozza", 
    "Search Stack Overflow": "Ricerca su Stack Overflow", 
    "Sections in Document": "Sezioni nel documento", 
    "Select a section": "Seleziona una sezione", 
    "Select an attachment": "Seleziona un allegato", 
    "Selected: ": "Selezionato: ", 
    "Show old table.": "Visualizza la tabella utilizzando il vecchio formato.", 
    "Something else": "Altro", 
    "Submitted as %(submission_type)s": "Inserito come %(submission_type)s", 
    "Submitting...": "Inserimento dei dati in corso\u2026", 
    "Syntax Highlighter": "Evidenziatore di sintassi", 
    "Take the survey": "Partecipa al sondaggio", 
    "Thanks for your feedback!": "Grazie per aver condiviso le tue opinioni.", 
    "Thanks! We'll fix it.": "Grazie. Risolveremo il problema.", 
    "The URL you've entered doesn't appear to be valid": "L\u2019indirizzo inserito non sembra essere valido.", 
    "Translate it into my language": "Rendere disponibile la pagina nella mia lingua", 
    "URL": "URL", 
    "Uh oh. What would make it better?": "Hai dei suggerimenti per migliorarla?", 
    "Updated filters.": "Filtri aggiornati.", 
    "View Page": "Visualizza pagina", 
    "We won't bug you again.": "Eviteremo di infastidirti con altri bug in futuro.", 
    "What should the sample title be?": "Come dovrei scegliere il titolo per l\u2019esempio?", 
    "Yes": "S\u00ec", 
    "You have a draft from:": "\u00c8 presente una bozza da:", 
    "You must input a valid YouTube video URL.": "Inserisci un URL valido per il video di YouTube.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Il browser in uso non interpreta la tecnologia MathML. \u00c8 stata quindi utilizzata una versione alternativa basata sui CSS.", 
    "an unknown date": "data sconosciuta", 
    "autosaved": "salvata automaticamente", 
    "discarded": "rigettata", 
    "published": "Pubblicata", 
    "restored": "Ripristinata", 
    "saved": "Salvato"
  };

  django.gettext = function (msgid) {
    var value = django.catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
  };

  django.ngettext = function (singular, plural, count) {
    var value = django.catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[django.pluralidx(count)];
    }
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };


  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT": "l d F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S.%f", 
      "%d/%m/%Y %H:%M", 
      "%d/%m/%Y", 
      "%d/%m/%y %H:%M:%S", 
      "%d/%m/%y %H:%M:%S.%f", 
      "%d/%m/%y %H:%M", 
      "%d/%m/%y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%d-%m-%Y %H:%M:%S", 
      "%d-%m-%Y %H:%M:%S.%f", 
      "%d-%m-%Y %H:%M", 
      "%d-%m-%Y", 
      "%d-%m-%y %H:%M:%S", 
      "%d-%m-%y %H:%M:%S.%f", 
      "%d-%m-%y %H:%M", 
      "%d-%m-%y"
    ], 
    "DATE_FORMAT": "d F Y", 
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y", 
      "%Y/%m/%d", 
      "%d-%m-%Y", 
      "%Y-%m-%d", 
      "%d-%m-%y", 
      "%d/%m/%y"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j/F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d/m/Y H:i", 
    "SHORT_DATE_FORMAT": "d/m/Y", 
    "THOUSAND_SEPARATOR": ".", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.interpolate = django.interpolate;
  globals.get_format = django.get_format;

}(this));

