import { formatPrice, type Currency } from "./pricing.js";

export interface ReceiptLine {
  cents: number;
  currency?: Currency;
}

export function renderReceiptLine(line: ReceiptLine): string {
  return `Paid: ${formatPrice(line.cents, line.currency)}`;
}
