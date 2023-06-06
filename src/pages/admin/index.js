const Admin = () => {
  return null; // Порожній компонент, оскільки ми виконаємо редірект на сервері
};

export const getServerSideProps = () => {
  return {
    redirect: {
      destination: '/admin/admin-panel',
      permanent: false, // Зробити редірект тимчасовим (302)
    },
  };
};

export default Admin;
