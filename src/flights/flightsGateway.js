import { currentDay } from './common';

const baseUrl = `https://api.iev.aero/api/flights/${currentDay}`;

export const fetchFlights = () => fetch(baseUrl).then(response => response.json());
