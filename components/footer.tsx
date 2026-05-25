import styles from './globals.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Kripa Mirchandani. Built cleanly using Next.js & Native CSS.</p>
    </footer>
  );
}