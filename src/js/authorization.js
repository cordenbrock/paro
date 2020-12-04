export function userHasValidSpotifyToken() {
  const token = localStorage.getItem('spotifyAuthToken');
  const tokenExpirationTimestamp = localStorage.getItem('spotifyAuthTokenExpiration');
  const nowTimestamp = Date.now() / 1000;
  const isTokenValid = tokenExpirationTimestamp && (tokenExpirationTimestamp >= nowTimestamp);

  console.log({
    'token': token,
    'tokenExpirationTimestamp': tokenExpirationTimestamp,
    'currentTimestamp': nowTimestamp,
    'isTokenValid': isTokenValid,
  });

  return (token && isTokenValid);
}

export function redirectToSpotifyOAuth() {
  const client_id = '56346d067885461f91b9a4b099c49290';
  const redirect_uri = 'https://paro-for-president.herokuapp.com';
  const scope = 'user-read-email user-read-private';

  let url = 'https://accounts.spotify.com/authorize';
  url += '?client_id=' + encodeURIComponent(client_id);
  url += '&response_type=token';
  url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
  url += '&scope=' + encodeURIComponent(scope);
  window.location = url;
}
