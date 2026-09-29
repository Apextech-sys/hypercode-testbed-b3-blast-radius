import { formatPrice } from "./pricing.js";

export interface InvoiceTotal {
  cents: number;
}

export function renderInvoiceTotal(total: InvoiceTotal): string {
  return `Total due: ${formatPrice(total.cents)}`;
}
