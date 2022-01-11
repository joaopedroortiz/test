import axios from 'axios';

const auth = axios.create({
  baseURL: 'https://api.github.com/users/',
  headers: {
    Accept: 'application/vnd.github.v3.raw',
    Authorization: `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`,
  },
});

export default auth;
