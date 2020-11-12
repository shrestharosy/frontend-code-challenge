export interface IDropdownOption{
    name: string; 
    id: string 
}

export const genderOptions : Array<IDropdownOption>= [
    { id: "1", name: "Male" },
    { id: "2", name: "Female" },
    { id: "3", name: "Other" },
    { id: "4", name: "Don't specify" },

]