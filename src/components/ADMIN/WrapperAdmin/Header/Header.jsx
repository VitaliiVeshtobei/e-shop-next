import { useEffect, useState } from 'react';
import { Div, Menu, Wrapper } from './Header.styled';
import { Logo } from '../Logo/Logo';
import { Burger } from './Burger/Burger';

export const Header = ({ handleClickBurger, showBurgerMenu }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('uk-UA', options);
  };

  const formatWeekday = (date) => {
    const options = { weekday: 'long' };
    const weekday = date.toLocaleDateString('uk-UA', options);
    return weekday.charAt(0).toUpperCase() + weekday.slice(1);
  };

  const formatTime = (date) => {
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return date.toLocaleTimeString('uk-UA', options);
  };

  return (
    <Wrapper>
      <Logo />
      <Div>
        <p>
          <span> Час: </span>
          {formatTime(currentDateTime)}
        </p>
        <p>
          <span> День тижня: </span>
          {formatWeekday(currentDateTime)}
        </p>
        <p>
          <span> Дата: </span>
          {formatDate(currentDateTime)}
        </p>
      </Div>
      <Menu>
        <Burger
          handleClickBurger={handleClickBurger}
          showBurgerMenu={showBurgerMenu}
        />
      </Menu>
    </Wrapper>
  );
};
