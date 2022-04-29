import { TreeNode } from './types/TreeNode';
import  Branch, { SelectedNode }  from './components/Branch'
import './styles/App.css'
import './styles/Tree.css'
import { useState } from 'react';

export default function App() {
  const [tree, setTree] = useState<TreeNode[]>([]);
  function addNode(){
    if(SelectedNode.selectedNode != null)
      SelectedNode.selectedNode.treeNode.addChild(new TreeNode("Node"));
    else
      tree.push(new TreeNode("Node"));
    setTree([...tree]);
  }
  function reset(){
    setTree([]);
    SelectedNode.deselectNode();
  }
  function remove(){
    if(SelectedNode.selectedNode != null)
    {
      const node = SelectedNode.selectedNode.treeNode;
      if(node.parent != null)
        node.remove();
      else
      {
        const index = tree.indexOf(node);
        if (index > -1)
          tree.splice(index, 1);
      }
      SelectedNode.deselectNode();
    }
    setTree([...tree]);
  }
  function edit(){
    if(SelectedNode.selectedNode == null)
      return;
    SelectedNode.selectedNode.isEditing = !SelectedNode.selectedNode?.isEditing;
    setTree([...tree]);
  }
  return (
    <div className='App'>
      <div className="tree--main">
          {
            tree.map(treeNode=> 
              <Branch key={treeNode.id} treeNode={treeNode} level={0}></Branch>
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
