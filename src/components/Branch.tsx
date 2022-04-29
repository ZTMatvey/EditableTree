import React, { FC, useState } from 'react'
import { TreeNode } from '../types/TreeNode'
import '../styles/Tree.css'

interface TreeProps {
  treeNode: TreeNode;
  level: number;

}
export class SelectedNode{
  static selectedNode: SelectedNode | null = null;
  static deselectNode() {
    SelectedNode.selectedNode = null;
  }
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
const Branch: FC<TreeProps> = ({treeNode, level}) => {
  const [nodeContent, setNodeContent] = useState(treeNode.content);
  const isSelected = treeNode == SelectedNode.selectedNode?.treeNode;
  const [selected, setSelected] = useState(isSelected);

  const isEditing = isSelected && SelectedNode.selectedNode?.isEditing;
  function select(target: EventTarget, node: TreeNode){
    const selectedNode = SelectedNode.selectedNode;
    SelectedNode.selectedNode?.setSelected(false);
    if(selectedNode?.element == target)
      SelectedNode.selectedNode = null;
    else
      SelectedNode.selectedNode = new SelectedNode(node, target as Element, setSelected);
    setSelected(!isSelected);
  }
  function getElement(){
    const classes = `node ${selected ? 'selected--node':''}`
    if(!isEditing)
      return <div className={classes} onClick={((e)=>select(e.target, treeNode))}>{nodeContent}</div>;
    else
      return <input type='text' className='editing--node' value={nodeContent} onChange={e=>setNodeContent(e.target.value)}/>;
  }
  return (
    <div>
      <div style={{marginLeft: '10px'}}>
        {
          getElement()
        }
        <div>
          {
            treeNode.children.map(treeNode=> 
              <Branch key={treeNode.id} treeNode={treeNode} level={level + 1}></Branch>
            )
          }
          </div> 
      </div>
    </div>
  );
};
  
export default Branch;