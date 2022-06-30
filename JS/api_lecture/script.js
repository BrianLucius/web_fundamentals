async function getMoney() {
    var pageDiv = document.querySelector("#coinList");

    // console.log("Let's get this mulah.");
    var apiResponse = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    var coinData = await apiResponse.json();
    // console.log(coinData);

    for (var i=0; i < coinData.length; i++) {
        // console.log(coinData[i].id);
        var currentCoin = coinData[i];
        var pTag = document.createElement("p");
        pTag.innerText = currentCoin.name + "-" + currentCoin.current_price;
        // console.log(pTag);
        pTag.classList.add("coin");
        pageDiv.appendChild(pTag);
    }

}