import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth";

export const NavBar = ({drawerWidth}) => {

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(startLogout());
  }

  return (
    <AppBar position="fixed" sx={{width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }}}>

        <Toolbar>
            <IconButton color="inherit" edge="start" sx={{mr: 2, display: { sm: 'none' }}}>
                <MenuOutlined />
            </IconButton>

            <Grid container sx={{width: '100%'}} direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" noWrap component="div">Your Journal</Typography>

                <IconButton color="error" onClick={onLogout}>
                  <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar>

    </AppBar>
  )
}