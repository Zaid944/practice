import axios from "axios";
import { atom, selector } from "recoil";

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 100,
// });

// export const jobAtom = atom({
//     key: "jobAtom",
//     default: 104,
// });

// export const notificationsAtom = atom({
//     key: "notificationsAtom",
//     default: 104,
// });

// export const messagingAtoms = atom({
//     key: "messagingAtoms",
//     default: 0,
// });

// export const totalSelector = selector({
//     key: "totalSelector",
//     get: ({ get }) => {
//         return (
//             get(networkAtom) +
//             get(jobAtom) +
//             get(notificationsAtom) +
//             get(messagingAtoms)
//         );
//     },
// });

export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: selector({
        key: "notificationsAtomSelector",
        get: async () => {
            await new Promise((r) => setTimeout(r, 5000));
            const res = await axios.get("");
            return res.data;
        },
    }),
});
