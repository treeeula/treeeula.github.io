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

const hourinput = document.getElementById("hourinput")

const t = document.getElementById("total")
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
    vipprack: rates.bronze+rates.silver+rates.silver+rates.bronze+rates.gold+rates.vip+rates.vipp-360000,
    supporterrack: rates.bronze+rates.silver+rates.silver+rates.bronze+rates.gold+rates.vip+rates.vipp+rates.supporter-360000,
    oneprintrack: rates.oneprint+rates.oneprint-380000

}

function calcprinter(b, s, g, v, vp, su, o) { // ALL INPUTS MUST BE SET
    return b*rates.bronze+s*rates.silver+g*rates.gold+v*rates.vip+vp*rates.vipp+su*rates.supporter+o*rates.oneprint+0
}

function calcrack(d,v,vp,s,o) { // ALL INPUTS MUST BE SET
    return d*rackrates.rack+v*rackrates.viprack+vp*rackrates.vipprack+s*rackrates.supporterrack+o*rackrates.oneprintrack
}

const button = document.getElementById("calc")

function a(b){
    return b.toLocaleString()
}

function calculate() {
    let totalprint_hour = calcprinter(bronzeinput.value, silverinput.value, goldinput.value, vipinput.value, vippinput.value, supporterinput.value, opinput.value)*hourinput.value
    let totalrack_hour = calcrack(rackinput.value, viprackinput.value, vipprackinput.value, supporterrackinput.value, oprackinput.value)*hourinput.value
    let total_hour = totalprint_hour+totalrack_hour
    let total_second = total_hour/3600
    let total_minute = total_hour/60
    let total_day = total_hour*24

    let total = total_hour*hourinput.value
    
    t.innerText = `${total.toLocaleString()} (${hourinput.value} hour(s))`
    tb.innerText = `${a(calcprinter(bronzeinput.value,0,0,0,0,0,0)*hourinput.value)} (${hourinput.value} hour(s))`
    ts.innerText = `${a(calcprinter(0,silverinput.value,0,0,0,0,0)*hourinput.value)} (${hourinput.value} hour(s))`
    tg.innerText = `${a(calcprinter(0,0,goldinput.value,0,0,0,0)*hourinput.value)} (${hourinput.value} hour(s))`
    tv.innerText = `${a(calcprinter(0,0,0,vipinput.value,0,0,0)*hourinput.value)} (${hourinput.value} hour(s))`
    tvp.innerText = `${a(calcprinter(0,0,0,0,vippinput.value,0,0)*hourinput.value)} (${hourinput.value} hour(s))`
    tsu.innerText = `${a(calcprinter(0,0,0,0,0,supporterinput.value,0)*hourinput.value)} (${hourinput.value} hour(s))`
    to.innerText = `${a(calcprinter(0,0,0,0,0,0,opinput.value)*hourinput.value)} (${hourinput.value} hour(s))`

    tr.innerText = `${a(calcrack(rackinput.value,0,0,0,0)*hourinput.value)} (${hourinput.value} hour(s))`
    tvr.innerText = `${a(calcrack(0,viprackinput.value,0,0,0)*hourinput.value)} (${hourinput.value} hour(s))`
    tvpr.innerText = `${a(calcrack(0,0,vipprackinput.value,0,0)*hourinput.value)} (${hourinput.value} hour(s))`
    tsr.innerText = `${a(calcrack(0,0,0,supporterrackinput.value,0)*hourinput.value)} (${hourinput.value} hour(s))`
    tor.innerText = `${a(calcrack(0,0,0,0,oprackinput.value)*hourinput.value)} (${hourinput.value} hour(s))`
}

button.onclick = calculate()
