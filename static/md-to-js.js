const fs = require("fs")

let ItemList = {}
let jsonList = []
fs.readdir("./", function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function (file) {
    if (file.slice(-2) == 'md') {
      // 读取文件
      fs.readFile(file, function (err, data) {
        if (err) {
          return console.log(err);
        }
        let list = []
        let content = null
        let nowData = data.toString().split('# ')
        for (let i = 0; i < nowData.length; i++) {
          const element = nowData[i].trim()
          if (element) {
            let key = element.split('\n')
            if (i <= 7) {
              list.push({
                name: key[0],
                text: key.slice(1, )
              })
            }
          }
        }
        let text = []
        for (let j = 0; j < list.length; j++) {
          const e = list[j];
          if (e.name==='tag') {
            for (let k = 0; k < e.text.length; k++) {
              const t = e.text[k].slice(2)
              text.push(t)
            }
            e.text = text

          } else {
            e.text = e.text[0]
          }
        }

        content = data.toString()
        let index = content.lastIndexOf("# 内容")
        content = content.substring(index + 6, content.length);
        list.push({
          name: 'info',
          text: content
        })
        let nowList = {}
        for (const key in list) {
          if (list.hasOwnProperty(key)) {
            nowList[list[key].name] = list[key].text
          }
        }


        // 准备生成文件
        jsonList.push(nowList)
        ItemList.homeItemList=jsonList
        ItemList.total=jsonList.length

        fs.writeFile('itemList.json', JSON.stringify(ItemList), function (err) {
          if (err) {
            return console.log(err);
          }
          console.log('文件生成成功');
        })
      })
    }
  });
});
