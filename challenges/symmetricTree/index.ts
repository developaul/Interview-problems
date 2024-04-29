class TreeNode {
  value: string
  right: TreeNode | null
  left: TreeNode | null
  constructor(value: string) {
    this.value = value
    this.right = null
    this.left = null
  }
}

class BinaryTree {
  root: TreeNode | null = null

  constructor(strArr: string[]) {
    this.build(strArr, 0)
  }

  build(strArr: string[], index: number) {
    const value = strArr[index]

    if (index < strArr.length && value !== '#') {
      const root = new TreeNode(value)
      root.left = this.build(strArr, 2 * index + 1)
      root.right = this.build(strArr, 2 * index + 2)

      if (index === 0) this.root = root

      return root
    }

    return null
  }

  isSymmetric() {
    if (!this.root) return true

    return this.isMirror(this.root.left, this.root.right)
  }

  isMirror(leftNode: TreeNode | null, rightNode: TreeNode | null): boolean {
    if (!leftNode && !rightNode) return true

    if (!leftNode || !rightNode) return false

    const isEqual = leftNode.value === rightNode.value

    return isEqual && this.isMirror(leftNode.left, rightNode.right) && this.isMirror(leftNode.right, rightNode.left)
  }

}

function SymmetricTree(strArr: string[]) {
  const binaryTree = new BinaryTree(strArr)

  return binaryTree.isSymmetric()
}

console.log('SymmetricTree -> ', SymmetricTree(["10", "2", "2", "#", "1", "1", "#"]));