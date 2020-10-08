const http = require('http');
const fs = require('fs');
const URL = require('url').URL;

http.createServer(function (request, response) {
  const { method, url } = request;
  
  // control for favicon
  if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();
    return;
  }

  let wholeUrl = new URL(url, 'http://localhost:8080/');
  
  if(method === 'GET' && wholeUrl.pathname === '/city'){
    let searchedName = wholeUrl.searchParams.get('name');

    const cityObject = function (name, lon, lat) {
      this._name = name;
      this._lon = lon;
      this._lat = lat;  
    }

    fs.readFile('city.list.json', (err, data) => {
      if (err) throw err;
      let cities = JSON.parse(data);
      let cityArray = [];

      cities.forEach(element => {
        let city = String(element.name).toUpperCase();
        if(city.startsWith(searchedName.toUpperCase())) {
          cityArray.push(new cityObject(element.name, element.coord.lon, element.coord.lat))
        }
      });

      response.writeHead(200, {'Content-Type': 'aplication/json'});
      response.write(JSON.stringify(cityArray));
      response.end();
    });
  
  }
}).listen(8080);