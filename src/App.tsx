import { TreeNode } from './types/TreeNode';
import  Branch  from './components/Branch'
import './styles/App.css'
import './styles/Tree.css'
import { useState } from 'react';
import Tree from './components/Tree';

export default function App() {
  return (
    <div className="tree--wrapper">
      <div>
        <Tree/>
      </div>
      <div>
        <Tree/>
      </div>
    </div>
  )
}
