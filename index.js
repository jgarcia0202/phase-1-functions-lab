// Code your solution in this file!
function distanceFromHqInBlocks(num1){
    const totalBlocks = num1 - 42
    if (totalBlocks<0){
        return totalBlocks*(-1)
    }
    else{
        return totalBlocks
    }
}
function distanceFromHqInFeet(num1) {
    return distanceFromHqInBlocks(num1)*264
}
function distanceTravelledInFeet(num2,num3){
   const total = (num2-num3) * 264
    if (total < 0) {
        return total * (-1)
    }
    else{
        return total
    }
}
function calculatesFarePrice(start, end){
    const fare = distanceTravelledInFeet(start,end) 
    if (fare < 400){
        return 0
    }
    else if(fare < 2000){
        return (fare - 400) * (0.02)
    }
    else if (fare > 2500){
        return 'cannot travel that far'
    }
    else {
        return 25
    }
}





























/*const hqBlocks = 42;
let block;
let blockFt;
function distanceFromHqInBlocks(awayBlock) {
    if (awayBlock < hqBlocks) {
        block = hqBlocks - awayBlock;
        return block;
    }
    else {
        block = awayBlock - hqBlocks;
        return block;
    }
}
function distanceFromHqInFeet(awayBlock) {
    if (awayBlock < hqBlocks) {
        block = hqBlocks - awayBlock;
        blockFt = block *264
        return blockFt;
    }
    else {
        block = awayBlock - hqBlocks;
        blockFt = block * 264
        return blockFt;
    }
}

let distFt
let regFt
function distanceTravelledInFeet(first,second) {
    if (first > second) {
        regFt = first - second;
        distFt = regFt * 264;
        return distFt;
    }
    else if (first < second) {
        regFt = second - first;
        distFt = regFt * 264;
        return distFt;
    }
}

let cost;
let free = 400;
let transition;
function calculatesFarePrice(start, destination) {
    if (start > destination) {
        regFt = start - destination;
        distFt = regFt * 264;
        if (distFt <= free) {
            cost = 0
        }
        else if (distFt > 2500) {
            cost = "cannot travel that far";
        }
        else if (distFt > 2000) {
            cost = 25;
        }
        else if (distFt > free) {
            transition = distFt - free;
            cost = transition*0.02;
        }

    }

    else if (start < destination) {
        regFt = destination - start;
        distFt = regFt * 264;
        if (distFt <= free) {
            cost = 0;
        }
        else if (distFt > 2500) {
            cost = "cannot travel that far";
        }
        else if (distFt > 2000) {
            cost = 25;
        }
        else if (distFt > free) {
            transition = distFt - free;
            cost = transition*0.02;
        }
    }
    return cost;
}
*/