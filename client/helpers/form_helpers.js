var generateField;

generateField = function(options) {
  options.hash.value = options.hash.value || this[options.hash.fname];
  options.hash.title = options.hash.title || options.hash.fname;
  options.hash.template = options.hash.template || "label_text";
  options.hash.placeholder = options.hash.placeholder || options.hash.title;
  options.hash.type = options.hash.type || 'text';
  return new Handlebars.SafeString(Template[options.hash.template](options.hash));
};

Handlebars.registerHelper("label_text", function(options) {
  options.hash.collection = options.hash.collection || 'generic';
  return generateField.call(this, options);
});

Handlebars.registerHelper("label_text_area", function(options) {
  options.hash.collection = options.hash.collection || 'generic';
  options.hash.template = "label_text_area";
  options.hash.rows = options.hash.rows || 3;
  options.hash.columns = options.hash.columns || 40;
  return generateField.call(this, options);
});

Handlebars.registerHelper("switch", function(options) {
  options.hash.template = "switch";
  options.hash.em = options.hash.em || 7;
  return generateField.call(this, options);
});
