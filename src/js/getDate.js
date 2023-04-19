

export function getMonth(month) {
  const arrMonth = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May',
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December',
  ];
  
  return arrMonth[month-1];
}