const bronzeinput = document.getElementById("bronzeinput")
const silverinput = document.getElementById("silverinput")
const goldinput = document.getElementById("goldinput")
const vipinput = document.getElementById("vipinput")
const vippinput = document.getElementById("vippinput")
const supporterinput = document.getElementById("supporterinput")
const opinput = document.getElementById("opinput")

const rackinput = document.getElementById("rackinput")
const viprackinput = document.getElementById("viprackinput")
const vipprackinput = document.getElementById("vipprackinput")
const supporterrackinput = document.getElementById("supporterrackinput")
const oprackinput = document.getElementById("oprackinput")

const tps = document.getElementById("tps")
const tpm = document.getElementById("tpm")
const tph = document.getElementById("tph")
const tpd = document.getElementById("tpd")

const tb = document.getElementById("totalbronze")
const ts = document.getElementById("totalsilver")
const tg = document.getElementById("totalgold")
const tv = document.getElementById("totalvip")
const tvp = document.getElementById("totalvipp")
const tsu = document.getElementById("totalsupporter")
const to = document.getElementById("totaloneprint")

const tr = document.getElementById("totalrack")
const tvr = document.getElementById("totalviprack")
const tvpr = document.getElementById("totalvipprack")
const tsr = document.getElementById("totalsupporterrack")
const tor = document.getElementById("totaloprack")

const rates = {
    bronze: 82800,
    silver: 115200,
    gold: 237600,
    vip: 315000,
    vipp: 360000,
    supporter: 518400,
    oneprint: 393840
}

const rackrates = {
    rack: rates.bronze+rates.silver+rates.silver+rates.bronze+rates.gold,
    viprack: rates.bronze+rates.silver+rates.silver+rates.bronze+rates.gold+rates.vip,
    vipprack: rates.bronze+rates.silver+rates.silver+rates.bronze+rates.gold+rates.vip+rates.vipp,
    supporterrack: rates.bronze+rates.silver+rates.silver+rates.bronze+rates.gold+rates.vip+rates.vipp+rates.supporter,
    oneprintrack: rates.oneprint+rates.oneprint

}

function calcprinter(b, s, g, v, vp, su, o) { // ALL INPUTS MUST BE SET
    return b*rates.bronze+s*rates.silver+g*rates.gold+v*rates.vip+vp*rates.vipp+su*rates.supporter+o*rates.oneprint+0
}

function calcrack(d,v,vp,s,o) { // ALL INPUTS MUST BE SET
    return d*rackrates.rack+v*rackrates.viprack+vp*rackrates.vipprack+s*rackrates.supporterrack+o*rackrates.oneprintrack
}

const button = document.getElementById("calc")


button.onclick = () => {
    let totalprint_hour = calcprinter(bronzeinput.value, silverinput.value, goldinput.value, vipinput.value, vippinput.value, supporterinput.value, opinput.value)
    let totalrack_hour = calcrack(rackinput.value, viprackinput.value, vipprackinput.value, supporterrackinput.value, oprackinput.value)
    let total_hour = totalprint_hour+totalrack_hour
    let total_second = total_hour/3600
    let total_minute = total_hour/60
    let total_day = total_hour*24

    tps.innerText = total_second.toLocaleString()
    tpm.innerText = total_minute.toLocaleString()   
    tph.innerText = total_hour.toLocaleString()
    tpd.innerText = total_day.toLocaleString()

    tb.innerText = calcprinter(bronzeinput.value,0,0,0,0,0,0).toLocaleString()
    ts.innerText = calcprinter(0,silverinput.value,0,0,0,0,0).toLocaleString()
    tg.innerText = calcprinter(0,0,goldinput.value,0,0,0,0).toLocaleString()
    tv.innerText = calcprinter(0,0,0,vipinput.value,0,0,0).toLocaleString()
    tvp.innerText = calcprinter(0,0,0,0,vippinput.value,0,0).toLocaleString()
    tsu.innerText = calcprinter(0,0,0,0,0,supporterinput.value,0).toLocaleString()
    to.innerText = calcprinter(0,0,0,0,0,0,opinput.value).toLocaleString()

    tr.innerText = calcrack(rackinput.value,0,0,0,0).toLocaleString()
    tvr.innerText = calcrack(0,viprackinput.value,0,0,0).toLocaleString()
    tvpr.innerText = calcrack(0,0,vipprackinput.value,0,0).toLocaleString()
    tsr.innerText = calcrack(0,0,0,supporterrackinput.value,0).toLocaleString()
    tor.innerText = calcrack(0,0,0,0,oprackinput.value).toLocaleString()

    // tb.innerText = bronzeinput.value
    // ts.innerText
    console.log(`Total Singular: ${totalprint_hour} | Total Rack ${totalrack_hour} | Total ${total_hour}`)
    
}
