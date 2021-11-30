import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ButtonCounter from "../ButtonCounter";
import { itemData } from "../itemData";

export default function ItemListContainer() {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        {itemData.map((item) => (
          <>
            <CardMedia
              component="img"
              height="180"
              image={item.image}
              alt="item list"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
              <ButtonCounter />
            </CardContent>
          </>
        ))}
      </CardActionArea>
    </Card>
  );
}
