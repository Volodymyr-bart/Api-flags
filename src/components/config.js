const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES =
  BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = name => BASE_URL + `name/` + name;
export const filterhByCode = codes =>
  BASE_URL + `alpha?code=` + codes.join(',');

// export const All_CONTRIES_INFO = BASE_URL + 'all';
