setPage(0)

addOptimization({
    type: 'SGD',
    updated: '1990-09-11',
    stepsCount: 13,
    epochsCount: 0,
    numParams: 15328,
    size: 1200000
})

addOptimization({
    type: 'SGD',
    updated: '1997-09-01',
    stepsCount: 26,
    epochsCount: 0,
    numParams: 15328,
    size: 2400000
})

addModel({
    type: 'Sequential',
    updated: '2007-05-31',
    numParams: 520000,
    size: 36000000
})

addModel({
    type: 'Sequential',
    updated: '2012-05-31',
    numParams: 3600000,
    size: 480000000
})
