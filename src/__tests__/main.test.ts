import { main } from "../main"


describe('main', () => {
    it("concat a and b", () => {
      expect(main()).toEqual('ab')
    })
})