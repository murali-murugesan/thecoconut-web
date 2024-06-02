
import { Card, Tree, TreeDataNode } from "antd";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsEmojiSmile, BsEmojiSmileFill } from "react-icons/bs";

const treeData: TreeDataNode[] = [
  {
    title: 'Proven Ideas',
    key: '0-0',
    children: [
      {
        title: 'Spring Cloud Config',
        key: '0-0-0',
        icon: ({ selected }) => (selected ? <BsEmojiSmileFill size={15}/> : <BsEmojiSmile size={15}/>),
      },
    ],
  },
  {
    title: 'Better Ways',
    key: '0-1',
    children: [
      {
        title: 'Agile - Is it working?',
        key: '0-1-0',
        icon: ({ selected }) => (selected ? <BsEmojiSmileFill size={15}/> : <BsEmojiSmile size={15}/>),
      },
    ],
  },
  {
    title: 'Leadership',
    key: '0-2',
    children: [
      {
        title: 'Developer Voice',
        key: '0-2-0',
        icon: ({ selected }) => (selected ? <BsEmojiSmileFill size={15}/> : <BsEmojiSmile size={15}/>),
      },
      {
        title: '1:Many',
        key: '0-2-0',
        icon: ({ selected }) => (selected ? <BsEmojiSmileFill size={15}/> : <BsEmojiSmile size={15}/>),
      },
    ],
  },
];


function IdeasTree() {
  return (<>
    <Card style={{ height: "85vh"}}>
      <Tree
        showIcon
        showLine
        defaultExpandAll
        defaultSelectedKeys={['0-0-0']}
        switcherIcon={<IoIosArrowDropdown size={15}/>}
        treeData={treeData}
      />

    </Card>
  </>);
}

export default IdeasTree;