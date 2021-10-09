// Code your solution in this file!
const hqBlocks = 42;
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

distanceFromHqInBlocks(43);
distanceFromHqInBlocks(50);
distanceFromHqInBlocks(34);
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInFeet(34);
distanceTravelledInFeet(43, 48);
distanceTravelledInFeet(50, 60);
distanceTravelledInFeet(34, 28);
calculatesFarePrice(43,44);