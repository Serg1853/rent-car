import { useState } from 'react';
import Button from 'components/Button/Button';
import {
  Wrapper,
  ImageWrap,
  Image,
  TitleWrap,
  Title,
  Span,
  Text,
  List,
  Item,
} from './CarCard.styled';
import HeartIcon from 'components/HeartIcon/HeartIcon';
import CarModal from 'components/Modal/Modal';

export default function CarCard({ data }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Wrapper>
      <ImageWrap>
        <HeartIcon data={data} />
        <Image src={data.img} alt="Car" />
      </ImageWrap>
      <TitleWrap>
        <Title>
          {data.make} {''}
          <Span>{data.model}</Span>, {data.year}
        </Title>
        <Text> {data.rentalPrice}</Text>
      </TitleWrap>
      <List>
        <Item>{data.address.split(',')[1]}</Item>
        <Item>{data.address.split(',')[2]}</Item>
        <Item>{data.rentalCompany}</Item>
        <Item>{data.type}</Item>
        <Item>{data.model}</Item>
        <Item>{data.mileage}</Item>
        <Item>{data.accessories[0]}</Item>
      </List>
      <Button onClick={handleOpen} text="Learn more" width="274px" />
      {open && <CarModal open={open} onClose={handleClose} data={data} />}
    </Wrapper>
  );
}
