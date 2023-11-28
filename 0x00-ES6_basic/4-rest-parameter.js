/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function returnHowManyArguments(...args) {
  let total = 0;
  for (const x of args) {
    total += 1;
  }
  return total;
}
