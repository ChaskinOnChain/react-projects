import Link from "./components/Link";

function App() {
  return (
    <div className="h-screen w-screen bg-slate-100 relative">
      <nav className="fixed h-20 w-full top-0 left-0 bg-white shadow flex justify-between items-center px-8">
        <img className="cover" src="images/logo.svg" alt="logo" />
        <div>
          <Link name={"Home"} />
          <Link name={"About"} />
          <Link name={"Project"} />
          <Link name={"Contact"} />
          <Link name={"Profile"} />
        </div>
        <div>hi</div>
      </nav>
    </div>
  );
}

export default App;
