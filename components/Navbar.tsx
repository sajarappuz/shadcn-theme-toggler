import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import { ModeToggle } from "./ToggleMode"


const Navbar = () => {
  return (
    <header className="sm:flex sm:justify-between py-4 px-3 border-b-2">
        <div>
          <h1 className="text-3xl font-mono pl-10">STOREwiz</h1>
        </div>
        <nav className="">
           <ul className="flex gap-5 font-mono mt-2 text-xl">
            <li>About</li>
            <li>Services</li>
            </ul> 
        </nav>
        <div className="mr-5 flex gap-4">
           <Button variant="ghost">
            <ShoppingCart/>
            </Button> 
            <ModeToggle/> 
        </div>
        </header>
  )
}

export default Navbar