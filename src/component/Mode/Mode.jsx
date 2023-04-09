import React from 'react'
import './Mode.css'

const Mode = () => {
    const dark = () =>{
        document.querySelector("body").setAttribute("data-theme", 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }
    const light = () =>{
        document.querySelector("body").setAttribute("data-theme", 'light')
        localStorage.setItem("selectedTheme", "light")
    }
    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme === "dark"){
        dark()
    } 
    const toggleTheme = (e) => {
        if(e.target.checked) dark()
        else light()
    }
  return (
    <label>
        <input type="checkbox"
        className='mode-input'
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
        />
        <span className="check"></span>
    </label>
  )
}

export default Mode