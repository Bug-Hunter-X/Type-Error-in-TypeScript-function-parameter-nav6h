function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

// Iterate through the array to call the function with each string
for (const name of user) {
  console.log(greeter(name));
}
// Alternatively, if you want to handle multiple names differently, you can modify the function signature:
function greeterMultiple(people: string[]): string {
    return "Hello, " + people.join(', ');
}
console.log(greeterMultiple(user));