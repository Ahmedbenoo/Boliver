export default function Loading() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-0.5 overflow-hidden bg-border"
    >
      <div className="loading-bar h-full w-1/3 bg-accent" />
    </div>
  );
}
