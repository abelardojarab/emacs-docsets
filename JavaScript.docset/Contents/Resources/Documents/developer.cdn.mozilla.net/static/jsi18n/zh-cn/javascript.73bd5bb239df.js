

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    "%(sent_date)s by %(user)s": "%(user)s \u4e8e %(sent_date)s", 
    "Add more details": "\u6dfb\u52a0\u66f4\u591a\u7ec6\u8282", 
    "Add or improve examples": "\u6dfb\u52a0\u6216\u6539\u8fdb\u4f8b\u5b50", 
    "Article Title Lookup / Link Text": "\u6587\u7ae0\u6807\u9898\u67e5\u8be2 / \u94fe\u63a5\u6587\u672c", 
    "Aspect ratio": "\u957f\u5bbd\u6bd4", 
    "Attachments": "\u9644\u4ef6", 
    "Autosave disabled.": "\u81ea\u52a8\u4fdd\u5b58\u5df2\u7981\u7528\u3002", 
    "Autosave enabled.": "\u81ea\u52a8\u4fdd\u5b58\u5df2\u542f\u7528\u3002", 
    "CSS Content": "CSS \u5185\u5bb9", 
    "Changes saved.": "\u66f4\u6539\u5df2\u4fdd\u5b58\u3002", 
    "Choose one...": "\u9009\u62e9\u4e00\u9879...", 
    "Close": "\u5173\u95ed", 
    "Close notification": "\u5173\u95ed\u901a\u77e5", 
    "Close submenu": "\u5173\u95ed\u5b50\u83dc\u5355", 
    "Create a Redirect": "\u521b\u5efa\u4e00\u4e2a\u91cd\u5b9a\u5411", 
    "Default": "\u9ed8\u8ba4", 
    "Details": "\u8be6\u7ec6\u4fe1\u606f", 
    "Did this page help you?": "\u6b64\u9875\u9762\u5bf9\u60a8\u6709\u5e2e\u52a9\u5417\uff1f", 
    "Discard the draft": "\u653e\u5f03\u8be5\u8349\u7a3f", 
    "Document": "\u6587\u6863", 
    "Draft": "\u8349\u7a3f", 
    "Edit Page": "\u7f16\u8f91\u9875\u9762", 
    "Embed YouTube Video": "\u5d4c\u5165 YouTube \u89c6\u9891", 
    "Enable autosave.": "\u542f\u7528\u81ea\u52a8\u4fdd\u5b58\u3002", 
    "Error submitting as %(type)s": "\u63d0\u4ea4\u4e3a %(type)s \u65f6\u51fa\u9519", 
    "Fix incorrect information": "\u4fee\u6b63\u9519\u8bef\u7684\u4fe1\u606f", 
    "HTML Content": "HTML \u5185\u5bb9", 
    "Hang on! Updating filters\u2026": "\u8bf7\u7a0d\u7b49\uff0c\u6b63\u5728\u66f4\u65b0\u8fc7\u6ee4\u5668\u2026", 
    "History": "\u5386\u53f2\u8bb0\u5f55", 
    "How to read CSS syntax.": "\u5982\u4f55\u9605\u8bfb CSS \u8bed\u6cd5\u3002", 
    "Insert Code Sample Template": "\u63d2\u5165\u4ee3\u7801\u793a\u4f8b\u6a21\u677f", 
    "Insert Code Sample iFrame": "\u63d2\u5165\u4ee3\u7801\u793a\u4f8b iFrame", 
    "JavaScript Content": "JavaScript \u5185\u5bb9", 
    "Launch": "\u542f\u52a8", 
    "Locate a YouTube Video": "\u5b9a\u4f4d\u4e00\u4e2a YouTube \u89c6\u9891", 
    "MDN Redirect": "MDN \u91cd\u5b9a\u5411", 
    "Make explanations clearer": "\u89e3\u91ca\u9700\u8981\u66f4\u6e05\u6670", 
    "More about the beta.": "\u5173\u4e8e\u6d4b\u8bd5\u7684\u66f4\u591a\u4fe1\u606f\u3002", 
    "My search should have led to a different article": "\u6211\u7684\u641c\u7d22\u5e94\u8be5\u5e26\u6211\u5230\u53e6\u4e00\u7bc7\u6587\u7ae0", 
    "Never ask me again": "\u4e0d\u518d\u8be2\u95ee", 
    "New compatibility tables are in beta ": "\u65b0\u7684\u517c\u5bb9\u6027\u8868\u683c\u6b63\u5728\u6d4b\u8bd5\u4e2d ", 
    "New interest...": "\u65b0\u7684\u5174\u8da3...", 
    "New tag...": "\u65b0\u5efa\u6807\u7b7e...", 
    "No": "\u6ca1\u6709", 
    "No Highlight": "\u6ca1\u6709\u9ad8\u4eae", 
    "No attachments available": "\u6ca1\u6709\u53ef\u7528\u7684\u9644\u4ef6", 
    "No selection": "\u6ca1\u6709\u9009\u62e9", 
    "Open": "\u6253\u5f00", 
    "Open implementation notes": "\u6253\u5f00\u5b9e\u73b0\u7b14\u8bb0", 
    "Open in %(site)s": "\u5728 %(site)s \u4e2d\u6253\u5f00", 
    "Paste YouTube Video URL": "\u7c98\u8d34 YouTube \u89c6\u9891\u7f51\u5740", 
    "Publishing failed. Please copy and paste your changes into a safe place and try submitting the form using the 'Publish' button.": "\u53d1\u5e03\u5931\u8d25\u3002\u8bf7\u5c06\u60a8\u6240\u505a\u7684\u4fee\u6539\u590d\u5236\u5e76\u7c98\u8d34\u5230\u4e00\u4e2a\u5b89\u5168\u7684\u5730\u65b9\uff0c\u5e76\u5c1d\u8bd5\u4f7f\u7528\u2018\u53d1\u5e03\u2019\u6309\u94ae\u63d0\u4ea4\u8868\u5355\u3002", 
    "Publishing failed. You are not currently signed in. Please use a new tab to sign in and try publishing again.": "\u53d1\u5e03\u5931\u8d25\u3002\u60a8\u5f53\u524d\u672a\u767b\u5f55\u3002\u8bf7\u4f7f\u7528\u65b0\u7684\u6807\u7b7e\u9875\u767b\u5f55\u5e76\u518d\u6b21\u5c1d\u8bd5\u53d1\u5e03\u3002", 
    "Report an error.": "\u62a5\u544a\u9519\u8bef\u3002", 
    "Reported. Thanks!": "\u5df2\u62a5\u544a\u3002\u8c22\u8c22\u60a8\uff01", 
    "Restore the draft content": "\u6062\u590d\u8349\u7a3f\u5185\u5bb9", 
    "Result": "\u7ed3\u679c", 
    "Return to compatibility table.": "\u8fd4\u56de\u517c\u5bb9\u6027\u8868\u683c\u3002", 
    "Revert": "\u8fd8\u539f", 
    "Sample CSS Content": "\u793a\u4f8b\u7684 CSS \u5185\u5bb9", 
    "Sample Finder": "\u793a\u4f8b\u67e5\u627e\u5668", 
    "Sample HTML Content": "\u793a\u4f8b\u7684 HTML \u5185\u5bb9", 
    "Sample JavaScript Content": "\u793a\u4f8b\u7684 JavaScript \u5185\u5bb9", 
    "Save Draft": "\u4fdd\u5b58\u8349\u7a3f", 
    "Search Stack Overflow": "\u641c\u7d22 Stack Overflow", 
    "Sections in Document": "\u6587\u6863\u4e2d\u7684\u7ae0\u8282", 
    "Select a section": "\u9009\u62e9\u4e00\u4e2a\u7ae0\u8282", 
    "Select an attachment": "\u9009\u62e9\u4e00\u4e2a\u9644\u4ef6", 
    "Selected: ": "\u5df2\u9009\u62e9\uff1a", 
    "Show old table.": "\u663e\u793a\u65e7\u5f0f\u8868\u683c\u3002", 
    "Something else": "\u5176\u4ed6", 
    "Submitted as %(submission_type)s": "\u5df2\u63d0\u4ea4\u4e3a %(submission_type)s", 
    "Submitting...": "\u6b63\u5728\u63d0\u4ea4...", 
    "Syntax Highlighter": "\u8bed\u6cd5\u9ad8\u4eae\u5668", 
    "Take the survey": "\u53c2\u4e0e\u8c03\u67e5", 
    "Thanks for your feedback!": "\u611f\u8c22\u60a8\u7684\u53cd\u9988\uff01", 
    "Thanks! We'll fix it.": "\u8c22\u8c22\u60a8\uff01\u6211\u4eec\u4f1a\u5c3d\u529b\u6539\u8fdb\u3002", 
    "The URL you've entered doesn't appear to be valid": "\u60a8\u8f93\u5165\u7684\u7f51\u5740\u770b\u4e0a\u53bb\u65e0\u6548", 
    "Translate it into my language": "\u7ffb\u8bd1\u5b83\u5230\u6211\u7684\u8bed\u8a00", 
    "URL": "URL", 
    "Uh oh. What would make it better?": "\u90a3\u771f\u9057\u61be\u3002\u6211\u4eec\u8be5\u600e\u6837\u505a\u5f97\u66f4\u597d\u5462\uff1f", 
    "Updated filters.": "\u8fc7\u6ee4\u5668\u5df2\u66f4\u65b0\u3002", 
    "View Page": "\u67e5\u770b\u9875\u9762", 
    "We won't bug you again.": "\u6211\u4eec\u4e0d\u4f1a\u518d\u6253\u6270\u60a8\u3002", 
    "What should the sample title be?": "\u793a\u4f8b\u6807\u9898\u5e94\u8be5\u662f\uff1f", 
    "Yes": "\u662f\u7684", 
    "You have a draft from:": "\u60a8\u6709\u4e00\u4e2a\u8349\u7a3f\uff1a", 
    "You must input a valid YouTube video URL.": "\u60a8\u5fc5\u987b\u8f93\u5165\u4e00\u4e2a\u6709\u6548\u7684 YouTube \u89c6\u9891\u7f51\u5740\u3002", 
    "Your browser does not support MathML. A CSS fallback has been used instead.": "\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 MathML\u3002\u5df2\u4f7f\u7528\u540e\u5907\u7684 CSS \u4ee3\u66ff\u3002", 
    "an unknown date": "\u672a\u77e5\u65e5\u671f", 
    "autosaved": "\u81ea\u52a8\u4fdd\u5b58", 
    "discarded": "\u653e\u5f03", 
    "published": "\u5df2\u53d1\u5e03", 
    "restored": "\u5df2\u6062\u590d", 
    "saved": "\u5df2\u4fdd\u5b58"
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
    "DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i", 
    "DATETIME_INPUT_FORMATS": [
      "%Y/%m/%d %H:%M", 
      "%Y-%m-%d %H:%M", 
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M", 
      "%Y/%m/%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y\u5e74%n\u6708%j\u65e5 %H:%M:%S", 
      "%Y/%m/%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y\u5e74%n\u6708%j\u65e5 %H:%n:%S.%f", 
      "%Y-%m-%d"
    ], 
    "DATE_FORMAT": "Y\u5e74n\u6708j\u65e5", 
    "DATE_INPUT_FORMATS": [
      "%Y/%m/%d", 
      "%Y-%m-%d", 
      "%Y\u5e74%n\u6708%j\u65e5"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "1", 
    "MONTH_DAY_FORMAT": "m\u6708j\u65e5", 
    "NUMBER_GROUPING": "4", 
    "SHORT_DATETIME_FORMAT": "Y\u5e74n\u6708j\u65e5 H:i", 
    "SHORT_DATE_FORMAT": "Y\u5e74n\u6708j\u65e5", 
    "THOUSAND_SEPARATOR": "", 
    "TIME_FORMAT": "H:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M", 
      "%H:%M:%S", 
      "%H:%M:%S.%f"
    ], 
    "YEAR_MONTH_FORMAT": "Y\u5e74n\u6708"
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

