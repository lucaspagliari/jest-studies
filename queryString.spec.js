import { queryString, parse } from "./queryString";

describe("Object to query string", () => {
  it("should create a valid query string when object is provided", () => {
    const obj = { name: "Lucas", profession: "developer" };

    expect(queryString(obj)).toBe("name=Lucas&profession=developer");
  });

  it("should create a valid query string even when an array is provided", () => {
    const obj = { name: "Lucas", hobbies: ["games", "music"] };

    expect(queryString(obj)).toBe("name=Lucas&hobbies=games,music");
  });

  it("should throw an error when an object is passed ", () => {
    const obj = { name: "Lucas", hobbies: { first: "games", second: "music" } };

    expect(() => { queryString(obj) }).toThrowError();
  });

});

describe("Query string to object", () => {
  it("should convert a query string to an object", () => {
    const qs = "name=Lucas&profession=developer";

    expect(parse(qs)).toEqual({
      name: "Lucas",
      profession: "developer"
    });
  });

  it("should convert a query string with single value to an object", () => {
    const qs = "name=Lucas";

    expect(parse(qs)).toEqual({
      name: "Lucas"
    });

  });
  it("should convert a query string with comma separated values to an object", () => {
    const qs = "name=Lucas&hobbies=games,music";

    expect(parse(qs)).toEqual({
      name: "Lucas",
      hobbies: ["games", "music"]
    });

  });
})