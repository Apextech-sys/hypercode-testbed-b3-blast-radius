// Shared money-formatting utility used across the checkout flow.
export type Currency = "USD" | "EUR";

const SYMBOLS: Record<Currency, string> = {
  USD: "$",
  EUR: "€",
};

export function formatPrice(cents: number, currency: Currency = "USD"): string {
  const amount = (cents / 100).toFixed(2);
  return `${SYMBOLS[currency]}${amount}`;
}
