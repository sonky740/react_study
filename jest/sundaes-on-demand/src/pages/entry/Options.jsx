import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getOptions = async () => {
      try {
        const response = await axios.get(`http://localhost:3030/${optionType}`);

        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOptions();
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
}
