/* exported app */

var app = app || {};

app.spreadsheet = {

  id: '<%= spreadsheetId %>',

  // Optional Bertha settings
  options: {
    preset: '', // 'profiles', 'timelines'
    method: '', // 'long', 'short' or 'view'
    // host: '', // to point to a different Bertha server
    // plugin: '', // 'ig' or 'gss',
    // sheets: [], // an array of custom sheets
  }

};