class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  }
  
class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros' || this.items[i].name != 'Conjured Mana Cake') {
            this.items[i].quality = this.items[i].quality - 1;
          }
          if (this.items[i].name == 'Conjured Mana Cake')
            this.items[i].quality = this.items[i].quality - 2;
            console.log(this.items[i].quality);
            
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
            if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].sellIn < 11) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
              if (this.items[i].sellIn < 6) {
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1;
                }
              }
            }
          }
        }
        if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (this.items[i].sellIn < 0) {
          if (this.items[i].name != 'Aged Brie') {
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (this.items[i].quality > 0) {
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                  this.items[i].quality = this.items[i].quality - 1;
                }
              }
            } else {
              this.items[i].quality = this.items[i].quality - this.items[i].quality;
            }
          } else {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
      }
  
      return this.items;
    }
  }
  
  module.exports = {
    Item,
    Shop
  }

  const items = [
    //new Item("+5 Dexterity Vest", 10, 20),
    // new Item("Aged Brie", 2, 0),
    // new Item("Elixir of the Mongoose", 5, 7),
    // new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    // new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    // new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    // new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    // new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  
    // This Conjured item does not work properly yet
    new Item("Conjured Mana Cake", 3, 6),
  ];
  
  const days = Number(process.argv[2]) || 2                                  ;
  const gildedRose = new Shop(items);
  
  console.log("OMGHAI!");
  for (let day = 0; day < days; day++) {
    console.log(`\n-------- day ${day} --------`);
    console.log("name, sellIn, quality");
    items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
    gildedRose.updateQuality();
  }
  