function bestCharge(selectedItems) {
  
  var allItems = loadAllItems();
  var sum = 0;
  var discount1 = 0;
  var discount2 = 0;
  var selectedItems_info = [];
  var k = 0;
  var d = "";

  for (var i = 0; i < selectedItems.length; i++) {
    selectedItems_info.push({ id: selectedItems[i].split("x")[0], amount: selectedItems[i].split("x")[1] });
  }
  for (var j = 0; j < selectedItems_info.length; j++) {
    for (var l = 0; l < allItems.length; l++) {
      if (selectedItems_info[j].id == allItems[l].id) {
        selectedItems_info[j].name = allItems[l].name;
        selectedItems_info[j].price = allItems[l].price;
      }
    }
  }

  for (var m = 0; m < selectedItems_info.length; m++) {
    sum += selectedItems_info[m].price * selectedItems_info[m].amount;
    d += `${selectedItems_info[m].name} x ${selectedItems_info[m].amount} = 
    ${selectedItems_info[m].price * selectedItems_info[m].amount}`;
    if (selectedItems_info[m].id == 'ITEM0001') {
      discount2 += selectedItems_info[m].price / 2;
    }
    if (selectedItems_info[m].id == 'ITEM0022') {
      discount2 += selectedItems_info[m].price / 2;
    }
  }

  if (sum >= 30) {
    discount1 = 6;
  }

  if (discount1 > discount2) {
    return `
     =============订餐明细=============
      ${d} 
     ---------------------------------
     使用优惠：
     满30减6元，省6元
     ---------------------------------
     总计：${sum}元
     =================================
     `
  }
  else if (discount1 < discount2) {
    return `
     =============订餐明细=============
      ${d}
     ---------------------------------
     使用优惠：
     指定菜品半价（黄焖鸡，凉皮），省${discount2}元
     ---------------------------------
     总计：${sum}元
     =================================
     `
  }
  else {
    return `
      =============订餐明细=============
      ${d} 
      ---------------------------------
      总计：${sum}元
      =================================
      `
  }


}