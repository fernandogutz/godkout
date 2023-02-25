import React from 'react'
import { NavLink } from 'react-router-dom'
import './AppMenu.css'

const AppMenu = () => {
  return (
    <nav className="menuMobile">
        <div className="menuMobile__item">
            <NavLink  to='/ranking'><i className="fa-solid fa-ranking-star"></i></NavLink>
        </div>

        <div className="menuMobile__item">
            <NavLink to='/search'><i className="fa-solid fa-magnifying-glass"></i></NavLink>
        </div>

        <div className="menuMobile__item">
            <NavLink to='/target'><i className="fa-solid fa-chart-line"></i></NavLink>
        </div>

        <div className="menuMobile__item">
            <NavLink to='/create-mark'><i className="fa-solid fa-square-plus"></i></NavLink>
        </div>
    </nav>
  )
}

export default AppMenu