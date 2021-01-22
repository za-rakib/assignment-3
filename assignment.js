//https://github.com/za-rakib/assignment-3


/* Kilometer To Meter */
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (meter < 0) {
        return "Distance cannot be negative.";
    }
    return meter;
}
var result = kilometerToMeter(10);
console.log(result);


/*Budget Calculator*/
function budgetCalculator(watch, phone, laptop) {

    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    if (watch < 0) {
        return "Quantity cannot be negative.";
    }
    if (phone < 0) {
        return "Quantity cannot be negative.";
    }
    if (laptop < 0) {
        return "Quantity cannot be negative.";
    }
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
var result = budgetCalculator(2, 1, 1);
console.log(result);


/*Hotel Cost*/
function hotelCost(days) {
    var cost = 0;
    if (days < 0) {
        return "Days Can't be nagative.";
    }
    else if (days <= 10) {
        cost = days * 100;
    }
    else if (days <= 20) {
        var firstPart = 10 * 100;
        var remaning = days - 10;
        var secondPart = remaning * 80;
        cost = firstPart + secondPart;
    }
    else {
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaning = days - 20;
        var thirdPart = remaning * 50;
        cost = firstPart + secondPart + thirdPart;
    }
    return cost;
}
var result = hotelCost(25);
console.log(result);


/*Mega Friend*/
function megaFriend(friendsName) {
    var maxlenName = friendsName[0];
    if (friendsName.length < 2) {
        return "Please enter two friends name!"
    }
    for (var i = 0; i < friendsName.length; i++) {
        var element = friendsName[i];
        if (element.length > maxlenName.length) {
            maxlenName = element;
        }
    }
    return maxlenName;

}
var friendsName = ['Dip', 'Rakib', 'Raj', 'Saad', 'Naim']
var result = megaFriend(friendsName);
console.log(result);