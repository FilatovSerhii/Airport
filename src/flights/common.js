import moment from 'moment';

export const currentDay = moment(new Date()).format('DD-MM-Y');

export const getPathOption = path => (path ? path.slice(0, -1) : 'departure');

export const getTime = time => moment(time).format('H:mm');

function extractFlightsData(flight, pathType) {
  const { term, timeTakeofFact: status } = flight;
  const shedule = flight[pathType === 'departure' ? 'timeDepShedule' : 'timeArrShedule'];
  const city = flight[pathType === 'departure' ? 'airportToID.city' : 'airportFromID.city'];
  const { name: airportName, logoSmallName: logo } = flight.airline.en;
  const { codeShare: flightCode } = flight.codeShareData[0];

  return {
    term,
    shedule: getTime(shedule),
    city,
    status: getTime(status),
    logo,
    airportName,
    flightCode,
  };
}

export function compareTime(a, b) {
  const [hourA, minsA] = a.split(':');
  const [hourB, minsB] = b.split(':');
  const comparedHours = hourA - hourB;
  return comparedHours || minsA - minsB;
}

const compareSearch = (city, flightCode, search) =>
  city.toLowerCase().includes(search.toLowerCase()) ||
  flightCode.toLowerCase().includes(search.toLowerCase());

export function convertDataBody(flights, pathType, search) {
  const flightsToday = flights[pathType]
    .filter(({ actual }) => actual && moment(actual).format('DD-MM-Y') === currentDay)
    .map(flight => extractFlightsData(flight, pathType))
    .sort((a, b) => compareTime(a.shedule, b.shedule));

  return !search
    ? flightsToday
    : flightsToday.filter(({ city, flightCode }) => compareSearch(city, flightCode, search));
}
