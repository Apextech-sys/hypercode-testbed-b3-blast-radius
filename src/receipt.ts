import { formatPrice } from "./pricing.js";

export interface ReceiptLine {
  cents: number;
}

export function renderReceiptLine(line: ReceiptLine): string {
  return `Paid: ${formatPrice(line.cents)}`;
}
