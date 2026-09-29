import { formatPrice, type Currency } from "./pricing.js";

export interface CartLine {
  cents: number;
  currency?: Currency;
}

export function renderCartLine(line: CartLine): string {
  return `Line total: ${formatPrice(line.cents, line.currency)}`;
}
