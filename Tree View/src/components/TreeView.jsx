import React from 'react'
import Menulist from './Menu-list'
import './styles.css'

const TreeView = ({menus = []}) => {
    // console.log(menus)
  return (
    <div className='treeViewContainer'>
        <Menulist list={menus} />
    </div>
  )
}

export default TreeView