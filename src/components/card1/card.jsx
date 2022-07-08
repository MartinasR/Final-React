import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SkillCard({ props }) {
    return (
        <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h3" component="section">
                        {props.title}
                    </Typography>
                    <Typography variant="body3" color="text.firtsly">
                       {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}