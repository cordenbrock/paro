// let accessToken;
// let refreshToken;

// const client_id = '56346d067885461f91b9a4b099c49290';
// const redirect_uri = 'http://localhost:8888/callback';

export default class Spotify {

  // static login() {
  //   console.log(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`);
  //   return fetch(`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`, 
  //   {
  //     // mode: "no-cors",
  //     headers: {"Access-Control-Allow-Origin": '*'}
  //   })
  //   // .then(response => {
  //   //   console.log(response);
  //   // })
  // }

  static searchSpotify(keyword) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer BQBnp23h0K44CcPerK_hKXgyJhdjxp7IolB92RCtZpyLjM0FSE-yv1YXUI_rgket4TbR_fOS_joHQjAYpbw3O-JLC8Gcs6tyvJ4oVigcflAtwJI-FlyQH4T98vXqsEdCEVboZlsRkK0cer9gG5ve-IiQd169_KBE`);
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
