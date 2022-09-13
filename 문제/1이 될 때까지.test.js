function solution ( value, count ) {
    let startValue = value[0]
    const divisionValue = value[1]

    if(startValue === 1 ){
        return count;
    }

    if(startValue % divisionValue === 0){
        startValue = startValue/divisionValue
    } else {
        startValue = startValue - 1
    }

    return solution([startValue, divisionValue] , count + 1)
}

 describe('1이 될때까지',()=>{
    it('케이스1 실행',()=>{
        expect(solution([25,5],0)).toBe(2)
    })
})