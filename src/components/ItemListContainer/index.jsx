import React, { useState, useEffect } from "react";
import axios from "axios";
import faker from "faker";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ButtonCounter from "../ButtonCounter";

export default function ItemListContainer() {
  const [itemData, setItemData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      baseURL: "https://fakestoreapi.com",
      url: "/products?limit=5",
    })
      .then(({ data }) => {
        setItemData(data);
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <Typography gutterBottom variant="h1" component="div">
        Cargando...
      </Typography>
    );
  }

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        {itemData.map((product) => (
          <>
            <CardMedia
              component="img"
              height="180"
              image={product.image}
              alt="item list"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price}
              </Typography>
              <ButtonCounter
                stock={faker.random.arrayElement([0, 3, 5, 6, 7])}
              />
            </CardContent>
          </>
        ))}
      </CardActionArea>
    </Card>
  );
}
