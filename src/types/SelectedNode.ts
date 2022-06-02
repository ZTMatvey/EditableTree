import { TreeNode } from './TreeNode'

export class SelectedNode{
    public isEditing: boolean = false;
    private _treeNode: TreeNode;
    private _element: Element;
    setSelected: Function;
    public get treeNode(){
      return this._treeNode;
    }
    public get element(){
      return this._element;
    }
    
    constructor(treeNode: TreeNode, element: Element, setSelected: Function) {
      this._treeNode = treeNode;
      this._element = element;
      this.setSelected = setSelected;
    }
  }