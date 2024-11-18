// Imports go first
import { rng } from "./RNG.js";
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";



// Make 5 pieces of pottery at the wheel
let potteryQueue = [];
potteryQueue.push(makePottery("Mug", 1, 2));
potteryQueue.push(makePottery("Amphora", 2, 8));
potteryQueue.push(makePottery("Kylix", 8, 2));
potteryQueue.push(makePottery("Oinochoe", 2, 6));
potteryQueue.push(makePottery("Krater", 2, 8));
console.log("Starting state queue:");
console.log(potteryQueue);

// Fire each piece of pottery in the kiln
potteryQueue.forEach(pot => {
    firePottery(pot, rng(1700,2700));
});
console.log("Queue after firing:");
console.log(potteryQueue);

// Determine which ones should be sold, and their price
potteryQueue.forEach(pot => {
    toSellOrNotToSell(pot);
});
console.log("Queue after pricing eval:");
console.log(potteryQueue);

// Invoke the component function that renders the HTML list

