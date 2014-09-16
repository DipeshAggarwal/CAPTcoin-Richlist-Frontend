var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        var data = JSON.parse(httpRequest.responseText);
        updateList(data);
    }
};

httpRequest.open('GET', 'https://api.captcoin.com/address/top/50');
httpRequest.send();

function updateList(data) {
    var j = 0;
    
    for(var i = j; i < j+10; ++i) {
        ele = document.getElementById("wrapper_" + j);
        j++;
        var newWrapper = document.createElement("div");
        console.log(ele);
        newWrapper.className = "rankRow";
        newWrapper.id = "rank_" + i;
        ele.appendChild(newWrapper);
        document.getElementById("rank_" + i).innerHTML = data["top"][i]["rank"];
        
        var newWrapper = document.createElement("div");
        newWrapper.className = "addressRow";
        newWrapper.id = "address_" + i;
        ele.appendChild(newWrapper);
        document.getElementById("address_" + i).innerHTML = data["top"][i]["address"];
        
        var newWrapper = document.createElement("div");
        newWrapper.className = "amountRow";
        newWrapper.id = "amount_" + i;
        ele.appendChild(newWrapper);
        document.getElementById("amount_" + i).innerHTML = data["top"][i]["balance"] + "  CAPT";
    };
}