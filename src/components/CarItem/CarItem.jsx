function CarItem({ data }) {
  return (
    <li>
      <div>
        <img src={data.img} alt="Car" />{' '}
      </div>
      <div>
        <h3>{data.make}</h3>
        <span>{data.model}</span>,{data.year}
        <p>{data.rentalPrice}</p>
      </div>
      <ui>
        <li>{data.address.split(',')[1]}</li>
        <li>{data.address.split(',')[2]}</li>
        <li>{data.rentalCompany}</li>
        <li>{data.type}</li>
        <li>{data.model}</li>
        <li>{data.mileage}</li>
        <li>{data.accessories[0]}</li>
      </ui>
      <button>Learn more</button>
    </li>
  );
}

export default CarItem;