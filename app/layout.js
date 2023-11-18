import './globals.css';

export const metadata = {
  title: 'Simple Todo',
  description: 'NEXT APP',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
