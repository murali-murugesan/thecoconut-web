import { Card, Tree, TreeDataNode, TreeProps } from "antd";
import { IoIosArrowDropdown } from "react-icons/io";
import { BsEmojiSmile, BsEmojiSmileFill } from "react-icons/bs";
import LearningContent from "../component/learnings/LearningContent";

const treeData: TreeDataNode[] = [
  {
    title: 'TheCoconut',
    key: '0-0',
    disabled: true,
    children: [
      {
        title: 'Manage Domain',
        key: '0-0-0',
        icon: ({ selected }) => (selected ? <BsEmojiSmileFill size={15} /> : <BsEmojiSmile size={15} />),
      },
    ],
  },
  {
    title: 'Front End',
    key: '0-1',
    children: [
      {
        title: 'ReactJs',
        key: '0-1-0',
        icon: ({ selected }) => (selected ? <BsEmojiSmileFill size={15} /> : <BsEmojiSmile size={15} />),
      },
      {
        title: 'Typescript',
        key: '0-1-1',
        icon: ({ selected }) => (selected ? <BsEmojiSmileFill size={15} /> : <BsEmojiSmile size={15} />),
      },
    ],
  },
  {
    title: 'DevOps',
    key: '0-2',
    children: [
      {
        title: 'Azure',
        key: '0-2-0',
        children: [
          {
            title: 'Azure Pipeline',
            key: '0-2-0-0',
            icon: ({ selected }) => (selected ? <BsEmojiSmileFill size={15} /> : <BsEmojiSmile size={15} />),
          },
        ],
      },
      {
        title: 'AWS',
        key: '0-2-1',
      },
    ],
  },
  {
    title: 'Tools',
    key: '0-3',
    children: [
      {
        title: 'Azure Devops',
        key: '0-3-0',
        icon: ({ selected }) => (selected ? <BsEmojiSmileFill size={15} /> : <BsEmojiSmile size={15} />),
      },
    ],
  },
];

function Learnings() {

  //const [selectedKey, setSelectedKey] = useState<string>();

  const onSelect: TreeProps['onSelect'] = (selectedKey, info) => {
    console.log(selectedKey), info;
    //setSelectedKey(info?.node?.title?.toString());
  };

  const renderContent = () => {
    return <LearningContent/>;
  };

  return (
    <>
      <div className="grid grid-cols-[25%_75%] gap-2">
        <Card className="min-h-screen max-h-screen">
          <Tree
            showIcon
            showLine
            defaultExpandAll
            defaultSelectedKeys={['0-0-0']}
            switcherIcon={<IoIosArrowDropdown size={15} />}
            treeData={treeData}
            onSelect={onSelect}
          />
        </Card>
        {renderContent()}
      </div>
    </>);
}


export default Learnings;