import React, { useState } from 'react'
import './Menu.scss'
import { staticData } from '../../../staticData'
import { NavLink } from 'react-router-dom'
import Icon from '../../Icon/Icon'
const Menu = () => {
  const [active, setActive] = useState(false)

  const activeHandler = () => {
    setActive(!active)
  }

  const stopPropagationHandler = (event) => {
    event.stopPropagation()
  }

  return (
    <>
      <div className="Menu" onClick={activeHandler}>
        <div className="Menu-line Menu-line-1"></div>
        <div className="Menu-line Menu-line-2"></div>
        <div className="Menu-line Menu-line-3"></div>
      </div>
      {active && (
        <div className="Menu-active" onClick={activeHandler}>
          <div
            className="Menu-active-inner"
            onClick={stopPropagationHandler}
          >
            {staticData.menuOptions.map((item, index) => {
              return (
                <div
                  className="Menu-active-inner-item"
                  key={item.id || index}
                  onClick={() => {
                    setActive(false)
                  }}
                >
                  <div className="Menu-active-item-icon"><Icon icon={item.icon}/></div>
                  <NavLink to={item.link}><div className="Menu-active-item-title">{item.title}</div></NavLink>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Menu