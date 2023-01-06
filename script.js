function generateURL(){
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;
    let url = 'https://localhost:8080/';
    if(name.length + year.length > 0) url += '?';
    if(name!='') url += 'name=' + name;
    if(year!=''){
      if(name!='') url += '&'
      url += 'year=' + year;
    }
    document.getElementById('url').innerHTML = url;
  }
  document.getElementById('button').addEventListener('click', generateURL);