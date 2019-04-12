import * as interfaces from "ts-interfaces-publish-test";

let x: interfaces.MyTestInterface = {
  foo: "test string",
  bar: 42,
  baz: []
};

console.log("Our object:");
console.log(x);
