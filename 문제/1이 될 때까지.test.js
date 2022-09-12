function solution ( value, count ) {
    let startValue = value[0]
    const division = value[1]

    if(startValue === 1 ){
        return count;
    }

    if(startValue % division === 0){
        startValue = startValue/division
    } else {
        startValue = startValue - 1
    }

    return solution([startValue, division] , count + 1)
}

 describe('1이 될때까지',()=>{
    it('케이스1 실행',()=>{
        expect(solution([25,5],0)).toBe(2)
    })
})