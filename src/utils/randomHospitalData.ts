import { alphabet, hospitalNames, numbers } from "../data/constants";
import { Bed, Building, Hospital } from "../types/type";
import { bedNumber } from "./createBedNumber";

const HospitalData: Array<Hospital> = hospitalNames.map((name) => {
  const buildings_count = Math.floor(Math.random() * 5) + 2;

  const buildings = [];
  let beds_count: Array<Bed> = [];

  for (let b = 0; b < buildings_count; b++) {
    const data: Building = { number: numbers[b], floors: [] };
    for (let f = 0; f < Math.floor(Math.random() * 5) + 2; f++) {
      data.floors[f] = {
        number: `طبقه ${numbers[f]} ساختمان ${numbers[b]}`,
        building: numbers[b],
        rooms: [],
      };
      for (let r = 0; r < Math.floor(Math.random() * 7) + 3; r++) {
        data.floors[f].rooms[r] = {
          number: numbers[r],
          beds: [],
        };
        for (let be = 0; be < Math.floor(Math.random() * 10) + 2; be++) {
          const bedData = bedNumber(alphabet[b], f, r, be);
          const bed: Bed = {
            ...bedData,
            building: numbers[b],
            floor: numbers[f],
            room: numbers[r],
          };
          beds_count.push(bed);
          data.floors[f].rooms[r].beds[be] = bed;
        }
      }
    }
    buildings[b] = data;
  }

  return {
    name,
    buildings: buildings,
    beds_count,
  };
});

export { HospitalData };
