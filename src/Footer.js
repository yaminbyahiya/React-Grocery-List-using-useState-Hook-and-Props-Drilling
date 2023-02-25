import React from 'react'
const today = new Date();
const Footer = ({length}) => {
  return (
    <footer>
        <p>
          {/* Copyright &copy; {today.getFullYear()} */}
          {length} List {length===1 || length===0?'item':'items'}
          </p>
    </footer>
  )
}

export default Footer