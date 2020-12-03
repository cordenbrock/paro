// let accessToken;
// let refreshToken;

// const client_id = '56346d067885461f91b9a4b099c49290';
// const redirect_uri = 'http://localhost:8888/callback';

export default class Spotify {



  static searchSpotify(keyword) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer BQChmzuXSw8geQrrUuaFDO7-QSTtMtQ08bhLOMBva6TsHvgRLeZhGNu9_KvpkKlPLQkYYDclNwOZ8uSbGI33lJZXPNXwQkPVgLJWXP7NUNyka2TzlQ7ureWSmka3TBv7JNN9Bs9syXsencUcAgbTyA0Ei0qFqgVH`);
    myHeaders.append("Cookie", "_ga=GA1.2.456045822.1606765238; _gid=GA1.2.637614845.1606765238; sp_dc=AQB5RMpfdYpkmkJlRHPeYxSSfyTRPpkKySEvxhbkmixFgyFT0ZOlFeh5KY4xSVAXFpCp276qTTx4nbxD11fqn-6DnKhR9PuJ6yLMzkXUPg; sp_key=66b31764-29a3-4c2f-92c8-38ed42c7b352; _gat=1");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    let type = "album,track";
    let limit = 50;
    return fetch(`https://api.spotify.com/v1/search?q=${keyword}&type=${type}&limit=${limit}`, requestOptions)
      .then ((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        // use refresh token to get access token
        console.log(error);
      });
  }
}
