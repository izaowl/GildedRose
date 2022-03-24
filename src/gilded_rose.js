class Item {
    constructor(name, sellIn, quality){
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
 }
 class Shop{
   updateQuality(item){
   let strategies = {
     'Conjured Mana Cake': this.conjured_update_strategy,
     'Sulfuras, Hand of Ragnaros': this.sulfuras_update_strategy,
     'Aged Brie': this.aged_brie_update_strategy,
     'Backstage passes to a TAFKAL80ETC concert': this.backstage_pass_update_strategy
   }
     const update_strategy = strategies[item.name] || this.default_update_strategy;
     update_strategy(item);
   }
  sulfuras_update_strategy(){}
  aged_brie_update_strategy(item){
      item.sellIn = item.sellIn - 1;
      const qualityReduction = item.sellIn < 0 ? 4 : -1;
      item.quality = item.quality - qualityReduction;
     }
  backstage_pass_update_strategy(item){
      const{sellIn, quality}  = item;
      let qualityUpdate;
      if (sellIn<=0 ) qualityUpdate = 0;
      else if (sellIn>10) qualityUpdate = quality + 1;
      else {
        const qualityIncrease = (sellIn <= 5) ? 3 : 2
        qualityUpdate = quality +qualityIncrease;
      }
      item.quality = qualityUpdate;
      item.sellIn = item.sellIn - 1;
    }
  conjured_update_strategy(item){
     item.sellIn = item.sellIn-1;
     const qualityReduction = item.sellIn < 0 ? 4 : 2
     item.quality = item.quality -4 ;
  }
  default_update_strategy(item){
      item.sellIn = item.sellIn-1;
      const qualityDecrease = (item.sellIn<0) ? 2 : 1;
      item.quality = (item.quality - qualityDecrease);
  }
 }

module.exports = {
   Item, Shop
}
