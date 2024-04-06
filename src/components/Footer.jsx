function Footer() {
  return (
    <footer className="page-footer blue lighten-4">
      <div className="footer-copyright">
        <div className="container">
          ⓒ{new Date().getFullYear()} Copyright Text by Dmytro Miroshnychenko
          <a className="grey-text text-lighten-4 right" href="#!">
            Nice
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
