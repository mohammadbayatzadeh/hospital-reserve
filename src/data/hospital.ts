import { Hospital } from "../types/type";
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
const HospitalData: Array<Hospital> = hospitalNames.map((name) => {
  return {
    name,
    buildings: Math.floor(Math.random() * 5) + 1,
  };
});
