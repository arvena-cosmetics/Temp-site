import { Stack, Typography, Button, Box, useMediaQuery, useTheme } from "@mui/material";
import Background from "../Components/Background";
import KickstarterIcon from "../Components/KickstarterIcon";
import ProductCard from "../Components/ProductCard";
import Section from "../Components/Section";

// Images
import faceScrub from '../assets/face_scrub_mockup.png';
import shampoo from '../assets/shampoo_360x360.png';
import tub from '../assets/tub_mockup_360x360.png';

const Home = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Background>
        <Section align='center'>
          <Stack
            px={4}
              spacing={2}
              sx={{
                  maxWidth: 420
              }}
          >
            <Typography
              variant='h2'
              fontWeight={700}
              color='rgba(220, 181, 203, 0.9)'
            >
                Natural Hair &amp; Skincare
            </Typography>

            <Typography
              variant='body2'
              color='rgba(200, 200, 200, 1)'
            >
                Looking for something to keep your hair and skin healthy while feeling good knowing you helped the enviromnent
            </Typography>

            <Button
              component='a'
              href='https://www.kickstarter.com/projects/arvena/natural-hair-and-skin-care'
              variant='contained'
              size='large'
            >
              KickStarter Exclusives
            </Button>
          </Stack>
        </Section>

        <Section>
          <Stack
            spacing={2}
            sx={{
              width: '100%'
            }}
          >
            <Typography variant='h4' textAlign={isLargeScreen ? 'center' : 'left'}>
              Face Scrubs
            </Typography>
            <Stack
              direction='row'
              sx={{
                justifyContent: isLargeScreen ? 'center' : 'flex-start'
              }}
              spacing={2}
            >
              <ProductCard
                name='Exfoliating Face Scrub'
                description='Our Face Scrub contains natural walnut shells to help remove impurities and gently polish away dead skin - leaving your face looking fresh and feeling renewed. The rich, moisturizing formula is designed to nourish and protect sensitive facial skin.'
                image={faceScrub}
              />

              <ProductCard
                name='Sensetive Face Scrub'
                description='Our Face Scrub contains natural walnut shells to help remove impurities and gently polish away dead skin - leaving your face looking fresh and feeling renewed. The rich, moisturizing formula is designed to nourish and protect sensitive facial skin.'
                image={faceScrub}
              />
            </Stack>
          </Stack>
        </Section>

        <Section>
          <Stack
              spacing={2}
              sx={{
                width: '100%'
              }}
          >
            <Typography variant='h4' textAlign={isLargeScreen ? 'center' : 'left'}>
              Shampoos
            </Typography>
            <Stack
              direction='row'
              sx={{
                justifyContent: isLargeScreen ? 'center' : 'flex-start'
              }}
              spacing={2}
            >
              <ProductCard
                name='Exfoliating Scalp Scrub'
                description='Our Face Scrub contains natural walnut shells to help remove impurities and gently polish away dead skin - leaving your face looking fresh and feeling renewed. The rich, moisturizing formula is designed to nourish and protect sensitive facial skin.'
                image={shampoo}
              />

              <ProductCard
                name='Natural Shampoo'
                description='Our Face Scrub contains natural walnut shells to help remove impurities and gently polish away dead skin - leaving your face looking fresh and feeling renewed. The rich, moisturizing formula is designed to nourish and protect sensitive facial skin.'
                image={shampoo}
              />
            </Stack>
          </Stack>
        </Section>

        <Section>
          <Stack
              spacing={2}
              sx={{
                width: '100%'
              }}
            >
            <Typography
              variant='h4'
              textAlign={isLargeScreen ? 'center' : 'left'}
            >
              Soothing Creams
            </Typography>
            <Stack
              direction='row'
              sx={{
                justifyContent: isLargeScreen ? 'center' : 'flex-start'
              }}
              spacing={2}
            >
              <ProductCard
                name='Cellulite Leg Cream'
                description='Our Face Scrub contains natural walnut shells to help remove impurities and gently polish away dead skin - leaving your face looking fresh and feeling renewed. The rich, moisturizing formula is designed to nourish and protect sensitive facial skin.'
                image={tub}
              />

              <ProductCard
                name='Moisturiser'
                description='Our Face Scrub contains natural walnut shells to help remove impurities and gently polish away dead skin - leaving your face looking fresh and feeling renewed. The rich, moisturizing formula is designed to nourish and protect sensitive facial skin.'
                image={tub}
              />
            </Stack>
          </Stack>
        </Section>

       
          <Box
            sx={{
              position: 'absolute',
              height: '100vh',
              width: '100vw',
              left: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: '#f4f4f4'
            }}
          >
            <Stack
              spacing={2}
              p={2}
              sx={{
                maxWidth: 620
              }}
            >
              <Typography
                variant='h2'
                color='#033e00'
                fontWeight={400}
              >
                Support us on Kickstarter!
              </Typography>
              
              <Box py={2}>
                <Typography color='text.secondary'>
                  We are pationate about growing with our community! But we cannot do it without you.
                  If you would like to help support us you can go to our Kickstarter to get your hands on our Exclusive offers time limited offers!
                </Typography>
              </Box>

              <Button
                component='a'
                href='https://www.kickstarter.com/projects/arvena/natural-hair-and-skin-care'
                variant='contained'
                size='large'
                endIcon={<KickstarterIcon />}
              >
                Go to Kickstarter
              </Button>
            </Stack>
          </Box>
      </Background>
    )
}

export default Home;