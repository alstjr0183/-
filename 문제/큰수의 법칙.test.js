function solution (number){
    const array1 = number.split('\n')[0].replaceAll(' ','').split('').map((string)=>{
        return Number(string)
    })
    
    const array2 =  number.split('\n')[1].replaceAll(' ','').split('').sort((a,b)=> b-a).map((string)=>{
        return Number(string)
    })

    let result = 0
    let counting = 0

    for(let i =0; i<array1[1]; i++){
        if(counting < array1[2]){
            result = result + array2[0]
            counting = counting + 1
        }else {
            result = result + array2[1]
            counting= 0
        }
    }
    
    return result
}


describe('큰수의 법칙',()=>{
    it('케이스1 실행',()=>{
        expect(solution(`5 8 3
2 4 5 4 6`)).toBe(46)
    })

    it('케이스2 실행',()=>{
        expect(solution(`5 7 2
3 4 3 4 3`)).toBe(28)
    })
})