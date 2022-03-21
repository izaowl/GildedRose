const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it(" Any item should have a name", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  
  it("+5 Dexterity Vest age accordingly", function() {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it("Brie should age accordingly", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });

  it("Elixir of the Mongoose should age accordingly", function() {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 5, 7)]);
    //const days = 2;
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(6);
  });

  it("Sulfuras, Hand of Ragnaros", function() {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", 0, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1);
    expect(items[0].quality).toEqual(78);
  });

  it("Sulfuras, Hand of Ragnaros", function() {
    const gildedRose = new Shop([new Item("Elixir of the Mongoose", -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-2);
    expect(items[0].quality).toEqual(78);
  });

  it("Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(14);
    expect(items[0].quality).toEqual(21);
  });

  it("Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(50);
  });

  it("Backstage passes to a TAFKAL80ETC concert", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4);
    expect(items[0].quality).toEqual(50);
  });
  it("Conjured Mana Cake", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(2);
    expect(items[0].quality).toEqual(3);
  });
  
});
