var num = 3.14;
var someStr = "and that's all";

var str = loopValue`la${num}${someStr}${num}${num}${num}`;

function loopValue(strings, ...values) {
  console.log(`String length is ${strings.length}`);
  console.log(`Values length is ${values.length}`);
  console.log(strings);
  console.log(values);
}
