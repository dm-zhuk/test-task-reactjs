import { useContext, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import Pagination from '~/utils/context';
import Button from '../Buttons/Button';
import RadioButton from '../Buttons/RadioButton';
import Checkbox from '../Buttons/Checkbox';
import { filterData } from '~/utils/filterData';
import { getFilterParams } from '~/utils/filterParams';
import { vehicleEquipment, vehicleType } from '~/utils/filterIcons';
import { Location } from '~/common/components/icons/iconsIndex';
import styles from './index.module.css';

const CardFilter = ({ cards, setFilteredCards }) => {
  const { resetPage } = useContext(Pagination);
  const formRef = useRef(null); // Reference to the form
  const [selectedCity, setSelectedCity] = useState(''); // Track current city

  // Reset filter parameters, optionally preserving the city input
  const resetFilterParams = (form, preserveCity = false) => {
    if (!preserveCity) {
      form.reset();
    } else {
      // Reset all inputs except the location input
      const inputs = form.querySelectorAll('input:not(#location)');
      inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
          input.checked = false;
        }
      });
    }
  };

  // Apply filters based on current form state
  const applyFilters = (filterParams, isCitySearch = false) => {
    if (selectedCity && !filterParams.location) {
      filterParams.location = selectedCity;
    }
    const filteredData = filterData(cards, filterParams);

    resetPage();
    setFilteredCards(filteredData);

    if (Object.keys(filterParams).length > 0) {
      const matchesCount = filteredData.length;
      if (matchesCount > 0) {
        toast.success(
          `${matchesCount} camper${matchesCount > 1 ? 's' : ''} found`
        );
      } else {
        toast.error('No campers found for your selection');
      }
    } else if (isCitySearch) {
      toast('Please enter a city or select filters', { icon: 'ℹ️' });
    }
  };

  // Handle form submission ('Search' btn or 'Return' key)
  const handleSubmit = e => {
    e.preventDefault();
    const locationInput = formRef.current.querySelector('#location');
    const newCity = locationInput.value.trim();

    // Get filter parameters before clearing input
    const filterParams = getFilterParams(formRef.current);

    if (newCity) {
      setSelectedCity(newCity); // Update selected city
      resetFilterParams(formRef.current, true); // Reset other filters
      locationInput.value = ''; // Clear city input
    }

    applyFilters(filterParams, !!newCity);
  };

  // Handle 'Reset Filters' btn click (optional feature)
  const handleReset = () => {
    resetFilterParams(formRef.current);
    setSelectedCity('');
    setFilteredCards(cards);
    resetPage();
    toast.success('All filters now reset');
  };

  // Handle 'Return' key in the city input
  const handleCityKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={styles.inputForm}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label className={styles.label} htmlFor="location">
            Location
          </label>
          <div className={styles.inputBar}>
            <Location className={styles.locationIcon} />
            <input
              className={styles.cityInput}
              type="text"
              id="location"
              autoComplete="off"
              placeholder="City"
              onKeyDown={handleCityKeyDown}
            />
          </div>
        </div>
        <div className={styles.filterSection}>
          <div className={styles.filterTitle}>
            <p>Filters</p>
          </div>
          <div className={styles.checkBoxContainer}>
            <h3 className={styles.h3Filter}>Vehicle equipment</h3>
            <div className={styles.btnsWrapper}>
              {vehicleEquipment.map(({ name, label, icon }) => (
                <Checkbox key={label} name={name} label={label} icon={icon} />
              ))}
            </div>
            <h3 className={styles.h3Filter}>Vehicle Type</h3>
            <div className={styles.btnsWrapper}>
              {vehicleType.map(({ value, label, icon }) => (
                <RadioButton
                  key={label}
                  value={value}
                  label={label}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button type="submit" text="Search" />
          <Button
            type="button"
            text="Reset Filters"
            onClick={handleReset}
            className={styles.resetBtn}
          />
        </div>
      </form>
    </div>
  );
};

export default CardFilter;
