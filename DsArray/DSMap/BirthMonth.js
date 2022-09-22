let resultMap = new Map();
let January = 0;
let February = 0;
let March = 0;
let April = 0;
let May = 0;
let June = 0;
let July = 0;
let August = 0;
let September = 0;
let October = 0;
let November = 0;
let December = 0;
for(let i=0; i<50; i++)
{
  let month = Math.floor(Math.random() * 12) + 1;
  switch(month)
  {
    case 1:
      January++;
      resultMap.set(1,January);
      break;
    case 2:
      February++;
      resultMap.set(2,February);
      break;
    case 3:
      March++;
      resultMap.set(3,March);
      break;
    case 4:
      April++;
      resultMap.set(4,April);
      break;
    case 5:
      May++;
      resultMap.set(5,May);
      break;
    case 6:
      June++;
      resultMap.set(6,June);
      break;
    case 7:
      July++;
      resultMap.set(7,July);
      break;
    case 8:
      August++;
      resultMap.set(8,August);
      break;
    case 9:
      September++;
      resultMap.set(9,September);
      break;
    case 10:
      October++;
      resultMap.set(10,October);
      break;
    case 11:
      November++;
      resultMap.set(11,November);
      break;
    case 12:
      December++;
      resultMap.set(12,December);
      break;
  }
}
for(let[key, val] of resultMap) 
{
  if (key == 1) {
    console.log(val+" Individuals have birthday on "+key+"st month");
  } else if (key == 2) {
    console.log(val+" Individuals have birthday on "+key+"nd month");
  } else {
    console.log(val+" Individuals have birthday on "+key+"rd month");
  }{
    
  }
}