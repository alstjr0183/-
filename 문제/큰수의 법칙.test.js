/*
배열크기 , 덧셈횟수 , 같은수반복가능

1. 문자열 줄바꿈 기준으로 배열로 나누기 => 띄어쓰기제거 => 공백을 기준으로 배열나누기 => number 타입으로 변환
3. aaray2는 2번째 배열 내림차순으로 변환
4. 덧셈 식 ex) 6+6+6+5+6+6+6+5
    1. array1[1] 횟수만큼 반복문  
    2. if(카운트 < 같은수반복횟수){
            제일 높은수를 더하기
            카운트 + 1
        } else {
            2번째 높은수 더하기
            카운트 초기화
        }

*/


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