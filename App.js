
// import React from 'react';
// import Userr from './src/views/Userr';
// import BusinessDeveloper from './src/views/BusinessDeveloper';
// import ServiceEngineer from './src/views/ServiceEngineer';

// const App = () => {
//   return (
//     <Userr/>

//     <BusinessDeveloper/>

//     <ServiceEngineer/>
//   );
// };

// export default App;




// import React, { useState } from 'react';
// import Userr from './src/views/Userr';
// import BusinessDeveloper from './src/views/BusinessDeveloper';
// import ServiceEngineer from './src/views/ServiceEngineer';
// import Login from './src/views/Login';

// const App = () => {
//   const [userRole, setUserRole] = useState(null); // Track user role

//   const handleLogin = (role) => {
//     setUserRole(role); // Set role after login
//   };

//   if (!userRole) {
//     // Show login screen if no role is set
//     return <Login onLogin={handleLogin} />;
//   }

//   // Render dashboards based on role
//   if (userRole === 'user') {
//     return <Userr />;
//   } else if (userRole === 'business_developer') {
//     return <BusinessDeveloper />;
//   } else if (userRole === 'service_engineer') {
//     return <ServiceEngineer />;
//   }

//   return null; // Fallback
// };

// export default App;


import React, { useState } from 'react';
import Userr from './src/views/Userr';
import BusinessDeveloper from './src/views/BusinessDeveloper';
import ServiceEngineer from './src/views/ServiceEngineer';
import Login from './src/views/Login';

const App = () => {
  const [userRole, setUserRole] = useState(null); // Track user role

  const handleLogin = (role) => {
    setUserRole(role); // Set role after login
  };

  if (!userRole) {
    // Show login screen if no role is set
    return <Login onLogin={handleLogin} />;
  }

  // Render dashboards based on role
  if (userRole === 'user') {
    return <Userr />;
  } else if (userRole === 'businessdeveloper') {
    return <BusinessDeveloper />;
  } else if (userRole === 'serviceengineer') {
    return <ServiceEngineer />;
  }

  return null; // Fallback
};

export default App;

