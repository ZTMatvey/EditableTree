import { SelectedNode } from "./SelectedNode";
import { TreeNode } from "./TreeNode";

export class TreeData{
    private _selectedNode?: SelectedNode;
    public setSelectedNode(selectedNode: SelectedNode)
    {
        this._selectedNode = selectedNode;
    }
    public get selectedNode(){
        return this._selectedNode;
    }
    public deselectNode(){
        this._selectedNode = undefined;
    }
}