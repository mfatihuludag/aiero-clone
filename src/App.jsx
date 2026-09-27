import React, { useState, useEffect } from 'react'
import './App.css'
import Dropdown2 from './DropDown2'
import previewImg from './assets/dark-version.png'


function App() {
  const [isScrolled, setIsScrolled] = useState(false)
const [activeItem, setActiveItem] = useState("Home")
const menuItems = ["Home", "Pages", "Services", "Shop", "Blog", "Contacts"]
const dropdownLeft = [
  "Neural Networks",
  "AI Agency",
  "Chatbot",
  "Startup",
  "AI Consulting",
  "Futurism",
  "Hi-Tech",
  "Voiceover"
]

const dropdownRight = [
  "Science",
  "Creative Bureau",
  "Video Voiceover",
  "IT Services",
  "AI Devices",
  "AI Solutions",
  "Image Generator",
  "Content Generator",
  "Intro"
]
const pagesItems = ["About us", "Team", "Projects", "Gallery Grid", "Gallery Masonry", "Pricing plans", "FAQ", "Typography", "404"]
const servicesItems = ["Services Page", "Service Single"]
const shopItems = ["Products", "Single Product", "Shopping cart", "Checkout", "My account"]
const blogItems = ["Blog Classic", "Blog Grid", "Blog Single"]
const [openDropdown, setOpenDropdown] = useState(null)

useEffect(() => {
  function handleScroll() {
    if (window.scrollY > 100) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, [])
  return (
    <>
    <nav className={`navbar ${isScrolled ? 'sticky-active is-sticky' : ''}`}>
  <div className="logo">
  <button className="grid-icon">
    <span></span><span></span>
    <span></span><span></span>
  </button>
  <span className="logo-text">AIERO</span>
</div>
   <ul>
  {menuItems.map((item) => (
   <li
  key={item}
  className={item === activeItem ? "active" : ""}
  onClick={() => setActiveItem(item)}
  onMouseEnter={() => setOpenDropdown(item)}
  onMouseLeave={() => setOpenDropdown(null)}
>
  <span className="menu-text-wrap">
    <span className="menu-text-inner">{item}</span>
    <span className="menu-text-inner">{item}</span>
  </span>
{item === "Home" && openDropdown === "Home" && (
  <div className="dropdown">
    <div className="dropdown-inner">
      <div className="dropdown-col">
        <span className="dropdown-title">↘ Modern Technology</span>
        {dropdownLeft.map((text) => (
          <a key={text} href="#" className="dropdown-item">{text}</a>
        ))}
      </div>
      <div className="dropdown-col">
        {dropdownRight.map((text) => (
          <a key={text} href="#" className="dropdown-item">{text}</a>
        ))}
      </div>
      <div className="dropdown-preview"><img src={previewImg} alt="preview" /></div> 

    </div>
  </div>
)}
{item === "Pages" && openDropdown === "Pages" && (
  <Dropdown2 items={pagesItems} />
)}
{item === "Services" && openDropdown === "Services" && (
  <Dropdown2 items={servicesItems} />
)}
{item === "Shop" && openDropdown === "Shop" && (
  <Dropdown2 items={shopItems} />
)}
{item === "Blog" && openDropdown === "Blog" && (
  <Dropdown2 items={blogItems} />
)}

</li>
  ))}
</ul>
    <div className="nav-right">
  <span className="search-icon">🔍</span>
  <button className="get-in-touch">Get in Touch</button>
</div>
  </nav> 
  <section className='hero'>
    <div className='hero-left'>
      <h1>Unlocking the potential of <span className="gradient-text">Neural Networks</span> features
    </h1>
    </div>
    <div className='hero-right'>
      <p>Highlight the potential benefits of Neural Networks, such as improved decision-making, predictive analytics, and automation.</p>
      <button className='discover-btn'>Discover
        <span className="arrow-wrap">
    <span className="arrow-inner">↗</span>
    <span className="arrow-inner">↗</span>
  </span>
      </button>
    </div>
  </section>
  <section className='showcase' >
<p>Elevate your business with our innovative solutions</p>
<h1>Aiero</h1>
<p className='creative'>Creative solutions for your business</p>
<button className="watch-video">
  <span className="play-icon">▶</span>
  Watch Video
</button>
  </section>
  <div style={{ height: '20000px' }}></div>
  </>)
}

export default App

