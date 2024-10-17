import React, { useState, useEffect, useRef } from 'react';
import spiritLogo from './assets/spirit_logo.svg';
import './App.css';
import { testBE } from "./services/SpiritAPIService.ts";
import { Button, Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from "@mui/material";
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';

function App() {
  const [count, setCount] = useState(0);
  const hasFetched = useRef(false);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (count > 10 && !hasFetched.current) {
        hasFetched.current = true;
        await testBE(Math.floor(Math.random() * (1000000000 - 1000000 + 1)) + 1000000);
        setCount(0);
      } else if (count <= 10) {
        hasFetched.current = false;
      }
    };

    fetchData();
  }, [count]);

  const DrawerList = (
      <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
        <List>
          {['Car', 'Cloth', 'Expenses', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
          ))}
        </List>
      </Box>
  );

  return (
      <>
        <div>
          <img src={spiritLogo} className="logo react" alt="React logo" />
        </div>
        <h1>Spirit</h1>
        <div className="card">
          <button onClick={() => setCount((prevCount) => prevCount + 1)}>
            count is {count}
          </button>
        </div>

        <div>
          <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>Open drawer</Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      </>
  );
}

export default App;
