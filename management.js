// the item_id is not the one in database, but the No.id item displayed on website
function addItem(item_id, item_url, item_pic, item_name, item_num, item_price) {
    // item x
    var itemNode = c('div');
    itemNode.setAttribute("class", "item");
    itemNode.setAttribute("id", "item"+item_id);
        // pic
        var pic = c('a');
        pic.setAttribute("class", "item_pic");
        pic.setAttribute("href", item_url);
            // img
            var img = c('img');
            img.setAttribute("src", item_pic);
            // add children
            pic.appendChild(img);
        // name
        var name = c('a');
        name.setAttribute("class", "item_name");
        name.setAttribute("href", item_url);
            // h1
            var h1 = c('h1');
            h1.append(document.createTextNode(item_name));
            name.appendChild(h1);
        // buttons
        var buttons = c('div');
        buttons.setAttribute("class", "item_amount");
            // adjust
            var adjust = c('div');
            adjust.setAttribute("class", "amount_button");
                // minus
                var minus = c('button');
                minus.setAttribute("onclick", "minus("+item_id+")");
                minus.setAttribute("class", "minus");
                minus.appendChild(document.createTextNode("-"));
                // amount
                var amount = c('input');
                amount.setAttribute("class", "amount");
                amount.setAttribute("type", "text");
                amount.setAttribute("id", "amount"+item_id);
                amount.setAttribute("value", item_num);
                amount.setAttribute("readonly", "readonly");
                // plus
                var plus = c('button');
                plus.setAttribute("onclick", "plus("+item_id+")");
                plus.setAttribute("class", "plus");
                plus.appendChild(document.createTextNode("+"));
                // add children
                adjust.appendChild(minus);
                adjust.appendChild(amount);
                adjust.appendChild(plus);
            // delete
            var del = c('button');
            del.setAttribute("class", "del_item");
            del.setAttribute("onclick", "delItem("+item_id+")");
            del.appendChild(document.createTextNode("Delete"));
            // add children
            buttons.appendChild(adjust);
            buttons.appendChild(del);
        // price
        var price = c('h3');
        price.setAttribute("class", "item_price");
        price.appendChild(document.createTextNode("HK$ "+item_price));
        // add children
        itemNode.appendChild(pic);
        itemNode.appendChild(name);
        itemNode.appendChild(buttons);
        itemNode.appendChild(price);
    // add children
    var hr = c('hr');
    hr.setAttribute("id", "hr"+item_id);
    // add children
    var parent = document.getElementsByClassName("items")[0];
    parent.appendChild(itemNode);
    parent.appendChild(hr);
}

function plus(id) {
    var amountId = 'amount' + id;
    var e = document.getElementById(amountId);
    var value = e.value;
    var reg = /^[1-9]+[0-9]*]*$/;
    if (!reg.test(value)) return;
    else value = value - '0' + 1;
    if (value == '0') delItem(id);
    e.setAttribute("value", value);
}

function minus(id) {
    var amountId = 'amount' + id;
    var e = document.getElementById(amountId);
    var value = e.value;
    var reg = /^[1-9]+[0-9]*]*$/;
    if (!reg.test(value)) return;
    else value = value - '0' - 1;
    if (value == '0') delItem(id);
    e.setAttribute("value", value);
}

function delNode(e) {if (e != null) e.parentNode.removeChild(e);}
function delItem(id) {
    alert("You just delete an item. Checkout to save the changes.");
    var amountId = 'item' + id;
    delNode(document.getElementById(amountId));

    var hrid = 'hr' + id;
    delNode(document.getElementById(hrid));
}
