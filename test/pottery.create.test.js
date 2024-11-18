import { makePottery } from "../src/scripts/PotteryWheel.js"

describe("Creating pottery", () => {
    const piece = makePottery("Mug", 10, 8)

    test("Pottery object is created with correct properties", () => {
        expect(piece)
            .toMatchObject(
                { shape: "Mug", weight: 10, height: 8, id: 1 }
            )
    })
})
