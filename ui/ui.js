function setPage(page) {
    for (var i = 0; i <= 1; i++) {
        document.getElementById('page' + i).setAttribute('style', page === i ? 'display:block' : 'display:none')
        document.getElementById('li' + i).setAttribute('class', page === i ? 'nav-item active' : 'nav-item')
    }
}

function sizeRound(units) {
    if      (units >= 100.0) { units = units.toFixed(0) }
    else if (units >= 10.0)  { units = units.toFixed(1) }
    else                     { units = units.toFixed(2) }
    return parseFloat(units).toString()
}

function sizeToString(bytes) {
    if      (bytes >= 1073741824) { bytes = sizeRound(bytes / 1073741824) + ' GiB' }
    else if (bytes >= 1048576)    { bytes = sizeRound(bytes / 1048576) + ' MiB' }
    else if (bytes >= 1024)       { bytes = sizeRound(bytes / 1024) + ' KiB' }
    else                          { bytes = bytes + ' B' }
    return bytes
}

function addOptimization(optim) {

    var entry = document.createElement('tr')
    var td = document.createElement('td')
    var textnode = document.createTextNode(optim.type)
    td.appendChild(textnode)
    entry.appendChild(td)

    td = document.createElement('td')
    textnode = document.createTextNode(moment(optim.updated).fromNow())
    td.appendChild(textnode)
    entry.appendChild(td)

    td = document.createElement('td')
    textnode = document.createTextNode(optim.stepsCount)
    td.appendChild(textnode)
    entry.appendChild(td)

    td = document.createElement('td')
    textnode = document.createTextNode(optim.epochsCount)
    td.appendChild(textnode)
    entry.appendChild(td)

    td = document.createElement('td')
    textnode = document.createTextNode(optim.numParams)
    td.appendChild(textnode)
    entry.appendChild(td)

    td = document.createElement('td')
    textnode = document.createTextNode(sizeToString(optim.size))
    td.appendChild(textnode)
    entry.appendChild(td)

    var optimsTBody = document.getElementById('optimsTBody')
    if (optimsTBody.firstChild) {
        optimsTBody.insertBefore(entry, optimsTBody.childNodes[0])
    } else {
        optimsTBody.appendChild(entry)
    }
}
