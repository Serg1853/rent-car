function CarItem({ data }) {
  return (
    <li>
      <div>
        <img src={data.img} alt="Car" />{' '}
      </div>
    </li>
  );
}

export default CarItem;
