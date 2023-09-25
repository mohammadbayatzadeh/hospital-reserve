const bedNumber = (
  building: String,
  floor: number,
  room: number,
  bed: number
): {
  bed_number: String;
  vip: Boolean;
  reserved: Boolean;
  ready: Boolean;
} => {
  const vip: Boolean = Math.random() > 0.5 ? true : false;
  const reserved: Boolean = Math.random() > 0.5 ? true : false;
  const ready: Boolean = Math.random() > 0.5 ? true : false;
  return {
    bed_number: `${building}${floor + 1}${room + 1}${bed + 1}`,
    vip,
    reserved,
    ready,
  };
};

export { bedNumber };
