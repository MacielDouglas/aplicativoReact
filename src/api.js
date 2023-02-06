// Esse não é um componente
export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    url: API_URL + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Autorization: 'Bearer ' + token,
      },
    },
  };
}
