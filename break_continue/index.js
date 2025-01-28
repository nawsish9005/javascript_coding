/*for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    document.write("Breaking at: " + i);
    break; // Exit the loop when i is 5
  }
  console.log(i);
}
*/

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    document.write("Skipping: " + i);
    continue; // Skip the rest of this iteration
  }
  console.log(i);
}
