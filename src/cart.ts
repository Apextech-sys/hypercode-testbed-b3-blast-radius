import { formatPrice } from "./pricing.js";

export interface CartLine {
  cents: number;
}

export function renderCartLine(line: CartLine): string {
  return `Line total: ${formatPrice(line.cents)}`;
}
