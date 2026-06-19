let Emp = {
    empId : "emp102",
    Empname: "Rk",
    EmpField : "Manager",
    salary: 20000
}

console.log(Emp.hasOwnProperty("salary")); // True

console.log(Object.entries(Emp))
/*
[
  [ 'empId', 'emp102' ],
  [ 'Empname', 'Rk' ],
  [ 'EmpField', 'Manager' ],
  [ 'salary', 20000 ]
]
 */

console.log(Object.keys(Emp)); // [ 'empId', 'Empname', 'EmpField', 'salary' ]

console.log(Object.values(Emp)); // [ 'emp102', 'Rk', 'Manager', 20000 ]

console.log(Object.assign(Emp,{vlg:"chicago", con : "USA"}));
/*
{
  empId: 'emp102',
  Empname: 'Rk',
  EmpField: 'Manager',
  salary: 20000,
  vlg: 'chicago',
  con: 'USA'
}
*/