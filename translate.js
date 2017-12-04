/* jshint esversion: 6 */
var gettextParser = require('gettext-parser');

// naive translation from po file. read the entire file and return the first entry. every time ;)
const translate = (tag) => {
    var input = require('fs').readFileSync('./translations/da-DK.po');
    var po = gettextParser.po.parse(input, "UTF-8");
    var translation = po.translations[''][tag.toLowerCase()];
    if (translation) {
        return translation.msgstr[0];
    } else {
        return tag;
    }
};

//console.log(translate('Butter'));
//console.log(translate('Beer'));

