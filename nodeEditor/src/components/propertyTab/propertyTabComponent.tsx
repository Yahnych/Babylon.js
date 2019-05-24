
import * as React from "react";
import { GlobalState } from '../../globalState';
import { Nullable } from 'babylonjs/types';
import { DefaultNodeModel } from '../../components/diagram/defaultNodeModel';
require("./propertyTab.scss");

interface IPropertyTabComponentProps {
    globalState: GlobalState;
}

export class PropertyTabComponent extends React.Component<IPropertyTabComponentProps, { currentNode: Nullable<DefaultNodeModel> }> {

    constructor(props: IPropertyTabComponentProps) {
        super(props)

        this.state = { currentNode: null };
    }

    componentWillMount() {
        this.props.globalState.onSelectionChangedObservable.add(block => {
            this.setState({ currentNode: block });
        });
    }

    render() {
        if (this.state.currentNode) {
            return (
                <div id="propertyTab">
                    <div id="header">
                        <img id="logo" src="https://www.babylonjs.com/Assets/logo-babylonjs-social-twitter.png" />
                        <div id="title">
                            NODE MATERIAL EDITOR
                        </div>
                    </div>
                    {this.state.currentNode.renderProperties(this.props.globalState)}
                </div>
            );
        }

        return (
            <div id="propertyTab">
                <div id="header">
                    <img id="logo" src="https://www.babylonjs.com/Assets/logo-babylonjs-social-twitter.png" />
                    <div id="title">
                        NODE MATERIAL EDITOR
                    </div>
                </div>
            </div>
        );
    }
}