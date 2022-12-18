import { Box, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import BgImage from '../assets/bg.png';

const Background:React.FC<{
    children: any
}> = ({
    children
}) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'flex-end',
                height: '100vh',
                width: '100vw',
                background: 'rgba(3, 62, 0, 0.70)',
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    overflowY: 'scroll',
                    background:  isLargeScreen ? 'transparent' : 'rgba(0,0,0,0.25)'
                }}
            >
                { children }
            </Container>
            <Box
                sx={{
                    width: '50%',
                }}
            >
                <img
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                    }}
                    src={BgImage}
                />
            </Box>
        </Box>
    )
}

export default Background;