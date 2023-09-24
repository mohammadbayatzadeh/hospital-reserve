import { Bed, Building } from "./../types/type";
import { Hospital } from "../types/type";

import { randomBedNumber } from "../utils/randomBedNumber";

const hospitalNames: Array<String> = [
  "امام خمینی",
  "مهر",
  "رازی",
  "گلستان",
  "شفا",
  "شرکت نفت",
  "بقا",
  "مرکز",
];
const numbers = [
  "یک",
  "دو",
  "سه",
  "چهار",
  "پنج",
  "شش",
  "هفت",
  "هشت",
  "نه",
  "ده",
];

const HospitalData: Array<Hospital> = hospitalNames.map((name) => {
  const buildings_count = Math.floor(Math.random() * 5) + 1;

  const buildings = [];

  for (let b = 0; b < buildings_count; b++) {
    const data: Building = { number: numbers[b], floors: [] };
    for (let f = 0; f < Math.floor(Math.random() * 5) + 1; f++) {
      data.floors[f] = { number: numbers[f], rooms: [] };
      for (let r = 0; r < Math.floor(Math.random() * 9) + 1; r++) {
        data.floors[f].rooms[r] = { number: numbers[r], beds: [] };
        for (let be=0; be < Math.floor(Math.random() * 3) + 1; be++) {
          const bedData = randomBedNumber();
          const bed: Bed = {
            ...bedData,
            building: numbers[b],
            floor: numbers[f],
            room: numbers[r],
          };
          data.floors[f].rooms[r].beds[be] = bed;
        }
      }
    }
    buildings[b] = data;
  }

  return {
    name,
    buildings: buildings,
    beds_count: Math.floor(Math.random() * 200) + 100,
    //   beds:
  };
});

export { HospitalData };
