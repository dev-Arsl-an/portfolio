import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = ["home", "about", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // close mobile menu on resize > mobile breakpoint
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768 && open) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="navbar">
      <div className="nav-inner">
        <div className="brand" onClick={() => scrollToSection("home")}>
          ARSLAN LATIF
        </div>

        {/* Desktop links */}
        <nav className="nav-links">
          {NAV_ITEMS.map((item) => (
            <button
              key={item}
              className="nav-link"
              onClick={() => scrollToSection(item)}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </nav>

    
        <button
          className="menu-icon"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown: spans full width under the nav and centered */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            className="mobile-link"
            onClick={() => scrollToSection(item)}
          >
            {item[0].toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </header>
  );
}
