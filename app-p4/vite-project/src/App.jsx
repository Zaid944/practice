import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
    RecoilRoot,
    useRecoilState,
    useRecoilValue,
    useSetRecoilState,
} from "recoil";
import {
    jobAtom,
    messagingAtoms,
    networkAtom,
    notificationsAtom,
    totalSelector,
} from "./atoms";

function App() {
    return (
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

function MainApp() {
    const networkCount = useRecoilValue(networkAtom);
    const jobsCount = useRecoilValue(jobAtom);
    const messagingCount = useRecoilValue(messagingAtoms);
    // const notificationsCount = useRecoilValue(notificationsAtom);
    const [notificationsCount, setNotificationsCount] =
        useRecoilState(notificationsAtom);
    const sum = useRecoilValue(totalSelector);

    // useSetRecoilState -> function

    // const sum = networkCount+...

    // const sum = useMemo(() => {

    // }, [])

    useEffect(() => {
        axios.get("").then((res) => {
            setNotificationsCount(res.json());
        });
    }, []);

    return (
        <>
            <button>Home</button>
            <button>
                My Network ({networkCount >= 100 ? "99+" : networkCount})
            </button>
            <button>Jobs ({jobsCount})</button>
            <button>Messaging ({messagingCount})</button>
            <button>Notifications ({notificationsCount})</button>
            <button>Me ({sum})</button>
        </>
    );
}
export default App;
