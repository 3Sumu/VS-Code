import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../ReactCards/ReactCards";

function ReactCards() {
  const foods = [
    {
      id: 1,
      name: "Pasta",
      url: "https://1.bp.blogspot.com/-MUEnrPTaeu8/XyDUXVG_CHI/AAAAAAAAQzk/H4WtV_TDWLYago3RekP9T9S00_98rnRxwCLcBGAsYHQ/w1200-h630-p-k-no-nu/Masala%2BPasta.webp",
      des: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
    },
    {
      id: 2,
      name: "Korean Fried Chicken",
      url: "https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Korean-Fried-Chicken-square-FS-New-7377.jpg",
      des: "A variety of fried chicken dishes created in South Korea, including the basic huraideu-chicken and spicy yangnyeom chicken.",
    },
    {
      id: 3,
      name: "Jumbo Chiken Burger",
      url: "https://www.cityunbox.com/media/catalog/product/cache/65daba3010571badacafda02aba53f0a/j/u/jumbo-chicken-burger-jp.jpg",
      des: "A crispy and juicy jumbo chicken patty served in soft sesame bun wityh salad and thousand island sauce.",
    },
    {
      id: 4,
      name: "Chicken Tikka",
      url: "https://glebekitchen.com/wp-content/uploads/2016/12/chickentikkakebab.jpg",
      des: "It is traditionally small pieces of boneless chicken baked using skewers on a brazier called angeethi or over charcoal after marinating in Indian spices and dahi (yogurt).",
    },
    {
      id: 5,
      name: "Chicken Hakka Noodles",
      url: "https://s3.envato.com/files/291461597/DSC_5043.jpg",
      des: "Hakka noodles are Indian-Chinese style noodles made with unleavened refined wheat flour. These are boiled al dente and then stir fried in a Chinese wok with oil, vegetables & soya sauce.",
    },
    {
      id: 6,
      name: "Tandoori Chicken",
      url: "https://www.spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20.jpg",
      des: "Tandoori chicken is a chicken dish prepared by roasting chicken marinated in yogurt and spices in a tandoor, a cylindrical clay oven.",
    },
  ];

  return (
    <Container>
      <Row>
        {foods.map((food) => (
          <Col md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={food.url}
                style={({ width: "287px" }, { height: "200px" })}
              />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>{food.des}</Card.Text>
                <Button variant="primary">Order</Button>
                <Button variant="primary">Add To Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ReactCards;
