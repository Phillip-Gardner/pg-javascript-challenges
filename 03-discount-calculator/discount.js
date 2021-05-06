function sum(a, b) {
  return a + b;
}
module.exports = sum;



checkout = () => {
        let totalPrice = 0;
        let loyaltyPointsEarned = 0;

        this.products.forEach(product => {
            let discount = 0;
            if (product.code.startsWith("DIS_10")) {
                discount = product.price * 0.1;
                loyaltyPointsEarned += product.price / 10;
            } else if (product.code.startsWith("DIS_15")) {
                discount = product.price * 0.15;
                loyaltyPointsEarned += product.price / 15;
            } else {
                loyaltyPointsEarned += product.price / 5;
            }

            totalPrice += product.price - discount;
        });

        return new Order(totalPrice, loyaltyPointsEarned);
    };
