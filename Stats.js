const os = require('os')
const log = require('/home/rafael/code/projects/Javascript/masterclass_rocketseat/logger.js')


setInterval(() => {
  const {freemem, totalmem} = os

  const total = parseInt(totalmem() /1024 /1024)
  const mem = parseInt(freemem() /1024 /1024)
  const percents = parseInt((mem / total) * 100)

  const stats = {
    free:`${mem}MB`,
    total: `${total}MB`,
    usage: `${percents}%`
  }

  console.clear()
  console.log("******* PC STATS *******")
  console.table(stats)

  log(`${JSON.stringify(stats)}\n`)



},1000)