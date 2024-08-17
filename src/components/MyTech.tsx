import { Card, Image, Tooltip } from "antd";
import { SkillMap } from "@constants";

const cardBodyStyle: React.CSSProperties = {
    padding: '4px',
};

function MyTech() {
    return (
        <>
            <Card className=" min-h-screen max-h-screen min-w-full">
                {Array.from(SkillMap.entries()).map(([title, skillEntry]) =>(
                    <div className="pb-2">
                        <Card title={title} className="flex bg-cyan-50" hoverable={true} bodyStyle={cardBodyStyle}>
                            {skillEntry.map(skill => (
                                <Tooltip title={skill.name} color="cyan">
                                    <skill.Icon size={50} className="float-left px-2" />
                                </Tooltip>
                            ))}
                        </Card>
                    </div>
                ))}
                <div className="pt-4">
                    <Card title="Certifications" className="flex bg-blue-400" hoverable={true} bodyStyle={cardBodyStyle}>
                        <Tooltip title="Azure Data Fundamentals" color="cyan">
                            <Image src="https://learn.microsoft.com/en-gb/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg" preview={false} width={100} className="float-left px-2" />
                        </Tooltip>
                        <Tooltip title="Azure Developer Associate" color="cyan">
                            <Image src="https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg?branch=main" preview={false} width={100} className="float-left px-2" />
                        </Tooltip>

                        <Tooltip title="AWS Cloud Practitioner" color="cyan">
                            <Image src="https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png" preview={false} width={100} className="float-left px-2" />
                        </Tooltip>
                    </Card>
                </div>
            </Card>
        </>
    );
}

export default MyTech;