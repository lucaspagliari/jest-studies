
const keyValueToString = ([key, value]) => {
  if (typeof value === "object" && !Array.isArray(value)) {
    throw new Error("Check your params");
  }

  return `${key}=${value}`;


}

module.exports.queryString = (obj) =>
  Object.entries(obj).map(keyValueToString).join("&")

module.exports.parse = (qs) =>
  Object.fromEntries(qs.split("&").map(e => {
    let [key, value] = e.split("=");

    if (value.includes(",")) {
      value = value.split(",");
    }
    return [key, value];
  }));