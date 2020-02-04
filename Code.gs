function doGet(e) {
  return HtmlService.createTemplateFromFile('index.html').evaluate(); //createHtmlOutputFromFile('index.html')
}

var sheet = SpreadsheetApp.openById('1FFIm6rY_6a9z8Itl578MP3vTg1KKNBh1XNwc_JjJJ3Y').getSheetByName('Sheet1');

function submitToSpreadsheet(value){
  sheet.getRange(1, 1).setValue(value);
}
function retrieveFromSpreadsheet(){
  return sheet.getRange(1, 1).getValue();  
}
