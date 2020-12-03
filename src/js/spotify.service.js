// let accessToken;
// let refreshToken;

// const client_id = '56346d067885461f91b9a4b099c49290';
// const redirect_uri = 'http://localhost:8888/callback';

export default class Spotify {



  static searchSpotify(keyword) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer BQCD0EcQOvE3Z_Pu3-aZn_7J6Wrq_m_4Ocppcj9bTBaZXlalYW2JsNO1YF1Vd5x_SkZx_HaFotnq6EfKiwCO5DzOIqQOh_b_IT1jMaC-bCH10nwlCzpXu5qRRCN-sIQmhhem_UO0MhefhdTqTP-LZTLttxeofP8N`);
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
