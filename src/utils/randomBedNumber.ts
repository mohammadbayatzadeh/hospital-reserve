const randomBedNumber = (): {
  bed_number: String;
  vip: Boolean;
  reserved: Boolean;
} => {
  const randNum: Number = Math.floor(Math.random() * 800) + 100;
  const randChar: String = Math.random() > 0.5 ? "A" : "B";
  const vip: Boolean = Math.random() > 0 ? true : false;
  const reserved: Boolean = Math.random() > 0 ? true : false;
  return {
    bed_number: `${randChar}${randNum}`,
    vip,
    reserved,
  };
};

export { randomBedNumber };
