export const allTreeNodeTypes = {
  Default: "Default",
  Blog: "Blog",
  Resources: "Resources",
  External: "External"
}

export type TreeNodeType = typeof allTreeNodeTypes[keyof typeof allTreeNodeTypes]

export type ComponentType = {
  name: string
}
export interface PageSectionData {
  id: number
  description: any
  components: ComponentType[]
}

export interface TreeNodeData {
  name: string
  slug: string
  parentId?: string
  children?: TreeNodeData[]
  disableAdd?: boolean
  type?: TreeNodeType
  editorView?: boolean
  isCompleted?: boolean
  content: PageSectionData[]
  selectedFooter?: string
  selectedMenu?: string
}

export type SiteCost = {
  webDesignTime: EstimatedCost,
  webDevelopmentTime: EstimatedCost,
  illustrationsAndAnimationsTime: EstimatedCost
}

type EstimatedCost = {
  total: number
}

export type NodeParams = {
  nodeType: TreeNodeType
  nodeSlug: string
  nodeName: string
  edited: boolean
}

export type AnthillEstimate = {
  hoursDesign: number,
  hoursDevelopment: number,
  hoursMedia: number
}
