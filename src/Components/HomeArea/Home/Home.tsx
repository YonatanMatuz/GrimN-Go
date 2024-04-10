import { Box, Typography } from "@mui/material";
import "./Home.css";
import HomeCard from "../HomeCard/HomeCard";
// @ts-ignore
import DivineOrb from "../../../Assets/Images/DivineOrb.png";
// @ts-ignore
import ChaosOrb from "../../../Assets/Images/ChaosOrb.png";
// @ts-ignore
import AlchemyOrb from "../../../Assets/Images/AlchemyOrb.png";

function Home(): JSX.Element {

    return (

        <div className="Home">

            {/* Header image + Title and Description */}
			<Box className="headerBox">

                <div className="headerTitle">

                    <Typography variant="h1">
                        Grim N' Go
                    </Typography>

                </div>

                <div className="headerDescription">

                    <Typography variant="h2">
                       Ready to start blasting exile?
                    </Typography>

                    <Typography>
                        Below you will be a short summary, and graph of each method relevant to the current league.
                        <br />
                        If you are interested in a more detailed explanation each method will link a spreadsheet and the youtube video going over it, do note that the prices listed fluctuate with the economy.
                    </Typography>

                </div>

            </Box>

            <HomeCard 
            header="High Investment"
            currency={DivineOrb}
            title="Domination"
            description="This strategy focuses on getting as many corpses, allflames, and maps as possible, this strategy feeds into other more popular strategies providing what they need, as such it will only become more profitable as time goes on, the key components are 8 mod jungle valleys, and domination scarabs. "

            />

            <HomeCard 
            header="Medium Investment"
            currency={ChaosOrb}
            title="Essences"
            description="We are a groundbreaking biotech company, developing and delivering an immediate injectable treatment for neurotrauma, irrespective of its type or severity."

            />

            <HomeCard 
            header="Low Investment"
            currency={AlchemyOrb}
            title="Harvest + Expedition"
            description="The efficacy of the new treatment for the first pathology: Spinal Cord Injury, has been tested in three clinically relevant models in mice at Tel Aviv University with strong therapeutic efficacy  without side effects."

            />

        </div>
    );
}

export default Home;
