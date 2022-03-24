const {Item ,Shop} = require('../src/gilded_rose');

describe(Shop, function() {
  it(" Any item should have a name", function() {
    const item = new Item("foo", 0, 0);
    expect(item.name).toBe("foo");
  });
    it("+5 Dexterity Vest ages accordingly", () =>{
      const gildedRose = new Shop();
      const item = new Item("+5 Dexterity Vest", 10, 20);
      gildedRose.updateQuality(item);
      expect(item.sellIn).toBe(9);
      expect(item.quality).toBe(19);
    });
  it("Brie should age accordingly", function() {
    const gildedRose = new Shop();
    const item = new Item("Aged Brie", 2, 0);
    const items = gildedRose.updateQuality(item);
    expect(item.sellIn).toEqual(1);
    expect(item.quality).toEqual(1);
  });
  it("Elixir of the Mongoose should age accordingly", function() {
    const gildedRose = new Shop();
    const item = new Item("Elixir of the Mongoose", 5, 7);
    const items = gildedRose.updateQuality(item);
    expect(item.sellIn).toEqual(4);
    expect(item.quality).toEqual(6);
  });
  it("Sulfuras, Hand of Ragnaros should age accordingly", function() {
    const gildedRose = new Shop();
    const item = new Item("Elixir of the Mongoose", 0, 80);
    const items = gildedRose.updateQuality(item);
    expect(item.sellIn).toEqual(-1);
    expect(item.quality).toEqual(78);
  });
  it("Sulfuras, Hand of Ragnaros  should age accordingly", function() {
    const gildedRose = new Shop();
    const item = new Item("Elixir of the Mongoose", -1, 80);
    const items = gildedRose.updateQuality(item);
    expect(item.sellIn).toEqual(-2);
    expect(item.quality).toEqual(78);
  });
  it("Backstage passes to a TAFKAL80ETC concert age accordingly", function() {
    const gildedRose = new Shop();
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0);
    const items = gildedRose.updateQuality(item);
    expect(item.sellIn).toEqual(9);
    expect(item.quality).toEqual(2);
  });
  it("Backstage passes to a TAFKAL80ETC concert age accordingly", function() {
    const gildedRose = new Shop();
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 22, 50);
    const items = gildedRose.updateQuality(item);
    expect(item.sellIn).toEqual(21);
    expect(item.quality).toEqual(51);
  });
  it("Backstage passes to a TAFKAL80ETC concert age accordingly ", function() {
    const gildedRose = new Shop();
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49);
    const items = gildedRose.updateQuality(item);
    expect(item.sellIn).toEqual(4);
    expect(item.quality).toEqual(52);
  });
  it("Conjured Mana Cake", function() {
    const gildedRose = new Shop();
    const item = new Item("Conjured Mana Cake", 0, 30)
    const items = gildedRose.updateQuality(item);
    expect(item.sellIn).toEqual(-1);
    expect(item.quality).toEqual(26);
  });
});
