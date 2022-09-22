/*
    미지의값 : 체육수업을 들을수있는 학생의 최대값을 return하라
        자료
            n (학생수)
            lost (도난당한학생들번호)
            reserve (여벌의 체육복을 가져온학생들번호)
            여벌체육복을 가져온 학생이 도난당했을경우 남은학생에게는 빌려줄수없다
            최대 들을수있는 학생수는 n명이다
            lost와 , reserve가 겹치면 -1 아니라면 유지
            lost < reserve 라면 크다면 모든학생들은 수업을 들을수있다
        
        조건
            바로 앞번호 학생이나 뒷번호 학생에게만 체육복을 빌려줄수있다
            여벌 체육복이 있는 학생만 다른 학생에게 빌려줄수잇다

    계획
        먼저 도둑을 맞았지만 여벌이 있는학생의 경우에는 도둑맞은배열과 여벌있는배열에서 제거를 해준다
        총학생수에서 중복제거가 된 도둑배열의수를 빼주어 현재 참가할수있는 학생수를 만들어준다
        오름차순으로 정렬을 해준다면 작은수부터 검사해서 조건을 충족한경우 뒤에검사를 안하고 다음으로 넘어가줄수있기때문에 정렬을해주었다
        도둑당한배열과 여벌있는학생 배열만큼 반복문을 돌려준다
        앞학생과 뒤의학생에게만 빌려줄수있으므로 -1 or +1했을경우 여벌있는학생번호랑 같다면 증가를 시켜주었다
        아까 현재참가할수있는 학생수에서 + 빌린학생을 해준뒤 return을 시켜준다
                
        
    반성
        문제의 조건을 잘읽어보지않고 시간낭비했다
            처음에 구현을할때 조건쪽에있는 앞번호나 뒷번호 학생한테만 빌려줄수있다는 가정과 여벌체육복도있고 도둑도맞았다면 본인만 줄수있다라는점 을 빼고라는 조건을 구현후 알게되서 시간을 낭비했다
        
        continue와 break의 사용법
            for문을 하나쓸땐 continue로 다음 루프를 돌게끔했었는데 2중for문으로 continue를 주니 2중for문의 continue가 되어버려서 break를 사용하여 첫번째 반복의 루프를 돌려주었는데
            잘모르는상태에서 이거아니면 이거 라는식으로 사용한점을 반성하고 continue와 break의 mdn 문서를 한번 읽어보았다
        
        먼저 주석으로 내 생각을 정리한뒤 코딩을 하고있지만 처음적었던 주석의 생각이 뜻대로 되지않는다면 다시 계획을 세워야겠다 
            지금은 한번꼬인후엔 계속 코딩으로답을 찾으려하는데 너무 생각이꼬여서 그런가 답을 찾기가 더 힘든결과를 낳는거같다..

*/

function solution1(n, lost, reserve) {
    // 도둑맞은사람 여벌있는사람 겹치면 제거
    let trimLost = lost.filter((s) => {
        return !reserve.includes(s)
    })

    let trimReserve = reserve.filter((s) => {
        return !lost.includes(s)
    })

    const trimN = n - trimLost.length

    let count = 0

    // 숫자순으로 정렬
    trimLost.sort((a, b) => a - b)
    trimReserve.sort((a, b) => a - b)

    // 도둑맞은사람 수를 기준으로 반복문
    for (let i = 0; i < trimLost.length; i++) {
        for (let ii = count; ii < trimReserve.length; ii++) {
            if (trimLost[i] - 1 === trimReserve[ii] || trimLost[i] + 1 === trimReserve[ii]) {
                count++
                break;
            }
        }
    }

    return trimN + count
}

describe('', () => {
    it('solution1 실행', () => {
        expect(solution1(5, [2, 4], [1, 3, 5])).toBe(5)
        expect(solution1(5, [2, 4], [3])).toBe(4)
        expect(solution1(3, [3], [1])).toBe(2)
        expect(solution1(4, [2, 3], [3, 4])).toBe(3)
        expect(solution1(7, [2, 3, 4], [1, 2, 3, 8, 6])).toBe(6)
        expect(solution1(13, [1, 2, 5, 6, 10, 12, 13], [2, 3, 4, 5, 7, 8, 9, 10, 11, 12])).toBe(11)
    })
})