import React from 'react'
import Auxillary from '../../hoc/Auxillary'
import classes from './Layout.module.css'
const Layout=(props)=>(
  <Auxillary> 
    <div>
        ToolBar,SideDrawer,BackDrop
    </div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auxillary>
);
export default Layout