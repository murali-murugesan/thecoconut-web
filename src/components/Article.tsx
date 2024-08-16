
import { Alert, Card, Image, List, TreeProps } from "antd";
import { useState } from "react";
import Title from "antd/es/typography/Title";
import { BiBulb } from "react-icons/bi";
import { SiContainerd } from "react-icons/si";
import { GiThink } from "react-icons/gi";



function IdeasTree() {
  const [, setData] = useState([]);
  const [ideaKey, setIdeaKey] = useState<string>();

  return (<>
    <Card className=" min-h-screen max-h-screen min-w-full">
      {getArticleContent(ideaKey)}
    </Card>
  </>);
}

const data = [
  {
    title: 'Spring Cloud Config Server',
    description: 'To externalize API specific properties',
  },
  {
    title: 'Spring Boot Actuator',
    description: 'To monitor API',
  },
  {
    title: 'CI/CD tool',
    description: 'That supports scripting in the pipeline',
  },
  {
    title: 'Container platform',
    description: 'Any container platform - Kubernetes, OpenShift, Azure Container Apps',
  },
];

function getArticleContent(ideaKey: string | undefined) {
  if (ideaKey != null) {
    return (<>
      <div id="content-title">
        <Alert
          message={ideaKey}
          description="Spring cloud config server can be used for both API rutime & platform properties."
          type="info"
          showIcon
          icon={<BiBulb />}
        />
      </div>
      <div id="content-body" className="pt-3">
        
          <Title level={5}>Context:</Title>
          Given an API uses the following,


          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<SiContainerd />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.description}
                />
              </List.Item>
            )}
          />

          <Alert
            message="How?"
            description="To manage API specific platform properties like scaling, memory, health check url etc...?"
            type="warning"
            showIcon
            icon={<GiThink />}
          />
         <br/>
          <Title level={5}>Solution:</Title>
          
          Spring cloud config server (CCS) can be used to host both API and platform specific properties, it can be run as part of the pipeline which generates the API specific properties and runtime platform properties. Lets see how,

          <Image src="https://thecoconutstorage.blob.core.windows.net/thecoconut-container/ideas/build pipeline/Spring CCS - Current State.jpg"></Image>

          <Image src="https://thecoconutstorage.blob.core.windows.net/thecoconut-container/ideas/build pipeline/Spring CCS - future state.jpg"/>  

      </div>
    </>);
  }
}

export default IdeasTree;