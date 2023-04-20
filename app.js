const form=document.querySelector('#searchForm');

form.addEventListener('submit',(e)=>
 {
     e.preventDefault();
    const ctype=form.elements.coinType.value;
    fetchPrice(ctype);
});

const fetchPrice = async(ctype) =>{
    const r = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    
    const name=r.data.coin.name;
    const  co= document.getElementById("co");
    co.innerHTML =name;

    const price=r.data.coin.price;
    const  pr= document.getElementById("pr");
    pr.innerHTML =price;

    const symbol=r.data.coin.symbol;
    const  sy= document.getElementById("sy");
    sy.innerHTML =symbol;

    const volume=r.data.coin.volume;
    const  vo= document.getElementById("vo");
    vo.innerHTML =volume;

    const market_cap=r.data.coin.marketCap;
    const  mp= document.getElementById("ma");
    mp.innerHTML =market_cap;

    const price_change_1hrs=r.data.coin.priceChange1h;
    const  oneh= document.getElementById("1h");
    oneh.innerHTML =price_change_1hrs;
    
    const price_change_1day=r.data.coin.priceChange1d;
    const  oneday= document.getElementById("1d");
    oneday.innerHTML =price_change_1day;

    const price_change_1week=r.data.coin.priceChange1w;
    const  oneweek= document.getElementById("1w");
    oneweek.innerHTML =price_change_1week;    
}





