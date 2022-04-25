export function helloWorld(names: Array<string>): string {
  //template literals use backticks ``
  return names.map<string>(name => `Hello, ${name}.`).join(' ')
}