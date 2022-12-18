import {
    AppBar,
    Box,
    Container,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import { Link } from 'react-router-dom';
import Logo from "./Logo";

const Header = () => (
    <AppBar position='absolute'>
        <Container maxWidth='xl'>
            <Toolbar variant='dense' disableGutters>
                <Stack
                    direction='row'
                    alignItems='center'
                    spacing={1}
                >
                    <Logo />
                    <Typography
                        component={Link}
                        to='/'
                        sx={{
                            textDecoration: 'none',
                            textTransform: 'none',
                            color: 'inherit',
                            '&:hover': {
                                color: 'inherit'
                            }
                        }}
                        noWrap
                    >
                        Arvena
                    </Typography>
                </Stack>

                <Box
                    sx={{
                        flexGrow: 1,
                        display: {
                            xs: 'flex',
                            md: 'none',
                        }
                    }}
                />
            </Toolbar>
        </Container>
    </AppBar>
);

export default Header;