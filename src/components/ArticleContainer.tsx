
import { Alert, Card, Image, List } from "antd";
import Title from "antd/es/typography/Title";
import { BiBulb } from "react-icons/bi";
import { GiThink } from "react-icons/gi";
import { Article } from "@types";

interface ArticleContainerProps {
  article: Article | null;
}

function ArticleContainer({ article }: ArticleContainerProps) {
  return (<>
    <Card>
    
      { article?.title == null && 
        <Image src="./coming-soon.jpg"/>
      } 
      {(article && article?.title) &&
        <><div id="content-title">
          <Alert
            message={article?.title}
            type="info"
            showIcon
            icon={<BiBulb />} />
        </div>
        <div id="content-body" className="pt-3">

            {/* <Title level={5}>Context:</Title> */}
            Given an API uses the following,
            <List
              size="small"
              itemLayout="horizontal"
              dataSource={article?.context}
              renderItem={(items) => (
                <List.Item>
                    <b>{items.item}</b> - {items.description}
                </List.Item> 
              )} />

            <Alert
              message="How?"
              description="To manage API specific platform properties like scaling, memory, health check url etc...?"
              type="warning"
              showIcon
              icon={<GiThink />} />
            <br />
            <Title level={5}>Solution:</Title>

            Spring cloud config server (CCS) can be used to host both API and platform specific properties, it can be run as part of the pipeline which generates the API specific properties and runtime platform properties. Lets see how,
            <br/>
            <Image src="https://thecoconutstorage.blob.core.windows.net/thecoconut-container/ideas/build pipeline/Spring CCS - Current State.jpg"></Image>
            <br />
            <Image src="https://thecoconutstorage.blob.core.windows.net/thecoconut-container/ideas/build pipeline/Spring CCS - future state.jpg" />
        </div></>}
    </Card>
  </>);

}

export default ArticleContainer;