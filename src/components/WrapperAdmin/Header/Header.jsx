import { useEffect, useState } from 'react';
import { Div, Wrapper } from './Header.styled';
import { Logo } from '../Logo/Logo';

export const Header = () => {
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
          Час: <span>{formatTime(currentDateTime)}</span>
        </p>
        <p>
          День тижня: <span>{formatWeekday(currentDateTime)}</span>
        </p>
        <p>
          Дата: <span>{formatDate(currentDateTime)}</span>
        </p>
      </Div>
    </Wrapper>
  );
};
