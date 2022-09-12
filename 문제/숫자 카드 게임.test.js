function solution (row, array) {
    let card = []

    for(let i =0; i<row[1]; i++){
        if(i === 0){
            card.push(array.slice(0,row[1]))
        } else {
            card.push(array.slice(row[1] * i , row[1] * (i + 1)))
        }
        
    }

    const result = card.map((item)=>{
        return item.sort((a,b)=>a-b)
    }).map((s)=> s[0])

    minNum = result.sort((a,b)=>b-a)
    
    return minNum[0]
}

 describe('숫자 카드게임',()=>{
    it('케이스1 실행',()=>{
        expect(solution([3,3],[3,1,2,4,1,4,2,2,2])).toBe(2)
    })

    it('케이스2 실행',()=>{
        expect(solution([2,4],[7,3,1,8,3,3,3,4])).toBe(3)
    })
})