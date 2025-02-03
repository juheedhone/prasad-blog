const NavBar = () => {
  return (
    <div className="flex justify-between fixed top-0 right-0 left-0 p-4 bg-white z-10 border-b-2">
      <div className="flex items-center gap-2">
        <img src="navLogo.png" alt="logo" className="w-10 h-10" />
        <h1 className="font-bold text-xl">Marketing Prasad</h1>
      </div>

      <div>
        <img src="chamburger.png" alt="filter" />
      </div>
    </div>
  );
};

export default NavBar;
