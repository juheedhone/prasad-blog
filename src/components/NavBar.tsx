const NavBar = () => {
  return (
    <>
      <div className="flex justify-between max-w-full">
        <div className="flex items-center gap-2">
          <img src="navLogo.png" alt="logo" className="w-10 h-10" />
          <h1 className="font-bold text-xl">Marketing Prasad</h1>
        </div>

        <div>
          <img src="chamburger.png" alt="filter" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
