import { useState } from 'react';

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
}

export default CarFilter;
