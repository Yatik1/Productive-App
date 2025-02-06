export interface Todo {
    id:number, 
    title:string,
    description?:string,
    created_at:string, 
    isCompleted:boolean
}

export interface Section {
    title:string, 
    data: Todo[]
  }