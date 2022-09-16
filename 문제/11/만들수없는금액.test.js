// for
function solution1(money) {
    let n = money.sort((a, b) => a - b)

    let target = 1

    for (let i = 0; n.length; i++) {
        if (target < n[i]) {
            break
        }
        target += n[i]
    }

    return target
}

// 재귀함수
function solution2(money, target = 1, count = 0) {
    let n = money.sort((a, b) => a - b)


    if (target < n[count]) {
        return target
    }

    return solution2(money, target += n[count], count + 1)
}

// Map 
function solution3(money) {
    let n = money.sort((a, b) => a - b)

    let target = 1

    n.map((item) => {
        if (target < item) {
            console.log(target)
            return target
        } else {
            target = target + item
        }
    })

    return target
}

describe('만들수없는금액', () => {
    it('solution1 실행', () => {
        expect(solution1([3, 2, 1, 1, 9])).toBe(8)
    })

    it('solution2 실행', () => {
        expect(solution2([3, 2, 1, 1, 9])).toBe(8)
    })

    it('solution3 실행', () => {
        expect(solution3([3, 2, 1, 1, 9])).toBe(8)
    })
})