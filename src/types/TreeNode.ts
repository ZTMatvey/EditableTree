export class TreeNode{
    private _id: number = TreeNode.idCounter++;
    private static idCounter = 0;
    private _content: string;
    private _children: TreeNode[];
    private _parent?: TreeNode;
    public get parent(){
        return this._parent;
    }
    public get id(){
        return this._id;
    }
    public set content(content: string){
        this._content = content;
    }
    public get content(){
        return this._content;
    }
    public get children(){
        return this._children;
    }

    constructor(content: string, children: TreeNode[] = []) {
        this._content = content;
        this._children = children;
    }
    public addChild(child: TreeNode){
        child._parent = this;
        this._children.push(child);
    }
    public removeChild(child: TreeNode){
        const index = this._children.indexOf(child);
        if (index > -1)
            this._children.splice(index, 1);
    }
    public remove(){
        this._parent!.removeChild(this);
    }
}