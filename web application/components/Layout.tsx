import NavBar from "./NavBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (layoutProps) => {
  return (
    <>
      <header className="container">
        <NavBar />
      </header>
      <main>{layoutProps.children}</main>
      <footer className="text-center m-5">
        <p>Made by P1T5.</p>
      </footer>
    </>
  );
};

export default Layout;
