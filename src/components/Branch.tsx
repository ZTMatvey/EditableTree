import React, { FC, useState } from 'react'
import { TreeNode } from '../types/TreeNode'
import '../styles/Tree.css'
import { SelectedNode } from '../types/SelectedNode'
import { TreeData } from '../types/TreeData'

interface BranchProps {
  treeNode: TreeNode;
  level: number;
  treeData: TreeData;
}
const Branch: FC<BranchProps> = ({treeNode, level, treeData}) => {
  const [nodeContent, setNodeContent] = useState(treeNode.content);
  
  const isSelected = treeNode == treeData.selectedNode?.treeNode;
  const isEditing = isSelected && treeData.selectedNode?.isEditing;
  const [selected, setSelected] = useState(isSelected);
  function select(target: EventTarget, node: TreeNode){
    const selectedNode = treeData.selectedNode;
    treeData.selectedNode?.setSelected(false);

    if(selectedNode?.element == target)
      treeData.deselectNode();
    else
    {
      const selectedNode = new SelectedNode(node, target as Element, setSelected);
      treeData.setSelectedNode(selectedNode);
    }
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
              <Branch key={treeNode.id} treeNode={treeNode} level={level + 1} treeData={treeData}></Branch>
            )
          }
          </div> 
      </div>
    </div>
  );
};
  
export default Branch;