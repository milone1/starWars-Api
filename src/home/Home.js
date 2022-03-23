import { useEffect, useState } from "react";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { getDataFromStarWars } from "../peticion/Api";

const Home = () => {

    const[starWar,setStarWars] = useState([]);
    const fetchStarWarList = async() => {
        const listStarWars = await getDataFromStarWars();
        console.log(listStarWars)
    }
    //* esta funcion se ejecuta cuando la pagina esta cargando.
    useEffect(() => {
        fetchStarWarList();
    }, []);

    return (
        <Container>
            <h1>STAR WARS API :V</h1>
            

        </Container>
    );
}
export default Home;
