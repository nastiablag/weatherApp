const http = require('http');
const fs = require('fs');
const URL = require('url').URL;

const port = 8045;

http.createServer(function (request, response) {

  const { method, url } = request;

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'aplication/json'
    /** add other headers as per requirement */
  };

  let wholeUrl = new URL(url, `http://localhost:${port}/`);
  
  // control for favicon
  if (request.url === '/favicon.ico') {
    response.writeHead(200, {'Content-Type': 'image/x-icon'} );
    response.end();

    return;
  }

  if (request.method === 'OPTIONS') {
    response.writeHead(204, headers);
    response.end();

    return;
  }

  if(method === 'GET' && wholeUrl.pathname === '/city') {
   
    let searchedName = wholeUrl.searchParams.get('name');

    class cityObject {
      constructor(name, lon, lat) {
        this.name = name;
        this.lon = lon;
        this.lat = lat;
      }
    }

    fs.readFile('city.list.json', (err, data) => {

      if (err) throw err;

      let cities = JSON.parse(data);
      let cityArray = [];
      let i = 0;

      cities.some(element => {

        let city = String(element.name).toUpperCase();

        if(city.startsWith(searchedName.toUpperCase())) {
          cityArray.push(new cityObject(element.name, element.coord.lon, element.coord.lat));
          i++;
          
          return i > 30;
        }
      });

      response.writeHead(200, headers);
      response.write(JSON.stringify(cityArray));
      response.end();
    });
  } else {
    res.writeHead(405, headers);
    res.end();

    return;
  }
}).listen(port);