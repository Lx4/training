function testVar() {
  try {
    var id = 2;
  } catch (err) {
    var id = 4;
  }
  return id;
}
