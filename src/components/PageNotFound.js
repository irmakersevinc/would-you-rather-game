import React,{Component} from "react";
import { CardHeader,Card } from "reactstrap";

function PageNotFound  () {
    return(
        <div>
            <Card>
                <CardHeader>
                    <p>404 ! Page Not Found</p>
                </CardHeader>
            </Card>
        </div>
    )
} 

export default PageNotFound;