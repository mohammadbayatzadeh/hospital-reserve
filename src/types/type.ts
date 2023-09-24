export type Bed = {
  bed_number: String;
  vip: Boolean;
  reserved: Boolean;
  building: String;
  floor: String;
  room: String;
};
export type Room = {
  number: String;
  beds: Array<Bed>;
};

export type Floor = {
  number: String;
  rooms: Array<Room>;
};

export type Building = {
  number: String;
  floors: Array<Floor>;
};

export type Hospital = {
  name: String;
  buildings: Array<Building>;
  beds_count: Number;
  // beds: Array<Bed>;
};
