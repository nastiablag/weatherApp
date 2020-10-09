## To start server

To start server type ``` node .\server.js ```

## Usage

1. Use `GET` method 

2. Use url http://localhost:8045/city?name={letters}

3. Get JSON format return with city name, longitude and latitude.

## Example

If you fetch url 

```sh
http://localhost:8045/city?name=Vilnius
```

You will get

```json
[
  {
    "name": "Vilnius",
    "lon": 25.2798,
    "lat": 54.689159
  }
]
```