import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import image from "../../assets/img/nw-img.png";

export default function ItemListContainer() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} alt="item list" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ITEM CARD CONTAINER
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ESTO ES UNA TARJETA PARA LAS IMAGENES Y DESCRIPCIONES DE LOS ITEMS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
