import { useState } from 'react';
import Select from 'react-select';

function CarFilter({ makes, prices, onFilterChange }) {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceStep, setSelectedPriceStep] = useState(null);
  const [selectedPriceLabel, setSelectedPriceLabel] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const makeOptions = makes.map((make) => ({ value: make, label: make }));

  const priceRangeOptions = [];
  for (let i = 30; i <= 500; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  const handlePriceStepChange = (selectedOption) => {
    setSelectedPriceStep(selectedOption.value);
    setSelectedPriceLabel(selectedOption.label);
  };

  const filteredPrices = prices.filter((price) => price <= selectedPriceStep);

  const formatMileage = (value) => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  const handleMinInputChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxInputChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleFilterClick = () => {
    if (
      parseInt(minValue.replace(/,/g, ''), 10) >
      parseInt(maxValue.replace(/,/g, ''), 10)
    )
      return;
  };

  const newFilters = {
    make: selectedMake,
    filteredPrices: filteredPrices.map((price) => ({
      value: price,
      label: `${price}`,
    })),
    minMileage: parseInt(minValue.replace(/,/g, ''), 10),
    maxMileage: parseInt(maxValue.replace(/,/g, ''), 10),
  };
  onFilterChange(newFilters);

  return (
    <div>
      <div>
        <label htmlFor="nameSelect">Car brand</label>
        <Select
          id="nameSelect"
          placeholder="Enter the text"
          value={selectedMake}
          isClearable={true}
          onChange={(selectedOption) => setSelectedMake(selectedOption)}
          options={makeOptions}
        />
      </div>
      <div>
        <label htmlFor="priceSelect">Price / 1 hour</label>
        <Select
          id="priceSelect"
          placeholder="To $"
          value={
            selectedPriceStep
              ? { value: selectedPriceStep, label: selectedPriceLabel }
              : null
          }
          onChange={handlePriceStepChange}
          options={priceRangeOptions}
        />
      </div>
      <form>
        <label>Car mileage / km</label>
        <div>
          <input
            type="text"
            value={formatMileage(minValue)}
            onChange={handleMinInputChange}
          />
          <span>From</span>
          <input
            type="text"
            value={formatMileage(maxValue)}
            onChange={handleMaxInputChange}
          />
          <span>To</span>
        </div>
      </form>
      <button onClick={handleFilterClick}>Search</button>
    </div>
  );
}
export default CarFilter;
