const yearList = []
const monthNum = 12

  for (let i = 1921; i <= 2021; i++){     
      if (i > 2018){
        yearList.push( {"year": i, "label": `${i} (令和${i-2018}年)`})
      }
      else if (i > 1988){
        yearList.push( {"year": i, "label": `${i} (平成${i-1988}年)`})
      }
      else if (i > 1925){
        yearList.push( {"year": i, "label": `${i} (昭和${i-1925}年)`})
      }
      else if (i > 1911){
        yearList.push( {"year": i, "label": `${i} (大正${i-1911}年)`})
      }
    }
 
export{yearList, monthNum}