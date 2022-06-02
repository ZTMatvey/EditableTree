import { TreeNode } from './types/TreeNode';
import  Branch  from './components/Branch'
import './styles/App.css'
import './styles/Tree.css'
import { useState } from 'react';
import Tree from './components/Tree';
import { TreeData } from './types/TreeData';

export default function App() {
  return (
    <div className="tree--wrapper">
      <div>
        <Tree treeData={new TreeData()}/>
      </div>
      <div>
        <Tree treeData={new TreeData()}/>
      </div>
    </div>
  )
}
