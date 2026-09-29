import { formatPrice, type Currency } from "./pricing.js";

export interface InvoiceTotal {
  cents: number;
  currency?: Currency;
}

export function renderInvoiceTotal(total: InvoiceTotal): string {
  return `Total due: ${formatPrice(total.cents, total.currency)}`;
}
