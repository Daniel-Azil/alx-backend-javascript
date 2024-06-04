export default function iterateThroughObject(reportWithIterator) {
  let listEmployees = '';

  for (const [key, val] of reportWithIterator.entries()) {
    if (key !== reportWithIterator.length - 1) {
      listEmployees += `${val} | `;
    } else {
      listEmployees += val;
    }
  }

  return listEmployees;
}
