import { utils } from "./helper";

describe("test utils function", () => {
  test("isEmpty work", () => {
    const testCase1 = "";
    const testCase2 = "      ";
    const testCase3 = "test";
    expect(utils.isEmpty(testCase1)).toBeTruthy();
    expect(utils.isEmpty(testCase2)).toBeTruthy();
    expect(utils.isEmpty(testCase3)).toBeFalsy();
  });
  test('to create a random hospital data ' ,()=>{
    expect()
  })
});
