import { ProgressBar } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <ProgressBar
      height="120"
      width="120"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#9cff51"
    />
  );
};

export default Spinner;
