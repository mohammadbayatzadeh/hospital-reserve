import { Bed, Hospital } from "../types/type";

const roomsCounter = (hospital: Hospital): number => {
  let rooms: number = 0;
  hospital.buildings.forEach((build) => {
    build.floors.forEach((floor) => {
      rooms += floor.rooms.length;
    });
  });
  return rooms;
};

const bedsDetails = (hospital: Hospital): any => {
  const details: {
    count: number;
    ready: Array<Bed>;
    reserved: Array<Bed>;
    notReady: Array<Bed>;
  } = {
    count: 0,
    ready: [],
    notReady: [],
    reserved: [],
  };
  hospital.buildings.forEach((build) => {
    build.floors.forEach((floor) => {
      floor.rooms.forEach((room) => {
        room.beds.forEach((bed) => {
          details.count++;
          if (bed.reserved) {
            details.reserved.push(bed);
          } else if (!bed.ready) {
            details.notReady.push(bed);
          } else {
            details.ready.push(bed);
          }
        });
      });
    });
  });
  return details;
};

export { roomsCounter, bedsDetails };
