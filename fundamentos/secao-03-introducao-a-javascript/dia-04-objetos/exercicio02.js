const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
//   Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, Número: 389, AP: 701.'.

  const customerInfo = (fullOrder) => {
    let message = `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, AP: ${fullOrder.address.apartment}.`;
    return message;
  }
  
  console.log(customerInfo(order));
  
//   Complete a função orderModifier() para que seu retorno seja: 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.'.

  const orderModifier = (fullOrder) => {
   fullOrder.name = 'Luiz Silva';
   fullOrder.payment.total = 50;
   let orderItems = Object.keys(fullOrder.order.pizza);
   let message = `Olá, ${fullOrder.name}, o valor total de seu pedido de ${orderItems.join(', ')} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00.'`
   return message;
  }
  
  console.log(orderModifier(order));