const friends = [
    {name:"Rifat",money:120},
    {name:"Risat",money:121},
    {name:"Hasan",money:122},
    {name:"Salah",money:123}
];
// nums.map(num=>num*2);
// nums.filter(num=>num>20);
// nums.find(num=>num>23);
const total = friends.reduce((sum,friend)=>{
    console.log(sum,friend.name,friend.money);
    return sum+friend.money;
},0);
console.log(total);
// const totalMoney = friends.reduce((sum,friend)=>sum+friend.money,0)

// console.log(totalMoney);