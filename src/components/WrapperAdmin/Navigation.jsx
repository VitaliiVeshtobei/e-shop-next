import styled from 'styled-components';
import { MdOutlineManageAccounts, MdGroups, MdStorage, MdWifiProtectedSetup, MdAttribution } from 'react-icons/md';

const Button = styled.button`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background-color: ${(p) => (p.active === p.id ? 'blue' : 'gray')};
  transition: transform ${(p) => p.theme.transition};
  padding: 5px;

  &:hover {
    transform: scale(1.05);
  }
`;

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Navigation = ({ activeButtonIndex, handleButtonClick }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', border: '1px solid #2121' }}>
    {[
      {
        id: 'admin-panel',
        name: 'Адміністраторська панель',
        route: '/admin/admin-panel',
        icon: <MdStorage />,
      },
      {
        id: 'users',
        name: 'Користувачі',
        route: '/admin/users',
        icon: <MdGroups />,
      },
      { id: 'statistics', name: 'Налаштування', route: '/admin/statistics', icon: <MdOutlineManageAccounts /> },
      { id: 'event-log', name: 'Журнал подій', route: '/admin/event-log', icon: <MdWifiProtectedSetup /> },
      { id: 'support', name: 'Підтримка', route: '/admin/support', icon: <MdAttribution /> },
    ].map(({ id, name, route, icon }) => (
      <Button
        key={id}
        id={id}
        active={activeButtonIndex}
        onClick={() => handleButtonClick(id, route)}
      >
        <IconWrapper>{icon}</IconWrapper>
        {name}
      </Button>
    ))}
  </div>
);

export default Navigation;
