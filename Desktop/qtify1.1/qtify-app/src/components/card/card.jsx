import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BlackButton from "./cardbutton"
import "./card.css"
export default function card( albumName) {
    return (
        <>
            <Card>
                <CardContent>
                    <div>
                        <div>
                            <img src="https://tse1.mm.bing.net/th?id=OIP.ceGXfykb_AmsggcJJ9DZYwHaKe&pid=Api&P=0&h=180" alt="song" />
                        </div>
                        <CardActions>
                            <BlackButton followers={100}/>
                        </CardActions>
                    </div>

                    <div>
                        <Typography variant="h6">english song</Typography>
                    </div>
                </CardContent>

            </Card>
        </>
    )
}