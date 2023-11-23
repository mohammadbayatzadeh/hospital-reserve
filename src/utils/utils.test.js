import { creators } from "./functions";
import { utils } from "./helper";

import { HospitalData } from "./randomHospitalData";

describe("test utils function", () => {
  test("isEmpty work", () => {
    const testCase1 = "";
    const testCase2 = "      ";
    const testCase3 = "test";
    expect(utils.isEmpty(testCase1)).toBeTruthy();
    expect(utils.isEmpty(testCase2)).toBeTruthy();
    expect(utils.isEmpty(testCase3)).toBeFalsy();
  });

  test("counting the number of rooms", () => {
    const hospital = HospitalData[0];
    expect(creators.roomsCounter(hospital)).not.toBeNaN();
  });

  test("counting the number of beds", () => {
    const hospital = HospitalData[0];
    expect(creators.bedsDetails(hospital)).not.toBeNaN();
  });
});
