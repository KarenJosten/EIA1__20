//Werte von 2008 
var europa08: number = 4965.7;
var afrika08: number = 1028;
var norda08: number = 6600.4;
var southa08: number = 1132.6;
var asia08: number = 12954.7;
var aus08: number = 1993;

//Werte von 2018
var europa18: number = 4209.3;
var afrika18: number = 1235.5;
var norda18: number = 6035.6;
var southa18: number = 1261.5;
var asia18: number = 16274.1;
var aus18: number = 2100.5;

//Gesamtemission der Welt 

var emissiongesamt: number = europa18 + afrika18 + norda18 + southa18 + asia18 + aus18;

//Relativ dazu

var europaRe: number = (europa18 / emissiongesamt) * 100;
var afrikaRe: number = (afrika18 / emissiongesamt) * 100;
var nordaRe: number = (norda18 / emissiongesamt) * 100;
var southaRe: number = (southa18 / emissiongesamt) * 100;
var asiaRe: number = (asia18 / emissiongesamt) * 100;
var ausRe: number = (aus18 / emissiongesamt) * 100;

//2008 Vergleich zu 2018 in %

var europaVer: number = ((europa18 - europa08) / europa08) * 100;
var afrikaVer: number = ((afrika18 - afrika08) / afrika08) * 100;
var nordaVer: number = ((norda18 - norda08) / norda08) * 100;
var southaVer: number = ((southa18 - southa08) / southa08) * 100;
var asiaVer: number = ((asia18 - asia08) / asia08) * 100;
var ausVer: number = ((aus18 - aus08) / aus08) * 100;

//Vergleich in kg

var europaVerkg: number = europa18 - europa08; 
var afrikaVerkg: number = afrika18 - afrika08;
var nordaVerkg: number = norda18 - norda08;
var southaVerkg: number = southa18 - southa08;
var asiaVerkg: number = asia18 - asia08;
var ausVerkg: number = aus18 - aus08;

//Emission Europa
console.group("Emission in Europa");
console.log("Die Emission von Europa ist: " + europa18 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + europaRe + " %. ");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + europaVer + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + europaVerkg + " kg CO2.");
console.groupEnd();

//Emission Afrika
console.group("Emission in Afrika");
console.log("Die Emission von Afrika ist: " + afrika18 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + afrikaRe + " %. ");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afrikaVer + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + afrikaVerkg + " kg CO2.");
console.groupEnd();

//Emission Nordamerika
console.group("Emission in Nordamerika");
console.log("Die Emission von Nordamerika ist: " + norda18 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + nordaRe + " %. ");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + nordaVer + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + nordaVerkg + " kg CO2.");
console.groupEnd();

//Emission Südamerika
console.group("Emission in Südamerika");
console.log("Die Emission von Südamerika ist: " + southa18 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + southaRe + " %. ");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + southaVer + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + southaVerkg + " kg CO2.");
console.groupEnd();

//Emission Asien
console.group("Emission in Asien");
console.log("Die Emission von Asien ist: " + asia18 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + asiaRe + " %. ");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiaVer + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + asiaVerkg + " kg CO2.");
console.groupEnd();

//Emission Australien
console.group("Emission in Australien");
console.log("Die Emission von Australien ist: " + aus18 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + ausRe + " %. ");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + ausVer + " % verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + ausVerkg + " kg CO2.");
console.groupEnd();

