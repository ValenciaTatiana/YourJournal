import { TurnedInNot } from "@mui/icons-material";
import { Box, Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth);

    return (
        <>
            <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>

                <Drawer variant="permanent" open sx={{ display: { xs: 'block' }, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' } }}>

                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            { displayName }
                        </Typography>
                    </Toolbar>
                    <Divider />

                    <List>
                        {
                            ['Enero', 'Febrero', 'Marzo', 'Abril'].map(text => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <TurnedInNot />
                                        </ListItemIcon>
                                        <Grid container>
                                            <ListItemText primary={text} />
                                            <ListItemText secondary={'Quis do laborum labore ea amet ea ullamco Lorem qui.'} />
                                        </Grid>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>

                </Drawer>
            </Box>
        </>

    )
}