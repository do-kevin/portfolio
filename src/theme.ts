import { grommet } from 'grommet';

export default {
  ...grommet,
  layer: {
    ...grommet.layer,
    background: 'rgba(1, 0, 15, 0.5)',
    overlay: {
      ...grommet.layer?.overlay,
      background: 'rgba(1, 0, 15, 0.5)',
    },
  },
};
