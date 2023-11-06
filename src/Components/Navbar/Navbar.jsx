

const Navbar = () => {
  return (
    <div className="flex justify-around bg-slate-900 w-full p-4  fixed top-0">
      {/* <h1 className="text-5xl font-bold text-center m-5 ">Course Registration</h1> */}
      <div className="text-4xl text-white font-bold"><a href="">Course!</a></div>
      <div className="text-white hidden lg:flex">
        <ul className="list-none flex text-xl">
          <li><a className="m-5" href="">Home</a></li>
          <li><a className="m-5" href="">Course</a></li>
          <li><a className="m-5" href="">Services</a></li>
          <li><a className="m-5" href="">About</a></li>
          <li><a className="m-5" href="">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;