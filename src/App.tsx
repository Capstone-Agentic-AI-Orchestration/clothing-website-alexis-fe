export interface AppProps {
  title?: string;
}

export function App({ title = 'clothing-website-alexis-fe' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}
