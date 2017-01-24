

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
    "%(sent_date)s by %(user)s": "%(sent_date)s von %(user)s", 
    "Add more details": "Weitere Details hinzuf\u00fcgen", 
    "Add or improve examples": "Beispiele hinzuf\u00fcgen oder verbessern", 
    "Article Title Lookup / Link Text": "Suche nach Artikel-Titel / Link-Text", 
    "Aspect ratio": "Seitenverh\u00e4ltnis", 
    "Attachments": "Anh\u00e4nge", 
    "Autosave disabled.": "Automatisches Speichern deaktiviert.", 
    "Autosave enabled.": "Automatisches Speichern aktiviert.", 
    "CSS Content": "CSS-Inhalt", 
    "Changes saved.": "\u00c4nderungen gespeichert.", 
    "Choose one...": "Ausw\u00e4hlen\u2026", 
    "Close": "Schlie\u00dfen", 
    "Close notification": "Benachrichtigung schlie\u00dfen", 
    "Close submenu": "Untermen\u00fc schlie\u00dfen", 
    "Create a Redirect": "Eine Weiterleitung einrichten", 
    "Default": "Standard", 
    "Details": "Details", 
    "Did this page help you?": "Hat Ihnen diese Seite weitergeholfen?", 
    "Discard the draft": "Entwurf verwerfen", 
    "Document": "Dokument", 
    "Draft": "Entwurf", 
    "Edit Page": "Seite bearbeiten", 
    "Embed YouTube Video": "YouTube-Video einbetten", 
    "Enable autosave.": "Automatisches Speichern aktivieren.", 
    "Error submitting as %(type)s": "Fehler \u00fcbermittelt als %(type)s", 
    "Fix incorrect information": "Fehlerhafte Informationen korrigieren", 
    "HTML Content": "HTML-Inhalt", 
    "Hang on! Updating filters\u2026": "Einen Moment! Die Filter werden aktualisiert\u2026", 
    "History": "Versionsgeschichte", 
    "How to read CSS syntax.": "Wie man die CSS-Syntax liest.", 
    "Insert Code Sample Template": "Vorlage f\u00fcr Beispielquelltext einf\u00fcgen", 
    "Insert Code Sample iFrame": "iFrame mit Beispielquelltext einf\u00fcgen", 
    "JavaScript Content": "JavaScript-Inhalt", 
    "Launch": "Starten", 
    "Locate a YouTube Video": "Ein YouTube-Video finden", 
    "MDN Redirect": "MDN-Weiterleitung", 
    "Make explanations clearer": "Erkl\u00e4rungen deutlicher machen", 
    "More about the beta.": "Mehr \u00fcber die Beta.", 
    "My search should have led to a different article": "Meine Suche h\u00e4tte zu einem anderen Artikel f\u00fchren sollen", 
    "Never ask me again": "Nicht wieder fragen", 
    "New compatibility tables are in beta ": "Neue Kompatibilit\u00e4tstabellen sind in der Beta ", 
    "New interest...": "Neues Interesse\u2026", 
    "New tag...": "Neues Schlagwort\u2026", 
    "No": "Nein", 
    "No Highlight": "Keine Hervorherbung", 
    "No attachments available": "Keine Anh\u00e4nge verf\u00fcgbar", 
    "No selection": "Keine Auswahl", 
    "Open": "\u00d6ffnen", 
    "Open implementation notes": "Implementierungshinweise \u00f6ffnen", 
    "Open in %(site)s": "\u00d6ffnen in %(site)s", 
    "Paste YouTube Video URL": "URL von YouTube-Video einf\u00fcgen", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the 'Publish' button.": "Ver\u00f6ffentlichung fehlgeschlagen. Bitte kopieren Sie Ihre \u00c4nderungen an einen sicheren Ort und versuchen Sie, das Formular mit der Schaltfl\u00e4che \u201eVer\u00f6ffentlichen\u201c abzusenden.", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "Ver\u00f6ffentlichung fehlgeschlagen. Sie sind derzeit nicht angemeldet. Bitte verwenden Sie einen neuen Tab, um sich anzumelden und erneut zu versuchen, den Inhalt zu ver\u00f6ffentlichen.", 
    "Report an error.": "Einen Fehler melden.", 
    "Reported. Thanks!": "Gemeldet. Danke!", 
    "Restore the draft content": "Inhalt des Entwurfs wiederherstellen", 
    "Result": "Ergebnis", 
    "Return to compatibility table.": "Zur Kompatibilit\u00e4tstabelle zur\u00fcckkehren.", 
    "Revert": "Zur\u00fccksetzen", 
    "Sample CSS Content": "CSS-Beispielinhalt", 
    "Sample Finder": "Beispielfinder", 
    "Sample HTML Content": "HTML-Beispielinhalt", 
    "Sample JavaScript Content": "JavaScript-Beispielinhalt", 
    "Save Draft": "Entwurf speichern", 
    "Search Stack Overflow": "Stack Overflow durchsuchen", 
    "Sections in Document": "Abschnitte im Dokument", 
    "Select a section": "W\u00e4hlen Sie einen Abschnitt aus", 
    "Select an attachment": "W\u00e4hlen Sie einen Anhang aus", 
    "Selected: ": "Ausgew\u00e4hlt: ", 
    "Show old table.": "Alte Tabelle anzeigen.", 
    "Something else": "Etwas anderes", 
    "Submitted as %(submission_type)s": "\u00dcbermittelt als %(submission_type)s", 
    "Submitting...": "\u00dcbermitteln\u2026", 
    "Syntax Highlighter": "Syntaxhervorhebung", 
    "Take the survey": "Die Umfrage ausf\u00fcllen", 
    "Thanks for your feedback!": "Danke f\u00fcr Ihre R\u00fcckmeldung!", 
    "Thanks! We'll fix it.": "Danke! Wir bringen das in Ordnung.", 
    "The URL you've entered doesn't appear to be valid": "Die eingegebene URL scheint ung\u00fcltig zu sein", 
    "Translate it into my language": "In meine Sprache \u00fcbersetzen", 
    "URL": "URL", 
    "Uh oh. What would make it better?": "Oh, oh. Wodurch w\u00fcrde sie verbessert?", 
    "Updated filters.": "Die Filter wurden aktualisiert.", 
    "View Page": "Seite ansehen", 
    "We won't bug you again.": "Wir st\u00f6ren Sie nicht noch einmal.", 
    "What should the sample title be?": "Welchen Titel sollte das Beispiel haben?", 
    "Yes": "Ja", 
    "You have a draft from:": "Sie haben einen Entwurf vom:", 
    "You must input a valid YouTube video URL.": "Sie m\u00fcssen eine g\u00fcltige Video-URL von YouTube eingeben.", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "Ihr Browser unterst\u00fctzt kein MathML. Stattdessen wurde eine CSS-Alternative verwendet.", 
    "an unknown date": "[unbekanntes Datum]", 
    "autosaved": "Automatisch gespeichert", 
    "discarded": "Verworfen", 
    "published": "Ver\u00f6ffentlicht", 
    "restored": "Wiederhergestellt", 
    "saved": "Gespeichert"
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
    "DATETIME_FORMAT": "j. F Y H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S", 
      "%d.%m.%Y %H:%M:%S.%f", 
      "%d.%m.%Y %H:%M", 
      "%d.%m.%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "j. F Y", 
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y", 
      "%d.%m.%y", 
      "%Y-%m-%d"
    ], 
    "DECIMAL_SEPARATOR": ",", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "j. F", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i", 
    "SHORT_DATE_FORMAT": "d.m.Y", 
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

