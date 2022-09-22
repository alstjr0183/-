/*

미지의값 : 정수를 담고있는 배열 arr의 평균값을 return하는 함수
    자료
        arr ( 1이상 100이하인 배열 , 원소는 -10000이상 10000이하의 정수 )
        배열에있는 모든값을 더한뒤 나누기 arr.length를 해주면 된다

    조건

계획
    reduce 함수를 이용해서 전부더한뒤 / arr.length 를 해주면될거같다

반성
    초반에 계획설정시 배열원소값을 다 더하고 나누기 2를 하면 답이 나오겠구나라고 생각했는데 아니란걸 테스트를 해보고알았다
    다더한뒤 배열의 원소만큼 나눠야하는데 쉬운문제라 생각하고 별 생각도 안하고 계획을 결정한거같다
    좀더 신중해지자

*/


function solution(arr) {
    const answer = arr.reduce((a, b) => a + b) / arr.length

    return answer
}

describe('', () => {
    it('solution 실행', () => {
        expect(solution([1, 2, 3, 4])).toBe(2.5)
        expect(solution([5, 5])).toBe(5)
    })
})