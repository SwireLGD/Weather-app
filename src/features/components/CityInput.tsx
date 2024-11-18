import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { fetchWeather } from "../weather/WeatherThunks";
import { TextField, Box, Button } from "@mui/material";

const CityInput: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };

    const handleSearch = () => {
        if (city) {
            dispatch(fetchWeather(city));
        } else {
            alert ('You didn\'t  write the name!')
        }
    };

    return (
        <Box display="flex" alignItems="center" justifyContent="center" p={2}>

            <TextField
                id="search"
                value={city}
                onChange={handleChange}
                placeholder="Enter the city name"
                variant="outlined"
                sx={{
                    width: "75%",
                    "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                    },
                }}
            />
            <Button
                onClick={handleSearch}
                variant="contained"
                sx={{ ml: 2 }}
            >
                Find
            </Button>
        </Box>
    );
};

export default CityInput;