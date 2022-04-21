import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {
  ArrowDropDown as ArrowDropDownIcon, 
  Menu as MenuIcon
} from '@mui/icons-material';

import {CategoriesContext } from '../../contexts/categoriesContext';

import Logo from '../../assets/logo-gh.png';
import { useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';

type CategoryProps = {
  id: string;
  name: string;
  description: string;
};

function Navbar(){
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const open = Boolean(anchorEl);

  const { handleSelectCategory } = useContext(CategoriesContext);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');
      const cats = response.data;
      setCategories(cats);
    }
    loadCategories();
  }, []);


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ background: { xs:'#fff', md:'#F0F2F5' }, boxShadow: 'none'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#000'}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Categorias</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Produtos</Typography>
              </MenuItem>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src={Logo} alt="" style={{ width: 250}}/>
          </Typography>
          <Box sx={{ display:{ xs: 'none', md: 'flex' }, width:'100%', justifyContent: 'center', alignItems: 'center',  }}>
            <Box sx={{  display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', borderColor: '#00d077', backgroundColor: '#00d077', borderRadius: '0.358rem', marginX: 1 }}>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{color: '#fff', fontWeight: 500, boxShadow: 'none'}}
              >
                Categorias {<ArrowDropDownIcon />}
              </Button>
              
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                
                {categories.map((category) => (
                  <MenuItem key={category.id} onClick={() => handleSelectCategory(category)} >
                    {category.name}
                  </MenuItem>
                ))}

              </Menu>
            </Box>
            <Box sx={{  display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center', borderColor: '#00d077', backgroundColor: '#00d077', borderRadius: '0.358rem', marginX: 1 }}>
              <Button
                id="products-button"
                onClick={() => {}}
                sx={{color: '#fff', fontWeight: 500, boxShadow: 'none'}}
              >
                Produtos
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export { Navbar };