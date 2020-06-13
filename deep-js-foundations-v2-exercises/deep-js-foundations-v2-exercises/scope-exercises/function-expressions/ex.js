function getStudentById(id) {
  return studentRecords.find(function matchId(record) {
    return record.id == id;
  });
}

function printRecords(recordIds) {
  var records = recordIds.map(getStudentById);

  records.sort(function sortByNameAsc(a, b) {
    if (a.name < b.name) return -1;
    if (b.name < a.name) return 1;
    else return 0;
  });

  records.forEach(function printEachRecord(elem) {
    var isPaid = "Paid";
    if (!elem.paid) isPaid = "Not Paid";
    console.log(`${elem.name} (${elem.id}) : ${isPaid}`);
  });
}

function paidStudentsToEnroll() {
  var studentsPaid = studentRecords.filter(function (element) {
    return element.paid && !currentEnrollment.includes(element.id);
  });

  var studentsPaidIds = studentsPaid.map(function returnIds(record) {
    return record.id;
  });

  return [...studentsPaidIds, ...currentEnrollment];
}

function remindUnpaid(recordIds) {
  var recordIdsUnpaid = recordIds.filter(function notYetPaid(recordId) {
    var record = getStudentById(recordId);
    return !record.paid;
  });
  printRecords(recordIdsUnpaid);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
