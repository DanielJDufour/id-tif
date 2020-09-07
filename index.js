const getByte = require("get-byte");

module.exports = function (data, debug) {
  if (debug) console.log("data:", data);

  const length =
    data.length !== undefined
      ? data.length
      : data.byteLength !== undefined
      ? data.byteLength
      : null;
  if (debug) console.log("length:", length);

  if (typeof data === "string") {
    return (
      (length > 4 && data.toLowerCase().endsWith(".tif")) ||
      data.toLowerCase().endsWith(".tiff")
    );
  } else {
    if (length < 4) {
      return false;
    }

    return (
      (getByte(data, 0) === 73 &&
        getByte(data, 1) === 73 &&
        getByte(data, 2) === 42 &&
        getByte(data, 3) === 0) ||
      (getByte(data, 0) === 77 &&
        getByte(data, 1) === 77 &&
        getByte(data, 2) === 0 &&
        getByte(data, 3) === 42)
    );
  }
};
