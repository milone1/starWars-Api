import { useEffect, useState } from "react";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { getDataFromStarWars } from "../peticion/Api";

const Home = () => {

    const[starWars,setStarWar] = useState([]);

    const fetchStarWarsList = async() => {
        
        const listStarWars = await getDataFromStarWars();
        
        console.log(listStarWars);

        setStarWar(listStarWars);
    };

    //* esta funcion se ejecuta cuando la pagina esta cargando.
    useEffect(() => {
        fetchStarWarsList();
    }, []);

    return (
        <Container>
            <Grid container spacing={3}>
                {starWars.map( starWar =>(
                    <Grid item md={4} lg={4} sm={12} xs={12}>
                        <h1>{starWar.name}</h1>
                        <Card sx={{ width: 300}}>
                            <CardMedia component='img' image={`${starWar.image}`} />
                            <CardContent>
                                <h4>NOMBRE:</h4>
                                <h6>{starWar.name}</h6>
                                <h4>TALLA:</h4>
                                <h6>{starWar.height}</h6>
                                <h4>ID:</h4>
                                <h6>{starWar.id}</h6>
                            </CardContent>
                        </Card>
                    </Grid>
                ))} 
            </Grid>
        </Container>
    );
}
export default Home;
