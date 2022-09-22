/*

미지의값 : 자연수N의 각자릿수의 합을 구해서 Return하자
    자료
        N ( 100,000,000이하의 자연수 )
        자연수를 자릿수 기준으로 나누면 더할수있을거같다    

    조건

계획
    N을 split('')을 기준으로 나눈다
    reduce를 이용하여 다 더해준다

반성
    split가 특정기준으로 쪼개 새로운 배열로 return한다는사실을 헷갈려했다
    split가 문자열을 쪼개 배열로 return한다는 사실을 알지못했다
        number로도 나눌수있는줄..
            왜 number로는 못나누게끔 했을까 접근해보는것도 괜찮을거같다

*/


function solution(N) {
    const divide = String(N).split('')

    const answer = divide.reduce((a, b) => a + Number(b), 0)

    return answer
}

describe('', () => {
    it('solution 실행', () => {
        expect(solution(123)).toBe(6)
        expect(solution(987)).toBe(24)
    })
})