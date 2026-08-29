// ❌ The Old Callback Way (Inversion of Control + Nesting)
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWalletBalance();
    });
  });
});

// Arrow Function
createOrder(cart, (orderId) => {
  proceedToPayment(orderId, (paymentInfo) => {
    showOrderSummary(paymentInfo, () => {
      updateWalletBalance();
    });
  });
});

// The Modern Promise Chaining Way
// Each step returns a promise so data flows down the chain

// steps we have orderId, then we need to use proceed to payment, then show order summary, then we need update wallet ballance, then if there's any error for that a catch.
createOrder(cart)
    .then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(summary => updateWalletBalance(summary))
    .catch(err => console.error("Transaction failed:", err))
