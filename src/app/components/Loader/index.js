import React from 'react';
import { PulseLoader } from 'react-spinners';

// eslint-disable-next-line react/prop-types
export default ({ loading = false }) => (
  <PulseLoader
    className="page-loader"
    sizeUnit="px"
    color="#36D7B7"
    loading={loading}
  />
);
