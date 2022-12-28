import React from "react";
import './hero.css';
import CardContent from "@material-ui/core/CardContent";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid, Stack } from "@mui/material";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import Card from "@material-ui/core/Card";
import Album from "../../assets/images/toothBurstBw.png";
import Social from "../Social";
import Jam from "../../assets/audio/jam.mp3"
const Hero = () => {
    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play();
    };

    return (
        <>

            <Grid container rowSpacing={1} direction="column" sx={{ alignItems: "center", justifyContent: "center" }} >
                <Grid >
                    
                    <Stack direction="column" sx={{ alignItems: "center", justifyContent: "center" }}>
                        <Grid container item xs={6} md={2} sx={{ alignItems: "center", justifyContent: "center" }}>
                            {/* <div ><img alt="category banner" class="head" src={MusicBanner}/></div> */}
                        </Grid>
                        <Grid item xs={6} md={10} style={{ minHeight: '500px' }} sx={{ alignItems: "center", justifyContent: "center" }}>

                            <Grid
                                style={{
                                    width: 540,
                                    height: 260,
                                    display: "flex",
                                    backgroundColor: "rgb(247, 142, 162)",
                                    borderRadius: "20px",
                                    boxShadow: "4px 4px 4px black",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <CardContent
                                        style={{
                                            flex: "1 0 auto",
                                        }}
                                    >
                                        <Typography component="h5" variant="h5" class="playerSong">
                                            My first tooth, baby.
                                        </Typography>
                                        <Typography variant="subtitle1" class="playerBand">
                                            The Missing Teeth
                                        </Typography>
                                    </CardContent>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            paddingLeft: 1,
                                            paddingBottom: 1,
                                        }}
                                    >
                                        <IconButton aria-label="previous">
                                            {useTheme().direction !== "rtl" ? (
                                                <SkipPreviousIcon />
                                            ) : (
                                                <SkipNextIcon />
                                            )}
                                        </IconButton>
                                        <IconButton aria-label="play/pause">
                                            <PlayArrowIcon
                                                style={{
                                                    height: 38,
                                                    width: 38,
                                                }}
                                                onClick={playAudio}
                                            />
                                        </IconButton>
                                        <IconButton aria-label="next">
                                            {useTheme().direction !== "rtl" ? (
                                                <SkipNextIcon />
                                            ) : (
                                                <SkipPreviousIcon />
                                            )}
                                        </IconButton>
                                    </div>
                                </div>
                                <CardMedia
                                    style={{
                                        paddingLeft: '60px',
                                        width: 155,
                                    }}
                                    image={Album}
                                />
                                <audio className="audio-element">
                                    <source src={Jam}>
                                    </source>
                                </audio>
                            </Grid>
                            <Grid container>
                                <Stack direction="row" spacing={4}>
                                    <Grid>
                                        <Typography style={{ fontFamily: 'Lacquer', paddingTop: '12px', paddingLeft: '20px', color: 'black', fontWeight: '300' }}>Share</Typography>
                                    </Grid>
                                    <Grid>
                                        <Social />
                                    </Grid>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default Hero;
