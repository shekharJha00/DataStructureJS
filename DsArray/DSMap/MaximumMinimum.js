let dice;
let resultMap = new Map();
let value1 = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;
let value5 = 0;
let value6 = 0;
while(value1<10 && value2<10 && value3<10 && value4<10 && value5<10 && value6<10)
{
  dice = Math.floor(Math.random()*10)%6 +1;
  switch(dice)
  {
    case 1:
      value1++;
      resultMap.set(1,value1);
      break;
    case 2:
      value2++;
      resultMap.set(2,value2);
      break;
    case 3:
      value3++;
      resultMap.set(3,value3);
      break;
    case 4:
      value4++;
      resultMap.set(4,value4);
      break;
    case 5:
      value5++;
      resultMap.set(5,value5);
      break;
    case 6:
      value6++;
      resultMap.set(6,value6);
      break;
  }
}
console.log(resultMap);
if(value1==10)
  console.log("1 reached maximum");
if(value2==10)
  console.log("2 reached maximum");
if(value3==10)
  console.log("3 reached maximum");
if(value4==10)
  console.log("4 reached maximum");
if(value5==10)
  console.log("5 reached maximum");
if(value6==10)
  console.log("6 reached maximum");