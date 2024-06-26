function Header() {
  return (
    <nav className="blue darken-1">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://github.com/DmitriyMiroshnychenko/shop-project"
              target="_blank"
              rel="noreferer"
            >
              Nice
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
