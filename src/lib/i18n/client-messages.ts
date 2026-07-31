/** Namespaces required by client components — keeps hydration payload small */
const CLIENT_NAMESPACES = [
  "common",
  "nav",
  "forms",
  "portfolio",
] as const;

export function pickClientMessages(messages: Record<string, unknown>) {
  return Object.fromEntries(
    CLIENT_NAMESPACES.map((namespace) => [namespace, messages[namespace] ?? {}])
  );
}
