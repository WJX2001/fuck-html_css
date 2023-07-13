let data = [
  {
    id: 1,
    name: '目录1',
    parentId: 0,
  },
  {
    id: 2,
    name: '目录1-1',
    parentId: 1,
  },
  {
    id: 3,
    name: '目录1-2',
    parentId: 1,
  },
  {
    id: 4,
    name: '目录1-3',
    parentId: 1,
  },
  {
    id: 5,
    name: '目录2',
    parentId: 0,
  },
  {
    id: 6,
    name: '目录2-1',
    parentId: 5,
  },
  {
    id: 7,
    name: '目录2-2',
    parentId: 5,
  },
  {
    id: 8,
    name: '目录2-3',
    parentId: 5,
  },
];

let map = {}
// 处理数据，确保每个项都有children属性
data.forEach((item) => {
 map[item.id] = item
});

// 生成目录结构
const result = [];

data.forEach(item => {
  const parent = map[item.parentId]
  if(parent) {
    parent.children = parent.children || []
    parent.children.push(item)
  } else {
    result.push(item)
  }
})

console.log(result);