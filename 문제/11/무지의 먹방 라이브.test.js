function solution1(food_time, K) {
    const length = food_time.length;

    let now = 0

    for (let i = 0; i < K; i++) {

        if (i === K - 1) {
            break;
        }

        if (food_time.filter((s) => s > 0).length === 0) {
            now = -1
            break;
        }

        if (food_time[now] === 0) {
            now++
        } else {

            if (now === length - 1) {
                food_time[now] = food_time[now] - 1
                now = 0
            } else {
                food_time[now] = food_time[now] - 1
                now++
            }
        }
    }


    console.log(food_time, now)
    return now === -1 ? -1 : now;
}

describe('무지 먹방 라이브', () => {
    it('solution1 실행', () => {
        expect(solution1([3, 1, 2], 5)).toBe(1)
        // expect(solution1([3, 1, 2], 15)).toBe(-1)
    })
})