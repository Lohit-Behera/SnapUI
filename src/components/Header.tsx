import { ModeToggle } from "@/components/ModeToggle";

function Header() {
  return (
    <header className="z-20 w-full sticky top-0 p-2 backdrop-blur bg-background/50">
      <nav className="hidden md:flex justify-between space-x-2">
        <div className="w-full flex justify-between">
          <h1>Snap UI</h1>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}

export default Header;
