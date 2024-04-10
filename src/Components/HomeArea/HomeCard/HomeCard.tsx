import { Button, ButtonGroup, Card, CardContent, Paper, Typography } from "@mui/material";
import "./HomeCard.css";
// @ts-ignore
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js"

interface HomeCardProps {
    header: string;
    title: string;
    description: string;
    currency: any;
}

function HomeCard(props: HomeCardProps): JSX.Element {

    ChartJS.register(
        BarElement, CategoryScale, LinearScale, Tooltip, Legend
    );
    
    const data = {
        labels: ["Cost of entry", "Build strength required", "Consistency", "Initial Investment"],
        datasets: [
          {
            label: "Rating out of 10, cost may change",
            data: [7,4,9,2],
            backgroundColor: "darkred",
            borderColor: "black",
            borderWidth: 1,
          }
        ]
      }
    
      // Leave blank
      const options = {
        scales: {
            y: {
                suggestedMax: 10
            }
        },
      }

    return (

        <div className="HomeCard">

            {/* Header */}
            <Paper elevation={3}
            style={{ padding: '10px', textAlign: 'center', margin: 'auto', marginTop: '5vh', backgroundColor: 'rgba(191, 190, 190, 0.8)'}}
            sx={{ width: {xl: '65vh', lg: '55vh', md: '50vh', sm: '30vh', xs: '25vh'}}}>

                <div className="cardHeader">
                    <Typography variant="h2">
                        {props.header}
                    </Typography>

                    <img src={props.currency}/>
                </div>
            </Paper>

            {/* Main card container */}
            <Card className="generalCard" sx={{ width: {xl: '165vh', lg: '135vh', md: '100vh', sm: '60vh', xs: '32vh'}, flexDirection: { lg: 'row', xs: 'column' } }}>

                <CardContent className="cardContent" sx={{ width: {xl: '80vh', lg: '60vh', md: '100vh', sm: '60vh', xs: '29vh'} }}>

                    {/* Title */}
                    <Typography variant="h2">
                        {props.title}
                    </Typography>

                    {/* Description */}
                    <Typography variant="body1" className="cardDescription">
                        {props.description}
                    </Typography>

                    <ButtonGroup sx={{ marginTop: "10%"}}>

                        <Button color="success" href="https://docs.google.com/spreadsheets/d/1H9IgWpiBDKNuZ4FoAHUjDusybZOPalU2VArrpdgyrfg/edit#gid=550773" target="_blank">
                            Spread Sheet
                        </Button>

                        <Button color="error" href="https://www.youtube.com/watch?v=CplImYf7oE0&t=1308s" target="_blank">
                            Youtube Video
                        </Button>

                    </ButtonGroup>

                </CardContent>

                {/* Image */}
                <CardContent sx={{ width: {xl: '60vh', lg: '50vh', md: '0', sm: '60vh', xs: '30vh'} }}>

                    <div className="imageBackgroundEffect">

                        <Bar
                            data = {data}
                            options = {options}

                        ></Bar>

                    </div>

                </CardContent>

            </Card>
			
        </div>
    );
}

export default HomeCard;
