export type Bed = {
  bed_number: String;
  ready: Boolean;
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
  building: String;
  rooms: Array<Room>;
};

export type Building = {
  number: String;
  floors: Array<Floor>;
};

export type Hospital = {
  name: String;
  buildings: Array<Building>;
  beds_count: Array<Bed>;
};
