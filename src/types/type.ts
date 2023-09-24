export type Bed = {
  bed_number: String;
  vip: Boolean;
  reserved: Boolean;
  building: Number;
  floor: Number;
  room: Number;
};

export type Hospital = {
  name: String;
  buildings: Number;
  floors: Number;
  rooms: Number;
  beds: Number;
};
