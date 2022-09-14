function solution1(fear) {
    const descending = fear.sort((a, b) => a - b)

    let makeUp = 0
    let group = 0

    for (let i = 0; i < descending.length; i++) {
        makeUp = makeUp + 1

        if (makeUp >= descending[i]) {
            group = group + 1
            makeUp = 0
        }
    }

    return group;
}

function solution2(fear, makeUp = 0, group = 0, count = 0) {
    const descending = fear.sort((a, b) => a - b)

    if (count === descending.length) {
        return group;
    }

    makeUp = makeUp + 1
    if (makeUp >= descending[count]) {
        return solution2(fear, 0, group + 1, count + 1)
    } else {
        return solution2(fear, makeUp, group, count + 1)
    }
}

function solution3(fear) {
    const descending = fear.sort((a, b) => a - b)

    let makeUp = 0;
    let group = 0;
    let count = 0

    while (true) {
        if (count === fear.length) {
            return group;
        }

        makeUp++

        if (makeUp >= descending[count]) {
            group++
            makeUp = 0
        }

        count++
    }

}


describe('', () => {
    it('for문으로 풀이', () => {
        expect(solution1([2, 3, 1, 2, 2])).toBe(2)
    })

    it('재귀함수로 풀이', () => {
        expect(solution2([2, 3, 1, 2, 2])).toBe(2)
    })

    it('while로 풀이', () => {
        expect(solution3([2, 3, 1, 2, 2])).toBe(2)
    })
})


