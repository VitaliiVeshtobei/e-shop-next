const SIZE = {
  mobile: '320px',
  mobileMax: '450px',
  tablet: '768px',
  laptop: '1280px',
};
const DEVICE = {
  mobile: `screen and (min-width: ${SIZE.mobile})`,
  tablet: `screen and (min-width: ${SIZE.tablet})`,
  laptop: `screen and (min-width: ${SIZE.laptop})`,
  mobileMax: `screen and (max-width: ${SIZE.mobileMax})`,
  tabletMax: `screen and (max-width: ${SIZE.tablet})`,
  laptopMax: `screen and (max-width: ${SIZE.laptop})`,
};
export default DEVICE;
