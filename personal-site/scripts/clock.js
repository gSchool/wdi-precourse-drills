window.onload = function() {
  const clock = () => {
    let date = new Date();
    date = date.toUTCString();
    document.getElementById('clock').innerHTML = date;
  };
  clock();
  setInterval(clock, 1000);
};
