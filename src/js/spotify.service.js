// let accessToken;
// let refreshToken;

// const client_id = '56346d067885461f91b9a4b099c49290';
// const redirect_uri = 'http://localhost:8888/callback';

export default class Spotify {



  static searchSpotify(keyword) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer BQAzHXS6Hc5AHnf6cCm6RtYlKCNE0RtpQci8jnUlEalJNxJAB_jcwDGxekrRd0r5tzk_c3BWut5A70cL4MAJsl9yCj2ty4cM7fkRCmwZw2m59h3vf2Ryo8P9Ukkk2QCpwEabyrOtC9xmSc2QPPJlI-1esh1qIlzc`);
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
