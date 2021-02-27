import { createReducer, on } from "@ngrx/store"
import { userClass} from "./user.state"
import { Add } from './user.actions'
import * as uuid from 'uuid';



  
const initialState: Array<userClass> = [];

export const userReducer = createReducer(initialState,
    on(Add, (state, action) => ([...state, { id: uuid.v4(), username: action.type, todo: true }])),
   
   
  )