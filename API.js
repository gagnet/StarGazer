fetch('https://api.astrocats.space/SN2014J/redshift')
  .then(response => response.json())
  .then(data => console.log(data));

  fetch('https://api.astrocats.space/catalog?ra=21:23:32.16&dec=-53:01:36.08&radius=2')
  .then(response => response.json())
  .then(data => console.log(data));

  fetch('https://api.astrocats.space/catalog/lumdist+claimedtype?lumdist&claimedtype=ia&format=tsv')
  .then(response => response.json())
  .then(data => console.log(data));

  fetch('https://api.astrocats.space/SN2014J/redshift?first')
  .then(response => response.json())
  .then(data => console.log(data));

  // heroku database 1 password dont use for us, solo account password 
  // 