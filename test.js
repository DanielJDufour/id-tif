const test = require("ava");
const fs = require("fs");
const idTIF = require("./index");

test("identifying tif url", (t) => {
  const url = "https://example.org/flower.tiff";
  t.true(idTIF(url));
});

test("identifying tif file", (t) => {
  const buffer = fs.readFileSync("./data/flower.tif");
  const arrayBuffer = buffer.buffer;
  t.true(idTIF(buffer));
  t.true(idTIF(arrayBuffer));
  t.true(idTIF(new Uint8Array(arrayBuffer)));
  t.true(idTIF(new DataView(arrayBuffer)));
});

test("identifying jpg file as not TIF", (t) => {
  const buffer = fs.readFileSync("./data/flower.jpg");
  const arrayBuffer = buffer.buffer;
  t.false(idTIF(buffer));
  t.false(idTIF(arrayBuffer));
  t.false(idTIF(new Uint8Array(arrayBuffer)));
  t.false(idTIF(new DataView(arrayBuffer)));
});
