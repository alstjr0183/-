/*

미지의값 : 짝수있경우 Even을 반환하고 홀수인경우 Odd를 반환하는 함수를 만들어주세요
    자료
        num % 2 === 0 이라면 짝수 아니면 홀수라는 값을 얻을수있을거같다

    조건
        0은 짝수이다

    반성
        
*/

function solution(num) {
    if (num % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}

describe('', () => {
    it('solution 실행', () => {
        expect(solution(3)).toBe('Odd')
    })
})