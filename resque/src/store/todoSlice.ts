import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface FetchError {
    message: string ;  
}
interface TodoState {
    value: number,
    todo: ToDo[],
    error: {
        message: string
    }
    status: string
}
const initialState:TodoState = {
    value: 0,
    todo: [],
    error: {
        message: ''
    },
    status: ''
}
export interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export const fetchToDos = createAsyncThunk<ToDo[], void, { rejectValue: FetchError }>(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
            if (!response.ok) {
                throw new Error("Server Error");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue({ message: error instanceof Error ? error.message : "Unknown error" });
        }
    }
);

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(fetchToDos.fulfilled, (state, action) => {
            state.todo = action.payload;
            state.status = 'resolved'
        }),
            builder.addCase(fetchToDos.pending, (state) => {
                state.status = 'loading'
            }),
            builder.addCase(fetchToDos.rejected, (state, action) => {
                state.error = action.payload ? action.payload : {message: "Unknown error"};
                state.status = 'rejected'
            })
    },

})

// export const {  } = todoSlice.actions

export default todoSlice.reducer