class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((p , i)=>({
            pos: p,
            time:(target -p) / speed[i]
        }))
        cars.sort((a,b)=> b.pos - a.pos)
        let fleets =0;
        let leadTime = 0;
        for(let car of cars){
            if(car.time > leadTime){
                fleets++;
                leadTime = car.time;
            }
        }
        return fleets;
    }
}
