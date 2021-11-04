fetch('https://api.astrocats.space/SN2014J/redshift?item=0')
  .then(response => response.json())
  .then(data => console.log(data));




fetch('https://api.astrocats.space/SN2014J+SN2015F/photometry/time+magnitude+band?format=csv', {
  method: 'FETCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(Object),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});