var aladin = A.aladin('#aladin-lite-div', {survey: 'P/DSS2/red', target: 'M1', fov: 0.3});
var cat = A.catalogFromURL('https://cdsxmatch.u-strasbg.fr/QueryCat/QueryCat?catName=SIMBAD&mode=cone&pos=M1&r=50arcmin&format=votable&limit=3000', {sourceSize:12, color: '#cc99bb', displayLabel: true, labelColumn: 'main_id', labelColor: '#ae4', labelFont: '9px sans-serif'});
aladin.addCatalog(cat);