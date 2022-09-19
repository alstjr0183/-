/*
미지의것 : id_list , report , k 를 이용해 각 유저별로 처리결과 메일을 받을 횟수를 배열로 return
    자료
        id_list ( 이용자 ID 배열 )
        report ( 유저가 신고한 ID 배열  )
        k ( 정지 기준 신고횟수 )

    조건
        각 유저는 한번에 한명의 유저를 신고할수있다 ( 신고횟수제한은 x )
        유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.

계획
    {
        name: 'muzi'
        target: ['frodo','neo'] 
    }
    report의 원소중 문자열을 반으로나눠 1 index에 있는 이름을 모아준다
    모아준 이름을 Map을 사용해 +1 씩 해준다
    횟수가 k번 이상인이름들을 찾는다


풀이

반성
 */
// 다시풀어야함
// const getReportTarget = (report, k) => {
//     let targetNames = []
//     let target = {}
//     let result = []

//     let history = {}

//     for (let i = 0; i < report.length; i++) {
//         let [name, targetName] = report[i].split(' ')

//         if (history[name]?.includes(targetName)) {
//             continue;
//         } else {
//             targetNames.push(report[i].split(' ')[1])
//         }

//         history = {
//             ...history,
//             [name]: [...history[name] || '', targetName]
//         }
//     }


//     targetNames.map((s) => {
//         target = {
//             ...target,
//             [s]: (target[s] || 0) + 1
//         }
//     })

//     for (let key in target) {
//         if (target[key] >= k) {
//             result.push(key)
//         }
//     }

//     return result
// }


// function solution1(id_list, report, k) {
//     const target = getReportTarget(report, k)

//     let organizes = {}

//     for (let i = 0; i < report.length; i++) {
//         for (let ii = 0; ii < 2; ii++) {
//             let [name, targetName] = report[i].split(' ')

//             if (targetName === target[ii]) {
//                 if (organizes[name]?.history.includes(targetName)) {
//                     continue;
//                 } else {
//                     organizes = {
//                         ...organizes,
//                         [name]: {
//                             count: (organizes[name]?.count || 0) + 1,
//                             history: [...organizes[name]?.history || [], targetName]
//                         }
//                     }
//                 }


//             }
//         }
//     }

//     let result = []

//     id_list.map((i) => {
//         result.push(organizes[i]?.count || 0)
//     })

//     return result
// }


describe('', () => {
    it('solution1 실행', () => {
        expect(solution1(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2)).toEqual([2, 1, 1, 0])
        expect(solution1(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 4)).toEqual([0, 0])
        expect(solution1(["muzi", "apeach", "con", "ryan"], ["ryan con", "muzi con", "apeach con", "ryan con", "ryan con", "ryan con", "ryan con"], 3)).toEqual([1, 1, 0, 1])
    })
})