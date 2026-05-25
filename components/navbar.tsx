import styles from './globals.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">M.S.</div>
      <div className="navLinks">
        <a href="#about">Interests</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}