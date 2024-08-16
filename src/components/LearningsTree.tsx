import { Card, TreeProps } from "antd";

import { useState } from "react";


function LearningsTree() {
    const [learningKey, setLearningKey] = useState<string>();
    const [data, setData] = useState<any[]>([]);

    const onSelect: TreeProps['onSelect'] = async (_selectedKey, info) => {
        let learningId = info.node.key?.toString();
        setLearningKey(info.node.title?.toString());
        await fetch('http://localhost:8080/api/articles/' + learningId, { method: 'GET', mode: 'cors' })
            .then(data => data.json())
            .then(json => setData(json));
    };

    return (<>
        <Card className=" min-h-screen max-h-screen min-w-full">
            <div id="content-title">
                {learningKey}
            </div>
            <div id="content-body">
                {data?.map((item) => (
                    <div key={item.id}>
                        {item.id}{item.title}
                        <p className="bg-red-400" dangerouslySetInnerHTML={{ __html: item.articleContent }}>

                        </p>
                        <img src={item.imageUrl} alt="no Image" />
                    </div>
                ))}
            </div>
        </Card>
    </>);
}

export default LearningsTree;