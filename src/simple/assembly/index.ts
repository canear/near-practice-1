//context|storage also exported as Context|Storage
import { Context, Storage } from "near-sdk-as"

export function helloWorld(): string{
  return `Hello, ${Context.predecessor}`;
}