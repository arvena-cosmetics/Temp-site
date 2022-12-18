import React, { useState } from "react";
import {
    Box,
    Button,
    MenuItem,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";


const productOptions = [
    { label: 'Exfoliationg Face Scrub', value: 'face-scrub' },
    { label: 'Sensetive Face Scrub', value: 'sensetive-face-scrub' },
    { label: 'Exfoliationg Scalp Scrub', value: 'scalp-scrub' },
    { label: 'shampoo', value: 'shampoo' },
    { label: 'Cellulite Leg Cream', value: 'cellulite-leg-cream' },
    { label: 'Moisturising Cream', value: 'moisturiser' }
];

const emailRegex = /^\S+@\S+\.\S+$/;
const postcodeRegex = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/;

const validate = (type: string, value: string) => {
    switch(type) {
        case 'name':
            return !/\d/.test(value); // returns false if has numbers
        case 'email':
            return emailRegex.test(value);
        case 'number':
            return /^\d+$/.test(value);
        case 'postcode':
            return postcodeRegex.test(value);
        case 'product':
            return value.length > 0 ? true : false;
        default:
            return true;
    }
}

const Form = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        street: '',
        city: '',
        postcode: '',
        product: ''
    });
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        number: false,
        street: false,
        city: false,
        postcode: false,
        product: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const{ name, value } = e.target;

        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleBlur = (type: string) => {
        return (e: React.FocusEvent<HTMLInputElement>) => {
            const {name, value } = e.target;

            const isValid = validate(type, value);

            if(!isValid) {
                return setErrors(prevState => ({
                    ...prevState,
                    [name]: true
                }))
            }

            setErrors(prevState => ({
                ...prevState,
                [name]: false
            }))
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(e)
    }

    return (
        <Paper
            elevation={4}
            sx={{
                padding: 3,
                borderRadius: 2,
                minWidth: 320,
            }}
        >
            <Box
                component='form'
                onSubmit={handleSubmit}
            >
                <Typography variant='body2' color='GrayText' >
                    Your Details:
                </Typography>

                <Stack pb={4} spacing={2}>
                    <TextField
                        name='firstName'
                        label='First Name'
                        value={state.firstName}
                        onBlur={handleBlur('name')}
                        onChange={handleChange}
                        size='small'
                        variant='standard'
                        error={errors.firstName}
                    />
                    <TextField
                        name='lastName'
                        label='Last Name'
                        value={state.lastName}
                        onBlur={handleBlur('name')}
                        onChange={handleChange}
                        size='small'
                        variant='standard'
                        error={errors.lastName}
                    />
                    <TextField
                        name='email'
                        label='Email'
                        onBlur={handleBlur('email')}
                        value={state.email}
                        onChange={handleChange}
                        size='small'
                        variant='standard'
                        error={errors.email}
                    />
                </Stack>

                <Typography variant='body2' color='GrayText'>
                    Your Address:
                </Typography>

                <Stack spacing={2}>
                    <TextField
                        name='number'
                        label='House Number'
                        value={state.number}
                        onBlur={handleBlur('number')}
                        onChange={handleChange}
                        size='small'
                        variant='standard'
                        error={errors.number}
                    />

                    <TextField
                        name='street'
                        label='Street'
                        value={state.street}
                        onBlur={handleBlur('name')}
                        onChange={handleChange}
                        size='small'
                        variant='standard'
                        error={errors.street}
                    />

                    <TextField
                        name='city'
                        label='City'
                        value={state.city}
                        onBlur={handleBlur('name')}
                        onChange={handleChange}
                        size='small'
                        variant='standard'
                        error={errors.city}
                    />

                    <TextField
                        name='postcode'
                        label='Postal Code'
                        onBlur={handleBlur('postcode')}
                        value={state.postcode}
                        onChange={handleChange}
                        size='small'
                        variant='standard'
                        error={errors.postcode}
                    />

                    <TextField
                        name='product'
                        label='Select a product'
                        value={state.product}
                        onBlur={handleBlur('product')}
                        onChange={handleChange}
                        size='small'
                        helperText='Please select a product'
                        select
                        error={errors.product}
                    >
                        {productOptions.map(({ label, value }) => (
                            <MenuItem
                                key={label}
                                value={value}
                                sx={{ textTransform: 'capitalize' }}
                            >
                                {label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <Box pt={2}>
                        <Button
                            type='submit'
                            variant='contained'
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Paper>
    )
}

export default Form;