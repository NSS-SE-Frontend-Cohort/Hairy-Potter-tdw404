import { PotteryList } from "../src/scripts/PotteryList.js"
import { makePottery } from "../src/scripts/PotteryWheel.js"
import { firePottery } from "../src/scripts/Kiln.js"
import { toSellOrNotToSell } from "../src/scripts/PotteryCatalog.js"

describe('HTML representation', () => {
    let html

    beforeAll(() => {
        const mug = toSellOrNotToSell(firePottery(makePottery("Mug", 10, 8), 3000))
        const ornament = toSellOrNotToSell(firePottery(makePottery("Ornament", 2, 5), 2000))
        const platter = toSellOrNotToSell(firePottery(makePottery("Platter", 7, 2), 2000))

        html = PotteryList()
        html = html.replace(/\n/g, "")
        html = html.replace(/\s{2,}/g, "")
    })

    test('Pottery are converted to HTML correctly', () => {
        expect(html).toBe("<section class=\"pottery\" id=\"pottery--2\"><h2 class=\"pottery__shape\">Ornament</h2><div class=\"pottery__properties\">Item weighs 2 grams and is 5 cm in height</div><div class=\"pottery__price\">Price is $20</div></section><section class=\"pottery\" id=\"pottery--3\"><h2 class=\"pottery__shape\">Platter</h2><div class=\"pottery__properties\">Item weighs 7 grams and is 2 cm in height</div><div class=\"pottery__price\">Price is $40</div></section>");
    })
})
