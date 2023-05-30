let revenue: number = 1000;
let bonus: number = 500;

let res: number = revenue + bonus;
console.log(res);

function getFullName(firstname: string, surname: string): string {
  return `${firstname} ${surname}`;
}

const getFullNameArrow = (firstname: string, surname: string): string => {
  return `${firstname} ${surname}`;
};
