import { getSpell } from 'jian-pinyin';


function groupByDesc(origin, k) {
	const isSpecial = /[*#@!%$&(),.+-]+/
	origin = origin.sort((pre, next) => pre[k].localeCompare(next[k]))
    // 构造 Object 用来存储分组排序的数据
    const newObj = {}
    origin.map(i => {
		const item = i[k]
        // 获取汉字的首字母
        let key = getSpell(item, (char, spell) => {
            return spell[1]
        })[0].toUpperCase()
		if (isSpecial.test(item)) {
			key = '#'
		}
        // 如果对象中已有key，则push
        if (newObj.hasOwnProperty(key)) {
            newObj[key].push(i)
        } else { // r如果对象中没有这个key，则为这个key构造value，这里value是一个数组
            // this.$set(newObj, key, [item])
			newObj[key] =[i]
        }
    })
    return newObj
}

export {
    groupByDesc
}