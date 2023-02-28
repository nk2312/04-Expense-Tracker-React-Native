export const getDateFormatted=(date)=>{
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  }

  export const getDataFromSevenDays=(days,today)=>{
    return new Date(today.getFullYear(),today.getMonth(),today.getDate()-days)
  }