const useDuration = ({ duration }) => {
  let hours = Math.floor(duration / 60);
  hours = hours === 0 ? null : hours;
  let minutes = duration % 60;
  minutes = minutes <= 9 && hours ? "0" + minutes : minutes;
  minutes = minutes === 0 ? null : minutes;
  return { hours, minutes };
};

export default useDuration;
