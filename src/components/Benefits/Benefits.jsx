import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdOutlineHighQuality, MdStorage } from 'react-icons/md';
import { Container, List } from './BenefitsStyled';

const Benefits = () => {
  return (
    <Container>
      <List>
        <li>
          <TbTruckDelivery />
          <div>
            <h3>Доставка</h3>
            <p>Без передплати</p>
            <p>Доставка по Україні 1-2 дні</p>
          </div>
        </li>
        <li>
          <MdOutlineHighQuality />
          <div>
            <h3>Якість</h3>
            <p>Найкраща якість</p>
            <p>За приємною ціною</p>
          </div>
        </li>
        <li>
          <MdStorage />
          <div>
            <h3>Склад</h3>
            <p>Склад в Києві</p>
            <p>Можливий самовивіз</p>
          </div>
        </li>
      </List>
    </Container>
  );
};

export default Benefits;
