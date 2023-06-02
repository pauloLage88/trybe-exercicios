const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer (string) {
  if (typeof(string) != "string") {
    return console.log('O parâmetro passado deve ser do tipo string')
  }
  return trybeBankCustomers.push(string);
}

addCustomer('Paulo');
console.log(trybeBankCustomers);