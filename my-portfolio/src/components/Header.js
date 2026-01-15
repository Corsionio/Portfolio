import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Corso Montuori</h1>
      <nav className="nav-links">
        <Link to="/">Home</Link> |{' '}
        <Link to="/learning">Currently Learning</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
