import { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
// import './Drawer.css'


export default function TemporaryDrawer() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}> <MenuRoundedIcon className='link' /> </IconButton>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => setOpen(false)}
        >
        <div className='drawer-links'>
          <Link to="/">
            <p className='link'>Home</p>
          </Link>

          <Link to="/compare">
            <p className='link'>Compare</p>
          </Link>

          <Link to="/dashboard">
            <p className='link'>Dashboard</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}