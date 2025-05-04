function checkDigit(document: string, factor: number) {
  let total = 0;

  for (let i = 0; i < factor - 1; i++) {
    total += parseInt(document[i]) * (factor - i);
  }

  const remainder = total % 11;

  return remainder < 2 ? 0 : 11 - remainder;
}

export function isValidCpf(value: string) {
  const document = value.replace(/\D/g, "");

  if (/^(\d)\1+$/.test(document)) return false;

  const digit1 = checkDigit(document, 10);
  const digit2 = checkDigit(document, 11);

  return digit1 === parseInt(document[9]) && digit2 === parseInt(document[10]);
}
