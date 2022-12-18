import { Box } from '@mui/material';

const Section:React.FC<{
    justify?: 'flex-start' | 'flex-end' | 'center';
    align?: 'flex-start' | 'flex-end' | 'center';
    children: any
}> = ({
    justify = 'flex-start',
    align = 'flex-start',
    children
}) => (
    <Box
        component='section'
        justifyContent={justify}
        alignItems={align}
        sx={{
            position: 'relative',
            display: 'flex',
            height: '100%',
            width: '100%',
            overflowX: 'auto'
        }}
    >
        { children }
    </Box>
);

export default Section;