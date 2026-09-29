import { describe, it, expect } from "vitest";
import { renderCartLine } from "../src/cart.js";
import { renderInvoiceTotal } from "../src/invoice.js";
import { renderReceiptLine } from "../src/receipt.js";

describe("existing USD rendering", () => {
  it("renders a cart line", () => {
    expect(renderCartLine({ cents: 1234 })).toBe("Line total: $12.34");
  });
  it("renders an invoice total", () => {
    expect(renderInvoiceTotal({ cents: 500 })).toBe("Total due: $5.00");
  });
  it("renders a receipt line", () => {
    expect(renderReceiptLine({ cents: 999 })).toBe("Paid: $9.99");
  });
});
