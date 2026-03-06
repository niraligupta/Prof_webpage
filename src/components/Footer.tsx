const Footer = () => {
  return (
    <footer className="py-6 bg-primary border-t border-primary-foreground/10">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Pramesh Kumar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
