/*
|| 11/16/2022 ~3:00 AM MST <|> Add Supporter+
|| 11/17/2022 ~3:44 PM MST <|> fix
*/



const bronzeinput = document.getElementById("bronzeinput")
const silverinput = document.getElementById("silverinput")
const goldinput = document.getElementById("goldinput")
const vipinput = document.getElementById("vipinput")
const vippinput = document.getElementById("vippinput")
const supporterinput = document.getElementById("supporterinput")
const supporterpinput = document.getElementById("supporterpinput")
const opinput = document.getElementById("opinput")

const rackinput = document.getElementById("rackinput")
const viprackinput = document.getElementById("viprackinput")
const vipprackinput = document.getElementById("vipprackinput")
const supporterrackinput = document.getElementById("supporterrackinput")
const supporterprackinput = document.getElementById("supporterprackinput")
const oprackinput = document.getElementById("oprackinput")

const tps = document.getElementById("tps")
const tpm = document.getElementById("tpm")
const tph = document.getElementById("tph")
const tifh = document.getElementById("tifh")
const tpd = document.getElementById("tpd")

const tb = document.getElementById("totalbronze")
const ts = document.getElementById("totalsilver")
const tg = document.getElementById("totalgold")
const tv = document.getElementById("totalvip")
const tvp = document.getElementById("totalvipp")
const tsu = document.getElementById("totalsupporter")
const tsup = document.getElementById("totalsupporterp")
const to = document.getElementById("totaloneprint")

const tr = document.getElementById("totalrack")
const tvr = document.getElementById("totalviprack")
const tvpr = document.getElementById("totalvipprack")
const tsr = document.getElementById("totalsupporterrack")
const tspr = document.getElementById("totalsupporterprack")
const tor = document.getElementById("totaloprack")

const rates = {
    bronze: 82800,
    silver: 230400,
    gold: 237600,
    vip: 315000,
    vipp: 360000,
    supporter: 518400,
    supporterp: 673920, // LOOOOL
    oneprint: 393840
}

const rackrates = {
    rack: rates.bronze+rates.bronze+rates.gold-75000-75000,
    viprack: rates.bronze+rates.silver+rates.bronze+rates.gold+rates.vip-95000-95000,
    vipprack: rates.bronze+rates.silver+rates.bronze+rates.gold+rates.vip+rates.vipp-150000-150000,
    supporterrack: rates.bronze+rates.silver+rates.bronze+rates.gold+rates.vip+rates.vipp+rates.supporter,
    supporterprack: rates.bronze+rates.bronze+rates.silver+rates.gold+rates.vip+rates.vipp+rates.supporter+rates.supporterp-175000-175000, // thx brank
    oneprintrack: rates.oneprint+rates.oneprint

}

function calcprinter(b, s, g, v, vp, su, sup, o) { // ALL INPUTS MUST BE SET
    return b*rates.bronze+s*rates.silver+g*rates.gold+v*rates.vip+vp*rates.vipp+su*rates.supporter+sup*rates.supporterp+o*rates.oneprint+0
}

function calcrack(d,v,vp,s,sp,o) { // ALL INPUTS MUST BE SET
    let a=0;
	a += d*rackrates.rack
	a += v*rackrates.viprack
	a += vp*rackrates.vipprack
	a += s*rackrates.supporterrack
	a += sp*rackrates.supporterprack
	a += o*rackrates.oneprintrack
	
	return a

}

const button = document.getElementById("calc")


button.onclick = () => {
    let totalprint_hour = calcprinter(bronzeinput.value, silverinput.value, goldinput.value, vipinput.value, vippinput.value, supporterinput.value, supporterpinput.value, opinput.value)
    let totalrack_hour = calcrack(rackinput.value, viprackinput.value, vipprackinput.value, supporterrackinput.value, supporterprackinput.value, oprackinput.value)
    let total_hour = totalprint_hour+totalrack_hour
    let total_second = total_hour/3600
    let total_minute = total_hour/60
    let total_day = total_hour*24
    

    tps.innerText = total_second.toLocaleString()
    tpm.innerText = total_minute.toLocaleString()   
    tph.innerText = total_hour.toLocaleString()
    tpd.innerText = total_day.toLocaleString()

    tb.innerText = calcprinter(bronzeinput.value,0,0,0,0,0,0,0).toLocaleString()
    ts.innerText = calcprinter(0,silverinput.value,0,0,0,0,0,0).toLocaleString()
    tg.innerText = calcprinter(0,0,goldinput.value,0,0,0,0,0).toLocaleString()
    tv.innerText = calcprinter(0,0,0,vipinput.value,0,0,0,0).toLocaleString()
    tvp.innerText = calcprinter(0,0,0,0,vippinput.value,0,0,0).toLocaleString()
    tsu.innerText = calcprinter(0,0,0,0,0,supporterinput.value,0,0).toLocaleString()
    tsup.innerText = calcprinter(0,0,0,0,0,0,supporterpinput.value,0).toLocaleString()
    to.innerText = calcprinter(0,0,0,0,0,0,0,opinput.value).toLocaleString()

    tr.innerText = calcrack(rackinput.value,0,0,0,0,0).toLocaleString()
    tvr.innerText = calcrack(0,viprackinput.value,0,0,0,0).toLocaleString()
    tvpr.innerText = calcrack(0,0,vipprackinput.value,0,0,0).toLocaleString()
    tsr.innerText = calcrack(0,0,0,supporterrackinput.value,0,0).toLocaleString()
    tspr.innerText = calcrack(0,0,0,0,supporterprackinput.value,0).toLocaleString()
    tor.innerText = calcrack(0,0,0,0,0,oprackinput.value).toLocaleString()

    console.log(`Total Singular: ${totalprint_hour} | Total Rack ${totalrack_hour} | Total ${total_hour}`)
    
}
