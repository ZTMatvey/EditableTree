import { TreeNode } from '../types/TreeNode';
import  Branch  from './Branch'
import { TreeData } from '../types/TreeData';
import '../styles/App.css'
import '../styles/Tree.css'
import { FC, useState } from 'react';


interface TreeProps {
  treeData: TreeData;
}
const Tree: FC<TreeProps> = ({treeData}) => {
  const [tree, setTree] = useState<TreeNode[]>([]);
  function addNode(){    
    if(treeData.selectedNode != null)
      treeData.selectedNode.treeNode.addChild(new TreeNode("Node"));
    else
      tree.push(new TreeNode("Node"));
    setTree([...tree]);
  }
  function reset(){
    setTree([]);
    treeData.deselectNode();
  }
  function remove(){
    if(treeData.selectedNode != null)
    {
      const node = treeData.selectedNode.treeNode;
      if(node.parent != null)
        node.remove();
      else
      {
        const index = tree.indexOf(node);
        if (index > -1)
          tree.splice(index, 1);
      }
      treeData.deselectNode();
    }
    setTree([...tree]);
  }
  function edit(){
    if(treeData.selectedNode == null)
      return;
    treeData.selectedNode.isEditing = !treeData.selectedNode.isEditing;
    setTree([...tree]);
  }
  return (
    <div className='App'>
      <div className="tree--main">
          {
            tree.map(treeNode=> 
              <Branch key={treeNode.id} treeNode={treeNode} level={0} treeData={treeData}></Branch>
            )
          }
      </div>
      <div className="tree--btns">
        <div className="btn" onClick={addNode}>
          Add
        </div>
        <div className="btn" onClick={remove}>
          Remove
        </div>
        <div className="btn" onClick={edit}>
          Edit
        </div>
        <div className="btn" onClick={reset}>
          Reset
        </div>
      </div>
    </div>
  )
}

export default Tree;