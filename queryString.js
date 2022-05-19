
const keyValueToString = ([key, value]) => {
  if (typeof value === "object" && !Array.isArray(value)) {
    throw new Error("Check your params");
  }

  return `${key}=${value}`;


}

export function queryString(obj) {
  return Object.entries(obj).map(keyValueToString).join("&");
}

export function parse(qs) {
  return Object.fromEntries(qs.split("&").map(e => {
    let [key, value] = e.split("=");

    if (value.includes(",")) {
      value = value.split(",");
    }
    return [key, value];
  }));
}