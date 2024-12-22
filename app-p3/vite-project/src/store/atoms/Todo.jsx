import { atom, selector } from "recoil";

export const todoAtom = atom({
    key: "todoAtom",
    default: [],
});

export const filterAtom = atom({
    key: "filterAtom",
    default: "",
});

export const filteredTodos = selector({
    key: "filteredTodos",
    get: ({ get }) => {
        // console.log("yooo");
        const og = get(todoAtom);
        const filter = get(filterAtom);
        // const filteredTodos = og.filter((todo) => {
        //     return (
        //         todo.title.includes(filter) || todo.description.includes(filter)
        //     );
        // });
        // return filteredTodos;
        return true;
    },
});
