'use client';

export default function GlobalError({
  error,
  reset,
}: {
  readonly error: Error & { digest?: string };
  readonly reset: () => void;
}) {
  return (
    <html lang='en'>
      <body>
        <h2>Something went wrong! Name: {error.name}</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
