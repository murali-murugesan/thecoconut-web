import { Card } from "antd";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

function Swagger() {
    return (
        <>
            <Card className="min-h-screen max-h-screen">
                <SwaggerUI url="https://thecoconut-article.proudbay-13759061.australiaeast.azurecontainerapps.io/thecoconut/api/v3/api-docs" />
            </Card>
        </>);
}

export default Swagger;