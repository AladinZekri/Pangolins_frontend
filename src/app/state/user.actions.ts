import { createAction , props} from "@ngrx/store"; 
import { userClass } from "./user.state";


export const Add = createAction('[ajout Component] Add', props<{data: userClass}>());