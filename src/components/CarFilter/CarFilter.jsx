import { useState } from 'react';
import Select from 'react-select';
import {
  Container,
  Form,
  InputContainer,
  InputLeft,
  InputRight,
  Label,
  SelectContainer,
  SpanLeft,
  SpanRight,
} from './CarFilter.styled';

import Button from 'components/Button/Button';

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
    ) {
      return;
    }

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
  };

  return (
    <Container>
      <SelectContainer>
        <Label htmlFor="nameSelect">Car brand</Label>
        <Select
          id="nameSelect"
          placeholder="Enter the text"
          value={selectedMake}
          isClearable={true}
          onChange={(selectedOption) => setSelectedMake(selectedOption)}
          options={makeOptions}
          styles={{
            control: (styles) => ({
              ...styles,
              width: '224px',
              height: '48px',
              borderColor: 'rgba(20, 20, 20, 0.2)',
              border: 'none',
              borderRadius: '14px',
              padding: '8px',
              fontSize: '16px',
              fontFamily: 'Manrope',
              backgroundColor: 'rgba(247, 247, 247, 1)',
              appearance: 'none',
            }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                color: isFocused ? 'black' : 'rgba(20, 20, 20, 0.2)',
                fontFamily: 'Manrope',
              };
            },

            placeholder: (styles) => ({
              ...styles,
              color: 'rgba(20, 20, 20, 1)',
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectContainer>

      <SelectContainer>
        <Label htmlFor="priceSelect">Price / 1 hour</Label>
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
          styles={{
            control: (styles) => ({
              ...styles,
              width: '125',
              height: '48px',
              borderColor: 'rgba(20, 20, 20, 0.2)',
              border: 'none',
              borderRadius: '14px',
              padding: '8px',
              fontSize: '16px',
              fontFamily: 'Manrope',
              backgroundColor: 'rgba(247, 247, 247, 1)',
              appearance: 'none',
            }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                color: isFocused ? 'black' : 'rgba(20, 20, 20, 0.2)',
                fontFamily: 'Manrope',
              };
            },

            placeholder: (styles) => ({
              ...styles,
              color: 'rgba(20, 20, 20, 1)',
            }),
          }}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectContainer>

      <Form>
        <Label>Car mileage / km</Label>
        <InputContainer>
          <InputLeft
            type="text"
            value={formatMileage(minValue)}
            onChange={handleMinInputChange}
          />
          <SpanLeft>From</SpanLeft>
          <InputRight
            type="text"
            value={formatMileage(maxValue)}
            onChange={handleMaxInputChange}
          />
          <SpanRight>To</SpanRight>
        </InputContainer>
      </Form>
      <Button text="Search" onClick={handleFilterClick} width="135px" />
    </Container>
  );
}
export default CarFilter;
