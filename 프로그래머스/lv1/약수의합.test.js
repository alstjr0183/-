/*

미지의값 : n의 약수를 모두 더한값을 리턴하는 함수
    자료
        n ( 3000이하 정수 )
        약수 구하는 공식은 예를들어 12의약수를 구한다고 한다면 12 % 반복할수 === 0 을 충족하는값들이 약수가된다

    조건

계획
    계산결과를 담을 변수를 생성한다
    반복문을 돌리는데 n의 length만큼 반복을한다
    12 % 반복문i === 0 을 충족하는경우에는 계산결과를 담을 변수에 기존값 + i를 해준다 

반성
    약수를 구하는 방법을 몰라서 구글링을 했는데 외워놔야겠다 n (약수를구하고자하는수) % x (n의 약수인지확인하는값) === 0 을 충족한다면 x는 n의 약수이다 

*/
function solution(n) {
    let answer = 0
    for (let i = 0; i < n + 1; i++) {
        if (n % i === 0) {
            answer = answer + i
        }
    }

    return answer
}

describe('', () => {
    it('solution 실행', () => {
        expect(solution(12)).toBe(28)
        expect(solution(5)).toBe(6)
    })
})