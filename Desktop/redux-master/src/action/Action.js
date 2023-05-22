

export const addnewtodo = (inp)=>({
    type :"addnewtodo",
    payload:{
        id:Math.random(),
        description:inp,
        isdone:false,
    }
    

})

export const checktask = (id)=>({
    type :"checktask",
    payload:id
        

})

export const deletetask = (id)=>({
    type :"deletetask",
    payload:id
        

})

export const affichage1 = (isdone)=>({
    type :"affichage1",
    payload:isdone
        
        
})

export const showIncompleteTasks = () => ({
    type: "SHOW_INCOMPLETE_TASKS",
  });
  
  export const showCompletedTasks = () => ({
    type: "SHOW_COMPLETED_TASKS",
  });