import { input } from "../interfaces/inputs";

export function criaInput(text: string, valueProp?: string): input {
  const value = valueProp || text.toLowerCase().replaceAll(' ', '_');
  return { text, value };
}