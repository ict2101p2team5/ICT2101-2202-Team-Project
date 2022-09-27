import Link from 'next/link'


const NavBar: React.FC = () => {
  return (
    <nav className="container flex flex-row justify-between p-3">
      <a className="font-bold uppercase">chopejobs</a>
        <ul className="flex flex-row"><Link href='/'><a>Home</a></Link></ul>
        <ul className="flex flex-row"><Link href='/'><a>About</a></Link></ul>
        <ul className="flex flex-row"><Link href='/staff'><a>Availability</a></Link></ul>
    </nav>
  );
};

export default NavBar;
